import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as ecr from 'aws-cdk-lib/aws-ecr';
import * as elb from 'aws-cdk-lib/aws-elasticloadbalancingv2';

export class SharedStack extends cdk.Stack {
  public readonly vpc: ec2.Vpc;
  public readonly ecrRepository: ecr.IRepository;
  public readonly elb: elb.IApplicationLoadBalancer;

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    this.vpc = new ec2.Vpc(this, 'QuickBillVpc', { maxAzs: 2 });

    const repositoryArn = ecr.Repository.arnForLocalRepository('quickbill', this);

    this.ecrRepository = ecr.Repository.fromRepositoryAttributes(this, 'QuickbillRepository', {
      repositoryName: 'quickbill',
      repositoryArn: repositoryArn,
    });

    this.elb = new elb.ApplicationLoadBalancer(this, 'QuickbillLoadBalancer', {
      vpc: this.vpc,
      internetFacing: true,
      loadBalancerName: 'quickbill',
      idleTimeout: cdk.Duration.minutes(5),
    });
  }
}
