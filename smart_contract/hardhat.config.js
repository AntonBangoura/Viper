// https://ropsten.infura.io/v3/a5af050e51964e348279430aca9c8b0a

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity:'0.8.0',
  networks: {
    ropsten: {
      url: 'https://ropsten.infura.io/v3/a5af050e51964e348279430aca9c8b0a',
      accounts: [ '18c64646b597cadc166a60f76d139146e435c5d484e304a99562a8d0912e6421' ]
    }
  }
}