import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.1",
  networks: {
    hardhat: {
      forking: {
        url: URL,
      }
    }
  }
};

export default config;
