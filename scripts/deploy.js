const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  // Use the correct contract name for the Calculator contract
  const Assessment = await ethers.getContractFactory("Assessment");
  const assessment = await Assessment.deploy();
  console.log("Assessment deployed to:", assessment.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
