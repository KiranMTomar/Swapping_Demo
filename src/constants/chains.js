export const networks = [1,56,137, 97, 5,80001]

export const ChainId = {
  MAINNET:1,
  BSC: 56,
  POLYGON: 137,
  BSCTESTNET: 97,
  GÖRLI: 5,
  MUMBAI: 80001,
};

export const routerAddress = new Map();
routerAddress.set(ChainId.MAINNET, "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D");
routerAddress.set(ChainId.BSC, "0x10ED43C718714eb63d5aA57B78B54704E256024E");
routerAddress.set(ChainId.POLYGON, "0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff");
routerAddress.set(ChainId.BSCTESTNET, "0xD99D1c33F9fC3444f8101754aBC46c52416550D1");
routerAddress.set(ChainId.GÖRLI, "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D");
routerAddress.set(ChainId.MUMBAI, "0x8954AfA98594b838bda56FE4C12a09D7739D179b");
