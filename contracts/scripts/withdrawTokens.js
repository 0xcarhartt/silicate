require("dotenv").config();
const hre = require("hardhat");

async function main() {
  const usdcAddress = "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"; // modify as needed

  const SilicateNFT = await hre.ethers.getContractFactory("SilicateNFT");

  const nft = await SilicateNFT.attach(
    process.env.CONTRACT_ADDRESS // deployed contract address
  );
  console.log("SilicateNFT attached to:", nft.address);

  console.log(`Withdrawing token from NFT contract...`);

  const res = await nft.withdrawTokens(usdcAddress);

  console.log("Tokens withdrawn!", res);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
