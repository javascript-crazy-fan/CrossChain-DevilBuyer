// hardhat.config.js
const { alchemyApiKey, mnemonic, API_KEY } = require("./secrets.json");

require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
	solidity: {
		version: "0.8.0",
		settings: {
			optimizer: {
				enabled: true,
				runs: 1000,
			},
		},
	},
	networks: {
		kovan: {
			url: `https://eth-kovan.alchemyapi.io/v2/${alchemyApiKey}`,
			accounts: { mnemonic: mnemonic },
		},
		testnet: {
			url: "https://data-seed-prebsc-1-s1.binance.org:8545",
			chainId: 97,
			gas: 2100000,
			gasPrice: 20000000000,
			accounts: { mnemonic: mnemonic }
		},
		mainnet: {
			url: "https://bsc-dataseed.binance.org/",
			chainId: 56,
			gasPrice: 20000000000,
			accounts: { mnemonic: mnemonic },
		},
		fantom: {
			url: "https://rpcapi.fantom.network",
			accounts: { mnemonic: mnemonic },
			chainId: 250,
			live: true,
			saveDeployments: true,
			gasPrice: 22000000000
		},
		fantomtest: {
			url: "https://rpc.testnet.fantom.network",
			accounts: { mnemonic: mnemonic },
			chainId: 4002,
			live: true,
			saveDeployments: true,
			tags: ["staging"],
			gasMultiplier: 2
		}

	},
	etherscan: {
		apiKey: API_KEY,
	},
};
