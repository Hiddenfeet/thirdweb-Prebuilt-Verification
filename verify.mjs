import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { CronosBeta } from "@thirdweb-dev/chains" // Chain the contract you want to verify is on

const sdk = new ThirdwebSDK(CronosBeta, {
  clientId: "21f95fcb128728a6cc6ae3cc3fab58a594e51bab949036b4a5cfaa2297d3aea84a520e0e850eef6eca10f7a5d3f091daa73425fa7932ebe5e5eb101727d261b7",
});
const explorerAPIUrl = "https://api.cronoscan.com/api"; // e.g. https://api.etherscan.io/api
const explorerAPIKey = "BBSCND1TXVSE9WRVA6QGKH1CJ283VX5QA7"; // Generate API key on the explorer
const contractAddress = "0xbADf379c542c30CC55FA5b0047Db5de752C38160";
await sdk.verifier.verifyThirdwebContract(
  "DropERC721",
  // "DropERC1155",
  // "DropERC20",
  // "SignatureDrop",
  // "Marketplace",
  // "MarketplaceV3",
  // "Multiwrap",
  // "Pack",
  // "Split",
  // "TokenERC721",
  // "TokenERC1155",
  // "TokenERC20",
  // "VoteERC20",
  // "AirdropERC721",
  // "AirdropERC1155",
  // "AirdropERC20",
  // "NFTStake",
  // "EditionStake",
  // "TokenStake",
  explorerAPIUrl,
  explorerAPIKey,
);
