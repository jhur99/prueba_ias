const {
    SecretsManagerClient,
    GetSecretValueCommand,
  } = require( "@aws-sdk/client-secrets-manager")

  const secret_name = "test3_secrert";

const client = new SecretsManagerClient({
  region: "us-east-1",
  accesskey : 'AKIAZQ3DOVQDXJXHBQZM',
  secretkey: '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'
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
