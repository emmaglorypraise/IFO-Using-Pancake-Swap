const { ethers } = require("hardhat");
const helpers = require("@nomicfoundation/hardhat-network-helpers");

async function main() {

const owner = 0x88538EE7D25d41a0B823A7354Ea0f2F252AD0fAf;

  ////----------------------- DEPLOY WITTOKEN.sol ----------------------------------///
  const WTMTToken = await ethers.getContractFactory("WTMTToken");
  const wtmttoken = await WTMTToken.deploy();

  await wtmttoken.deployed();

  console.log("WITToken deployed to:", wtmttoken.address);

  console.log('Deploying token......')

  const WITTokenTransfer = await ethers.getContractAt("WITToken", wtmttoken.address);

 


////----------------------- DEPLOY ClaimToken.sol ----------------------------------///

// const ClaimToken = await ethers.getContractFactory("ClaimToken");
// const _claimToken = await ClaimToken.deploy(wtmttoken.address);

// await _claimToken.deployed();

// console.log("Claim token contract deployed to:", _claimToken.address);

// console.log('Deploying claimToken.sol contract......')

// // balance of claimToken.sol
// const balanceOfClaimContract = await WITTokenTransfer.balanceOf(_claimToken.address);
// console.log("token balance of ClaimToken.sol before transfer", balanceOfClaimContract);

// // transfer tokens from WITTOken.sol contract to claimToken.sol contract
// const transfer = await WITTokenTransfer.withdrawFromContract(_claimToken.address, "20000000000000000000");


////----------------------- Impersonate Claimee addresss ----------------------------------///

// await helpers.impersonateAccount(owner);
// const impersonatedSigner = await ethers.getSigner(owner);
// console.log('Impersonating......')


// // gives of impersonator's address Ethers for transactions
// await helpers.setBalance(impersonatedSigner.address, 100n ** 18n);

// // check token balance of claimee address
// let ethersBalance = await ethers.provider.getBalance(impersonatedSigner.address);
// console.log("Balance of ether", ethersBalance)

// //check token balance of Impersonator's address
// const tokenBalanceOfClaimee = await WITTokenTransfer.balanceOf(impersonatedSigner.address);
// console.log("token balance of claimee before", tokenBalanceOfClaimee);

// // Create Instance of ClaimToken.sol contract
// const Interact = await ethers.getContractAt("ClaimToken", _claimToken.address );
// const claimeYourToken = await Interact.connect(impersonatedSigner).claimToken(2);
// const result = await claimeYourToken.wait();
// // console.log("Result from claiming token", result)

// //check token balance of ClaimToken.sol contract
// const tokenBalanceOfClaimerContract = await WITTokenTransfer.balanceOf(_claimToken.address);
// console.log("token balance of ClaimToken.sol Contract", tokenBalanceOfClaimerContract);

// //check token balance of Impersonator's address
// const tokenBalanceOfClaimee2 = await WITTokenTransfer.balanceOf(impersonatedSigner.address);
// console.log("token balance of claimee after", tokenBalanceOfClaimee2);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});