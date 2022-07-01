import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.polygonTestnet,
  mainnet: Networks.polygonMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'HECKINCHONKERS',
  tokenName: 'HeckinChonkers',
  tokenSymbol: 'CHONKZ',
  hiddenMetadataUri: 'ipfs://QmTkRBhA5WJzveuuaxNGmUDqtn7TBmcgtrZm6eQMoTfQk3/hidden%20metadata.json',
  maxSupply: 6666,
  whitelistSale: {
    price: 0.00,
    maxMintAmountPerTx: 2,
  },
  preSale: {
    price: 0.00,
    maxMintAmountPerTx: 1,
  },
  publicSale: {
    price: 0.00,
    maxMintAmountPerTx: 1,
  },
  contractAddress: "0x84bC008ebdb2445Bb0DE19f0fB0Ec25994a8dbB7",
  marketplaceIdentifier: 'heckinchonkers',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
