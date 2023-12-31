import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as ecs from 'aws-cdk-lib/aws-ecs';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as ecr from 'aws-cdk-lib/aws-ecr';
import * as logs from 'aws-cdk-lib/aws-logs';
import * as ecsPatterns from 'aws-cdk-lib/aws-ecs-patterns';
import * as elb from 'aws-cdk-lib/aws-elasticloadbalancingv2';

interface EcsProps {
  vpc: ec2.Vpc;
  ecrRepository: ecr.IRepository;
  elb: elb.IApplicationLoadBalancer;
}

export class EcsStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: EcsProps) {
    super(scope, id);

    const { vpc, ecrRepository, elb } = props;

    // Create an ECS cluster
    const cluster = new ecs.Cluster(this, 'QuickbillCluster', { vpc });

    // Create a load-balanced Fargate service and make it public
    const service = new ecsPatterns.ApplicationLoadBalancedFargateService(this, "QuickbillFargateService", {
      cluster: cluster, // Required
      cpu: 256, // Default is 256
      desiredCount: 1, // Default is 1
      memoryLimitMiB: 512, // Default is 512
      publicLoadBalancer: true, // Default is true
      idleTimeout: cdk.Duration.minutes(5), // 5min 
      loadBalancer: elb,
      runtimePlatform: {
        cpuArchitecture: ecs.CpuArchitecture.ARM64,
        operatingSystemFamily: ecs.OperatingSystemFamily.LINUX
      },
      taskImageOptions: {
        image: ecs.ContainerImage.fromEcrRepository(ecrRepository, 'v0.0.1'),
        containerPort: 8080,
        enableLogging: false,
        containerName: 'quickbill',
        environment: {
          'NODE_ENV': 'production',
          'MODE': 'api',
          'PORT': '8080'
        },
        logDriver: new ecs.AwsLogDriver({
          streamPrefix: 'quickbill',
          logRetention: logs.RetentionDays.FIVE_DAYS
        })
      },
    });

    service.targetGroup.configureHealthCheck({
      path: '/ping',
    })
  }
}
