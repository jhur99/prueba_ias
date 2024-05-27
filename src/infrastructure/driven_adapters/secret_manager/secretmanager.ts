const {
    SecretsManagerClient,
    GetSecretValueCommand,
  } = require( "@aws-sdk/client-secrets-manager")

const secret_name = "test3_secrert";
const access_key = process.env.ACCESS_KEY
const secret_key = process.env.SECRET_KEY

const client = new SecretsManagerClient({
  region: "us-east-1"
});

// type secretType = {
//     userName: string,
//     password: string,
//     url:string,
//     port:string,
//     datebase:string
// }

let response

async function getSecret() {
    
    try {
      response = await client.send(
        new GetSecretValueCommand({
          SecretId: secret_name,
          VersionStage: "AWSCURRENT", // VersionStage defaults to AWSCURRENT if unspecified
          accesskey : access_key,
          secretkey: secret_key
        })
      );
    } catch (error) {
      // For a list of exceptions thrown, see
      // https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_GetSecretValue.html
      throw error;
    }
    return response
}

getSecret()
