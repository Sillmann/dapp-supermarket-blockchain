import { ethers } from "hardhat";

async function main() {

  const supermarket = await ethers.deployContract("Supermarket");

  await supermarket.waitForDeployment();

  const address = await supermarket.getAddress();

  console.log(`Deploy finished at ${address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});