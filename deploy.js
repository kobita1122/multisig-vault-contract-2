// A simple deployment script for Hardhat or similar environments
async function main() {
    const [deployer, addr1, addr2] = await ethers.getSigners();
    const MultiSigWallet = await ethers.getContractFactory("MultiSigWallet");
    
    // Deploying with 2-of-3 signatures required
    const wallet = await MultiSigWallet.deploy([deployer.address, addr1.address, addr2.address], 2);

    console.log("MultiSig Wallet deployed to:", wallet.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
