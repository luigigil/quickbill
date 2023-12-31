#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { EcsStack } from '../lib/ecs.stack';
import { SharedStack } from '../lib/shared.stack';

const app = new cdk.App();

const shared = new SharedStack(app, 'SharedStack');

new EcsStack(app, 'EcsStack', {
  vpc: shared.vpc,
  ecrRepository: shared.ecrRepository,
  elb: shared.elb,
});
