#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from "@aws-cdk/core";
import { ApiGatewayGraphQl } from '../lib';

const app = new cdk.App();
new ApiGatewayGraphQl(app, 'ApiGatewayGraphQl');
app.synth();