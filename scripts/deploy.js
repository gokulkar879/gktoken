
const { expect } = require("chai");
const { ethers } = require("hardhat");
const hre = require("hardhat");
const abi = require('../artifacts/contracts/HelloK.sol/HelloK.json')
const bucketabi = require('./bucket.json')
async function main() {
     const [signer] = await ethers.getSigners();
    // //  console.log(provider)

    // console.log(await signer.getBalance());
    // console.log(signer.address);

    // const Token = await ethers.getContractFactory("HelloK");
    // const token = await Token.deploy();

    // await token.deployed();

    // console.log(token.address);

    const dep_address = "0xc97A091E350Fc453c6dF77710e33DD5c64f90A2a";
    const bucket_address = "0x873289a1aD6Cf024B927bd13bd183B264d274c68"

    const Contract = new ethers.Contract(dep_address, abi["abi"], signer);
    await Contract.approve(bucket_address, "20");


    const bucket = await ethers.getContractAt(bucketabi, bucket_address);
    console.log(bucket)

    await bucket.drop(dep_address, "20");

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


