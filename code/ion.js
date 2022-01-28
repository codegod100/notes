const ION = require('@decentralized-identity/ion-tools')

async function main(){
// let authnKeys = await ION.generateKeyPair();
let authnKeys = {
  publicJwk: {
    kty: 'EC',
    crv: 'secp256k1',
    x: 'h6WRX_oZ8epRIXCzoBOABwPDXky4wMXQ2pEJHGyCDoM',
    y: '35Kqfgu4y5yWFHODI2rBXUFsZAB0z23Mhw5G7zJ5lr0'
  },
  privateJwk: {
    kty: 'EC',
    crv: 'secp256k1',
    d: 'Oj0Kf4g7QZ7VVIfnq9l8qpm4Ljt6Jh6dhxbIXGpXwmY',
    x: 'h6WRX_oZ8epRIXCzoBOABwPDXky4wMXQ2pEJHGyCDoM',
    y: '35Kqfgu4y5yWFHODI2rBXUFsZAB0z23Mhw5G7zJ5lr0'
  }
}
let did = new ION.DID({
  content: {
    publicKeys: [
      {
        id: 'key-1',
        type: 'EcdsaSecp256k1VerificationKey2019',
        publicKeyJwk: authnKeys.publicJwk,
        purposes: [ 'authentication' ]
      }
    ],
    services: [
      {
        id: 'github',
        type: 'github',
        serviceEndpoint: 'github.com/fuck-capitalism'
      }
    ]
  }
});
let uri = await did.getURI()
let short = await did.getURI('short');
console.log(authnKeys)
console.log(uri)
console.log(short)

}

main()