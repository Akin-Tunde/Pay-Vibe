/**
 * lib/stacks.js
 * Updated for Stacks.js v7+ (2025 compatibility)
 * Uses static network objects instead of constructors
 */
import { STACKS_MAINNET, STACKS_TESTNET } from "@stacks/network";

// Read network type from environment variable
const networkEnv = process.env.NEXT_PUBLIC_NETWORK || "testnet";

/**
 * In v6+, StacksMainnet and StacksTestnet classes were removed.
 * We now use the static STACKS_MAINNET and STACKS_TESTNET objects.
 * If you need a custom URL, you simply spread the object and override the 'url' property.
 */
export const network = networkEnv.toLowerCase() === "mainnet"
    ? { ...STACKS_MAINNET, url: "https://stacks-node-api.mainnet.stacks.co" }
    : { ...STACKS_TESTNET, url: "https://stacks-node-api.testnet.stacks.co" };

// Log configuration for debugging
if (process.env.NODE_ENV === 'development') {
    console.log(`Stacks Network initialized for: ${networkEnv}`);
    console.log(`Node URL: ${network.url}`);
}