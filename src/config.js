const config = {
    s3: {
      REGION: "us-west-2",
      BUCKET: "yu-notes-app-upload",
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://ruxyfojvd5.execute-api.us-east-1.amazonaws.com/prod",
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_9YVOMihU3",
      APP_CLIENT_ID: "621mc5s5av52puetshcpd1c3se",
      IDENTITY_POOL_ID: "us-east-1:173a06f0-b423-4c2c-9ee9-0ca73b248076",
    },
};

export default config;