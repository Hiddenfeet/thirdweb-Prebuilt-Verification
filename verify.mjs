import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { CronosBeta } from "@thirdweb-dev/chains" // Chain the contract you want to verify is on

const sdk = new ThirdwebSDK(CronosBeta)
const explorerAPIUrl = "https://api.cronoscan.com/api"; // e.g. https://api.etherscan.io/api
const explorerAPIKey = "BBSCND1TXVSE9WRVA6QGKH1CJ283VX5QA7"; // Generate API key on the explorer
const contractAddress = "0xbADf379c542c30CC55FA5b0047Db5de752C38160"
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
