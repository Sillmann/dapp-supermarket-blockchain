----------------
dapp-supermarket
----------------
1. create dapp-supermarket

2. create dapp-supermarket/blockchain

3. initialize project node
   npm init -y

4. install hardhat
   npm i -D hardhat   

5. initialize hardhat
   npx hardhat init
   - Create a TypeScript project;
   - hardhat project root: <enter>
   - Do you want to add a .gitignore? (Y/n) » y
   - install a sample projets..: Yes   
   
6. adaptations
   code .
   - contracts > Lock.sol ( rename to Supermarket.sol )
   - ignition > modules > Lock.ts ( rename to scripts > deploy.ts ) 
   - test ( rename to Supermarket.test.ts )

7. compile ( create artifacts e cache ) - abi 
   npx hardhat compile    
   
8. test
   npx hardhat test   
   
9. deploy
   
   a)
   npm i dotenv

   b)
   create .env
   SECRET=ticket grief hire hundred deal ivory square brown chef chunk reward element
   SEP_URL=https://eth-sepolia.g.alchemy.com/v2/8CRRcM4ZoZrnZkgqBOAK-GjIVjoYvgZN
   API_KEY=DA14SBZEAJ9GZ5PYNS9E6ZUS3IHC49M87Y

   c)
adaptations in hardhat.config.ts
import dotenv from "dotenv";
dotenv.config();

import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {

    sepolia: {
      url: process.env.SEP_URL,
      chainId: 11155111,
      accounts: {
        mnemonic: process.env.SECRET
      }
    },

  },
  etherscan: {
    apiKey: process.env.API_KEY
  },

  sourcify: {
    enabled: true
  }

};

export default config;

	d) command deploy
npx hardhat run scripts/deploy.ts --network sepolia
Deploy finished at XXXXXXXXXXXXXX
Deploy finished at 0xc9302be070F10212A95a7b0c83f7f87f73BCF403

see in https://sepolia.etherscan.io/   

10. verify and publish
  install a package for hardhat to communicate with etherscan
  npm i -D @nomiclabs/hardhat-etherscan

  npx hardhat verify --network sepolia XXXXXXXXXXXXXX
  npx hardhat verify --network sepolia 0xc9302be070F10212A95a7b0c83f7f87f73BCF403