//type 'npm install web3' in the terminal in the folder this file is in. (you need to download node.js if this does not work.)
//run the program by typing 'node ens.js' in the terminal from the folder this file is in.
//you also need to change your project id to your own. you can get one from infura.
//type the list into "ensNames.txt" one word perline, without '.eth'



const Web3 = require('web3');
const fs = require('fs');
const readline = require('readline');

class EnsChecker{
    web3;
    constructor(projectId){
        let provider=new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/'+projectId)
        this.web3=new Web3(provider);
    }
    async ensLedig(ensname){
        try {
            let name=await this.web3.eth.ens.getOwner(ensname);
        if(name=='0x0000000000000000000000000000000000000000'){
            console.log(ensname)
        }
        } catch (error) {
            console.log('contains illegal characters: ('+ensname+')')
        }
    }
}



async function avalibeEnsNamesFromFile(file) {
  const fileStream = fs.createReadStream(file);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });
  console.log('---------------------------------------')
  console.log('The avalible names are:')
  console.log('---------------------------------------')
  for await (const line of rl) {
        ens.ensLedig(line+'.eth')

  }
}


const projectid='7cb4f0f0282d403bad7078356f74a019'; //this is your project id from infura
let ens=new EnsChecker(projectid);
avalibeEnsNamesFromFile('ensNames.txt');


