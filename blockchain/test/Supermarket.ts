import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import hre from "hardhat";

describe("Supermarket", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployFixture() {

    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await hre.ethers.getSigners();

    const Supermarket = await hre.ethers.getContractFactory("Supermarket");
    const supermarket = await Supermarket.deploy();

    return { supermarket, owner, otherAccount };
  }
  
  it("Should get Hello Supermarket", async function () {
    const { supermarket, owner, otherAccount } = await loadFixture(deployFixture);
    const message = await supermarket.message();
    expect(message).to.equal("Hello Supermarket");
  });

  it("Should set Hello Supermarket", async function () {
    const { supermarket, owner, otherAccount } = await loadFixture(deployFixture);
    await supermarket.setMessage("New Message");
    expect(await supermarket.message()).to.equal("New Message");
  });
  
});
