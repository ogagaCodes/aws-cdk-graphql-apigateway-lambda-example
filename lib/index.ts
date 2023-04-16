import * as cdk from "@aws-cdk/core";
import * as s3 from '@aws-cdk/aws-s3';
import * as lambda from "@aws-cdk/aws-lambda";
import * as apiGateway from "@aws-cdk/aws-apigateway";

export class ApiGatewayGraphQl extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const graphqlLambda = new lambda.Function(this, "graphqlLambda", {
      code: new lambda.AssetCode(`./lib`),
      handler: "graphql.handler",
      runtime: lambda.Runtime.NODEJS_12_X,
    });
    new s3.Bucket(this, 'MyBucket', {
      versioned: true
    });
    new apiGateway.LambdaRestApi(this, "graphqlEndpoint", {
      handler: graphqlLambda,
    });
  }
}