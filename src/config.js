const dev = {
  STRIPE_KEY: "pk_test_51HFNa3Iu8bN42HTQDSskOej5uVBc4mB1vb4ZFhwzHyfwQjx3AqlQhIoDnU2yteTKVo31Ie4CVljbAbedBLa7MIMp00uxt7OOG1",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-yqmop785a4tx"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://ej2tw0hv60.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_b4Ql2uLWv",
    APP_CLIENT_ID: "466s999amohd7qkqs22ead9541",
    IDENTITY_POOL_ID: "us-east-1:1ac1be28-f341-4625-b09a-a1adb2015ade"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_51HFNa3Iu8bN42HTQDSskOej5uVBc4mB1vb4ZFhwzHyfwQjx3AqlQhIoDnU2yteTKVo31Ie4CVljbAbedBLa7MIMp00uxt7OOG1",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-85jhbx4qndjp"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://28p358qxyl.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_PAMSf7Pcs",
    APP_CLIENT_ID: "23gta1qngf7on1m3cd19vj2ghj",
    IDENTITY_POOL_ID: "us-east-1:fb127b03-4e5c-42f1-86e7-c0aae94135e7"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};