// scripts/deploy.js
require("@nomiclabs/hardhat-ethers");

async function main() {

	const Vesting = await ethers.getContractFactory("Vesting");
	console.log("Deploying Vesting...");
	const box = await Vesting.deploy(
		"0x0553012693C72D470dBf457298A729FA99618645"
	);
	console.log("Vesting :", box.address);
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
