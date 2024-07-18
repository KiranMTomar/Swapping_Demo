import * as chains from './chains';

// If you add coins for a new network, make sure Weth address (for the router you are using) is the first entry
const MAINNETCoins = [
  {
    name: "Ether",
    abbr: "ETH",
    address: "", // Weth address is fetched from the router
  },
  {
    name: "Dai",
    abbr: "DAI",
    address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
  },
  {
    name: "Tether USD",
    abbr: "USDT",
    address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
  },
  {
    name: "Ampleforth",
    abbr: "AMPL",
    address: "0xD46bA6D942050d489DBd938a2C909A5d5039A161",
  },
  {
    name: "Wrapped BTC",
    abbr: "WBTC",
    address: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
  },
  {
    name: "Fei USD",
    abbr: "FEI",
    address: "0x956F47F50A910163D8BF957Cf5846D573E7f87CA",
  },
  {
    name: "frax",
    abbr: "FRAX",
    address: "0x853d955aCEf822Db058eb8505911ED77F175b99e",
  },
  {
    name: "Frax Share",
    abbr: "FXS",
    address: "0x3432B6A60D23Ca0dFCa7761B7ab56459D9C964D0",
  },
  {
    name: "renBTC",
    abbr: "renBTC",
    address: "0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D",
  },
  {
    name: "StakeWise",
    abbr: "SWISE",
    address: "0x48C3399719B582dD63eB5AADf12A40B4C3f52FA2",
  },
]

const POLYGONCoins = [
  {
    name: "Wrapped Matic",
    address: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
    abbr: "WMATIC",
    "decimals": 18,
    "chainId": 137,
    "logoURI": "https://i.imgur.com/uIExoAr.png"
    },
    {
      name: "4INT",
      address: "0x5CEeBB0947d58Fabde2fc026Ffe4B33ccFE1bA8B",
      abbr: "4INT",
      "decimals": 9,
      "chainId": 137,
      "logoURI": "https://polygonscan.com/token/images/forintfinance_32.png"
      },
      {
      name: "Aave",
      address: "0xD6DF932A45C0f255f85145f286eA0b292B21C90B",
      abbr: "AAVE",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://etherscan.io/token/images/aave_32.png"
      },
      {
      name: "Arable Protocol",
      address: "0x011734f6Ed20E8D011d85Cf7894814B897420acf",
      abbr: "ACRE",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/23659/small/acre_token-02.png?1644989289"
      },
      {
      name: "Adamant",
      address: "0xc3FdbadC7c795EF1D6Ba111e06fF8F16A20Ea539",
      abbr: "ADDY",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://adamant.finance/img/adamant.png"
      },
      {
      name: "Adshares",
      address: "0x598e49f01bEfeB1753737934a5b11fea9119C796",
      abbr: "ADS",
      "decimals": 11,
      "chainId": 137,
      "logoURI": "https://s2.coinmarketcap.com/static/img/coins/64x64/1883.png"
      },
      {
      name: "agEUR",
      address: "0xE0B52e49357Fd4DAf2c15e02058DCE6BC0057db4",
      abbr: "agEUR",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/19479/small/agEUR.png?1635283566"
      },
      {
      name: "Algebra",
      address: "0x0169eC1f8f639B32Eec6D923e24C2A2ff45B9DD6",
      abbr: "ALGB",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/19580/small/13211.png?1635469023"
      },
      {
      name: "Artificial Liquid Intelligence Token",
      address: "0xbFc70507384047Aa74c29Cdc8c5Cb88D0f7213AC",
      abbr: "ALI",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://i.imgur.com/WxPZm2m.png"
      },
      {
      name: "Aavegotchi ALPHA",
      address: "0x6a3E7C3c6EF65Ee26975b12293cA1AAD7e1dAeD2",
      abbr: "ALPHA",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/24738/small/alpha.png?1648769768"
      },
      {
      name: "Ankr",
      address: "0x101A023270368c0D50BFfb62780F4aFd4ea79C35",
      abbr: "ANKR",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://i.ibb.co/7rfcYCC/Ankr-4.png"
      },
      {
      name: "Ankr Staked MATIC",
      address: "0x0E9b89007eEE9c958c0EDA24eF70723C2C93dD58",
      abbr: "ankrMATIC",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://i.ibb.co/Q9nbfqz/a-MATICc-2.png"
      },
      {
      name: "AnRKey X",
      address: "0x554f074d9cCda8F483d1812d4874cBebD682644E",
      abbr: "ANRX",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/13415/small/anrkey.jpg?1608311301"
      },
      {
      name: "Astrafer",
      address: "0xDfCe1e99A31C4597a3f8A8945cBfa9037655e335",
      abbr: "ASTRAFER",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/26246/small/ATSRA_Token.png?1657276411"
      },
      {
      name: "Cosmos",
      address: "0xac51C4c48Dc3116487eD4BC16542e27B5694Da1b",
      abbr: "ATOM",
      "decimals": 6,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/1481/small/cosmos_hub.png?1555657960"
      },
      {
      name: "Avalanche Token",
      address: "0x2C89bbc92BD86F8075d1DEcc58C7F4E0107f286b",
      abbr: "AVAX",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/12559/small/coin-round-red.png?1604021818"
      },
      {
      name: "Axelar",
      address: "0x6e4E624106Cb12E168E6533F8ec7c82263358940",
      abbr: "AXL",
      "decimals": 6,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/27277/small/V-65_xQ1_400x400.jpeg?1663121730"
      },
      {
      name: "Axelar Wrapped PEPE",
      address: "0x8baE3F5Eb10F39663E57Be19741FD9ccEF0E113a",
      abbr: "axlPEPE",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/29850/small/pepe-token.jpeg?1682922725"
      },
      {
      name: "Axelar Wrapped USDC",
      address: "0x750e4C4984a9e0f12978eA6742Bc1c5D248f40ed",
      abbr: "axlUSDC",
      "decimals": 6,
      "chainId": 137,
      "logoURI": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png"
      },
      {
      name: "Banana",
      address: "0xbC91347e80886453F3f8bBd6d7aC07C122D87735",
      abbr: "BANANA",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/17521/small/banana-token-cg.png?1646285527"
      },
      {
      name: "BetSwirl Token",
      address: "0x9246a5F10A79a5a939b0C2a75A3AD196aAfDB43b",
      abbr: "BETS",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/26618/small/icon_200.png?1659073275"
      },
      {
      name: "Biconomy Token",
      address: "0x91c89A94567980f0e9723b487b0beD586eE96aa7",
      abbr: "BICO",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/21061/small/biconomy_logo.jpg?1638269749"
      },
      {
      name: "beefy.finance",
      address: "0xFbdd194376de19a88118e84E279b977f165d01b8",
      abbr: "BIFI",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://raw.githubusercontent.com/beefyfinance/beefy-app/prod/src/images/single-assets/BIFI.png"
      },
      {
      name: "GoBlank Token",
      address: "0xf4C83080E80AE530d6f8180572cBbf1Ac9D5d435",
      abbr: "BLANK",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/14209/small/blank.png?1614940842"
      },
      {
      name: "Bolide",
      address: "0x4b27Cd6E6a5E83d236eAD376D256Fe2F9e9f0d2E",
      abbr: "BLID",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/25548/small/BLID_token_logo_200x200.png?1652334831"
      },
      {
      name: "BLOK",
      address: "0x229b1b6C23ff8953D663C4cBB519717e323a0a84",
      abbr: "BLOK",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://pbs.twimg.com/profile_images/1443182135410634754/l1wH-p3b_400x400.jpg"
      },
      {
      name: "Binance Token",
      address: "0x5c4b7CCBF908E64F32e12c6650ec0C96d717f03F",
      abbr: "BNB",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/825/small/binance-coin-logo.png?1547034615"
      },
      {
      name: "BOB",
      address: "0xB0B195aEFA3650A6908f15CdaC7D92F8a5791B0B",
      abbr: "BOB",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/27266/small/Bob-logo.png?1663073030"
      },
      {
      name: "Bookie",
      address: "0x8192759Bf7f247cC92F74E39B3A4225516624fC1",
      abbr: "BOOK",
      "decimals": 8,
      "chainId": 137,
      "logoURI": "https://bookie.farm/logoether/bookie200.png"
      },
      {
      name: "Catheon Gaming",
      address: "0x7e7737C40878e720b32e7bC9CD096259f876d69f",
      abbr: "CATHEON",
      "decimals": 9,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/28052/small/_removal.ai__tmp-635fe0271d6a3%281%29.png?1667286253"
      },
      {
      name: "Coinbase Wrapped Staked ETH",
      address: "0x4b4327dB1600B8B1440163F667e199CEf35385f5",
      abbr: "cbETH",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://dynamic-assets.coinbase.com/55517c7b84cff054d0bf84f6d82680b5368915854f855ec4fe0178478a637b18a985ec85b87387beb2ae2a1b276fcb320ac7451c358302ceebb179c58934ff65/asset_icons/93aa525880c2df46f3d5404cff1844a42f1a5d1fc812128ae3f70f2ce4a882e1.png"
      },
      {
      name: "NFT Champions",
      address: "0x8f9E8e833A69Aa467E42c46cCA640da84DD4585f",
      abbr: "CHAMP",
      "decimals": 8,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/19536/small/champ.png?1635905981"
      },
      {
      name: "Crosschain IOTX",
      address: "0x300211Def2a644b036A9bdd3e58159bb2074d388",
      abbr: "CIOTX",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://raw.githubusercontent.com/iotexproject/iotex-token-metadata/master/images/io1nxetpma4de3wx6tqcgxdtj5wc64a24t64dc76s.png"
      },
      {
      name: "Cryption Network Token",
      address: "0xD1e6354fb05bF72A8909266203dAb80947dcEccF",
      abbr: "CNT",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/16171/small/Cryption_Logo_Gradient_White_Text.png?1623191284"
      },
      {
      name: "Furucombo",
      address: "0x6DdB31002abC64e1479Fc439692F7eA061e78165",
      abbr: "COMBO",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/13629/small/COMBO_token_ol.png?1610701537"
      },
      {
      name: "CosplayToken",
      address: "0x8d520c8E66091cfD6743fe37Fbe3A09505616C4b",
      abbr: "COT",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/21294/small/brave_ZxsjzUc8xn.png?1638874098"
      },
      {
      name: "Cookies Protocol",
      address: "0xf9D3d8B25b95BCDA979025B74fDFa7ac3F380f9f",
      abbr: "CP",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://pbs.twimg.com/profile_images/1585702488912629763/8jX3_qXC_400x400.jpg"
      },
      {
      name: "Crypto Volatility Token",
      address: "0x9CD552551EC130b50c1421649C8d11E76aC821e1",
      abbr: "CVOL",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/24008/small/govi-dao.03ef3083.png?1646029661"
      },
      {
      name: "Cyclone Protocol",
      address: "0xcFb54a6D2dA14ABeCD231174FC5735B4436965D8",
      abbr: "CYC",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/14065/small/b3_DFjFp_400x400.jpg?1614128740"
      },
      {
      name: "Dai Stablecoin",
      address: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
      abbr: "DAI",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png"
      },
      {
      name: "Davos",
      address: "0xEC38621e72D86775a89C7422746de1f52bbA5320",
      abbr: "DAVOS",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/28775/large/DAVOS_200x200.png?1676529599"
      },
      {
      name: "DeRace Token",
      address: "0xB35fcBCF1fD489fCe02Ee146599e893FDCdC60e6",
      abbr: "DERC",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/17438/small/derace-logo-black-coingecko.png?1627656907"
      },
      {
      name: "decentral.games",
      address: "0xef938b6da8576a896f6E0321ef80996F4890f9c4",
      abbr: "DG",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://polygonscan.com/token/images/decentralgame_32.png?v=5"
      },
      {
      name: "Dogira",
      address: "0xdDa40cdfe4A0090f42Ff49f264A831402ADB801A",
      abbr: "DOGIRA",
      "decimals": 9,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/14634/small/IQgaRw0.png?1622439620"
      },
      {
      name: "DOSE",
      address: "0x81382e9693dE2aFc33F69B70a6C12CA9B3a73F47",
      abbr: "DOSE",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/18847/small/dose.PNG?1633590548"
      },
      {
      name: "DefiPulse Index",
      address: "0x85955046DF4668e1DD369D2DE9f3AEB98DD2A369",
      abbr: "DPI",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/12465/small/defi_pulse_index_set.png?1600051053"
      },
      {
      name: "Dragon QUICK(NEW)",
      address: "0x958d208Cdf087843e9AD98d23823d32E17d723A1",
      abbr: "dQUICK(NEW)",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://i.ibb.co/HGWTLM7/Quick-Icon-V2.png"
      },
      {
      name: "Waves Ducks",
      address: "0x51dE72b17c7bD12E9E6d69eb506a669EB6b5249E",
      abbr: "EGG",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/17298/small/200x200_pixel.png?1627288546"
      },
      {
      name: "Dogelon",
      address: "0xE0339c80fFDE91F3e20494Df88d4206D86024cdF",
      abbr: "ELON",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/14962/small/6GxcPRo3_400x400.jpg?1619157413"
      },
      {
      name: "Ethernity Chain",
      address: "0x0E50BEA95Fe001A370A4F1C220C49AEdCB982DeC",
      abbr: "ERN",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/14238/small/ethernity_logo.png?1615189750"
      },
      {
      name: "Ether",
      address: "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
      abbr: "ETH",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png"
      },
      {
      name: "ETHA",
      address: "0x59E9261255644c411AfDd00bD89162d09D862e38",
      abbr: "ETHA",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/14141/small/etha_logo200x200.png?1614646986"
      },
      {
      name: "EASY V2",
      address: "0x34C1b299A74588D6Abdc1b85A53345A48428a521",
      abbr: "EZ",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://etherscan.io/token/images/easyfi_32.png?v=2"
      },
      {
      name: "FireBotToken",
      address: "0xD125443F38A69d776177c2B9c041f462936F8218",
      abbr: "FBX",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://polygonscan.com/token/images/firebottoken_32.png"
      },
      {
      name: "Fear NFTs",
      address: "0xa2CA40DBe72028D3Ac78B5250a8CB8c404e7Fb8C",
      abbr: "FEAR",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://quickswap.exchange/static/media/0xa2ca40dbe72028d3ac78b5250a8cb8c404e7fb8c.a4263994.webp"
      },
      {
      name: "StaFi",
      address: "0x7A7B94F18EF6AD056CDa648588181CDA84800f94",
      abbr: "FIS",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/12423/large/FIS.png?1681125834"
      },
      {
      name: "FireStarter",
      address: "0x22e3f02f86Bc8eA0D73718A2AE8851854e62adc5",
      abbr: "FLAME",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/17359/small/Logo_black_%282%29.png?1634095075"
      },
      {
      name: "Fancy Games",
      address: "0x7f280daC515121DcdA3EaC69eB4C13a52392CACE",
      abbr: "FNC",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/21367/small/fnc.png?1639025576"
      },
      {
      name: "Aavegotchi FOMO",
      address: "0x44A6e0BE76e1D9620A7F76588e4509fE4fa8E8C8",
      abbr: "FOMO",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/24737/small/fomo.png?1648769659"
      },
      {
      name: "FoodChain Global",
      address: "0x6F06e6beD64cF4c4187c06Ee2a4732f6a171BC4e",
      abbr: "FOOD",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/23755/small/food.png?1645347956"
      },
      {
      name: "Frax",
      address: "0x45c32fA6DF82ead1e2EF74d17b76547EDdFaFF89",
      abbr: "FRAX",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://polygonscan.com/token/images/frax_32.png"
      },
      {
      name: "Fantom Token",
      address: "0xB85517b87BF64942adf3A0B9E4c71E4Bc5Caa4e5",
      abbr: "FTM",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/4001/small/Fantom.png?1558015016"
      },
      {
      name: "Aavegotchi FUD",
      address: "0x403E967b044d4Be25170310157cB1A4Bf10bdD0f",
      abbr: "FUD",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/24736/small/fud.png?1648769512"
      },
      {
      name: "Fuse",
      address: "0xF915fDDa4c882731C0456a4214548Cd13A822886",
      abbr: "FUSE",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/10347/small/vUXKHEe.png?1601523640"
      },
      {
      name: "Affyn",
      address: "0x3B56a704C01D650147ADE2b8cEE594066b3F9421",
      abbr: "FYN",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/23275/small/fyn.png?1643526250"
      },
      {
      name: "GAIA Everworld",
      address: "0x723B17718289A91AF252D616DE2C77944962d122",
      abbr: "GAIA",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/19629/small/gaia_icon_new.png?1637559277"
      },
      {
      name: "GameStation",
      address: "0x3f6b3595ecF70735D3f48D69b09C4E4506DB3F47",
      abbr: "GAMER",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/19584/small/game_station.PNG?1635471603"
      },
      {
      name: "Giddy Token",
      address: "0x67eB41A14C0fe5CD701FC9d5A3D6597A72F641a6",
      abbr: "GDDY",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/24960/small/gddy.png?1649573862"
      },
      {
      name: "Aavegotchi GHST Token",
      address: "0x385Eeac5cB85A38A9a07A70c73e0a3271CfB54A7",
      abbr: "GHST",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://aavegotchi.com/images/ghsttoken.svg"
      },
      {
      name: "GAX Liquidity Token Reward",
      address: "0x3801C3B3B5c98F88a9c9005966AA96aa440B9Afc",
      abbr: "GLTR",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://i.ibb.co/qMMwsK7/gltr-token.png"
      },
      {
      name: "Guild Member Token",
      address: "0xE40d881Cf66e1F6D19979A5fF6c830C6Af65D278",
      abbr: "GM",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://ipfs.io/ipfs/QmY1uqAaLvQ2cnax4P6ETQwHJmsigS6tLUQkomd4eZJMpM"
      },
      {
      name: "GAMEE",
      address: "0xcf32822ff397Ef82425153a9dcb726E5fF61DCA7",
      abbr: "GMEE",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/14716/small/gmee-200x200.png?1621827468"
      },
      {
      name: "Gains Network",
      address: "0xE5417Af564e4bFDA1c483642db72007871397896",
      abbr: "GNS",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://gains.trade/images/logo.png"
      },
      {
      name: "Goo",
      address: "0x6F3Cc27E17a0f2e52D8e7693FF0d892Cea1854bF",
      abbr: "GOO",
      "decimals": 9,
      "chainId": 137,
      "logoURI": "https://playgooeys.com/GOO-200x200.png"
      },
      {
      name: "GOVI",
      address: "0x43Df9c0a1156c96cEa98737b511ac89D0e2A1F46",
      abbr: "GOVI",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://i.imgur.com/FCl7zHM.png"
      },
      {
      name: "Hanzo",
      address: "0x37eB60F78e06c4BB2A5F836B0Fc6BCcBbaA995b3",
      abbr: "HANZO",
      "decimals": 9,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/15486/small/hanzo.png?1635830733"
      },
      {
      name: "HEXX",
      address: "0x23D29D30e35C5e8D321e1dc9A8a61BFD846D4C5C",
      abbr: "HEX",
      "decimals": 8,
      "chainId": 137,
      "logoURI": "https://hex.com/favicon.png"
      },
      {
      name: "Hop",
      address: "0xc5102fE9359FD9a28f877a67E36B0F050d81a3CC",
      abbr: "HOP",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/25445/small/hop.png?1665541677"
      },
      {
      name: "Decentral Games ICE",
      address: "0xc6C855AD634dCDAd23e64DA71Ba85b8C51E5aD7c",
      abbr: "ICE",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/18110/small/ice-poker.png?1630500966"
      },
      {
      name: "GeniuX",
      address: "0x346404079b3792a6c548B072B9C4DDdFb92948d5",
      abbr: "IUX",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/26078/small/black_IUX-coin-logo2.png?1661767150"
      },
      {
      name: "PlanetIX",
      address: "0xE06Bd4F5aAc8D0aA337D13eC88dB6defC6eAEefE",
      abbr: "IXT",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/20927/small/IXT_SYMBOL_SVG_RGB_BLACK.png?1637934555"
      },
      {
      name: "JPY Coin",
      address: "0x6AE7Dfc73E0dDE2aa99ac063DcF7e8A63265108c",
      abbr: "JPYC",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/17277/small/WoZ8rruL_400x400.png?1627016492"
      },
      {
      name: "Aavegotchi KEK",
      address: "0x42E5E06EF5b90Fe15F853F59299Fc96259209c5C",
      abbr: "KEK",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/24739/small/kek.png?1648769879"
      },
      {
      name: "Klima DAO",
      address: "0x4e78011Ce80ee02d2c3e649Fb657E45898257815",
      abbr: "KLIMA",
      "decimals": 9,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/19169/small/klima-logo.png?1634606729"
      },
      {
      name: "Forest Knight",
      address: "0x4455eF8B4B4A007a93DaA12DE63a47EEAC700D9D",
      abbr: "KNIGHT",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/18441/small/Coin_Forest_Knight_200x200.png?1632480031"
      },
      {
      name: "Kommunitas",
      address: "0xC004e2318722EA2b15499D6375905d75Ee5390B8",
      abbr: "KOM",
      "decimals": 8,
      "chainId": 137,
      "logoURI": "https://i.imgur.com/KTS2F7I.png"
      },
      {
      name: "Lucidao",
      address: "0xc2A45FE7d40bCAc8369371B08419DDAFd3131b4a",
      abbr: "LCD",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/23693/small/lcd-icon-color-200px.png?1645450706"
      },
      {
      name: "Lido DAO Token",
      address: "0xC3C7d422809852031b44ab29EEC9F1EfF2A58756",
      abbr: "LDO",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/13573/small/Lido_DAO.png?1609873644"
      },
      {
      name: "LunaFi",
      address: "0x77D97db5615dFE8a2D16b38EAa3f8f34524a0a74",
      abbr: "LFI",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/24594/small/lfi.png?1648310927"
      },
      {
      name: "ChainLink Token",
      address: "0x53E0bca35eC356BD5ddDFebbD1Fc0fD03FaBad39",
      abbr: "LINK",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x514910771AF9Ca656af840dff83E8264EcF986CA/logo.png"
      },
      {
      name: "LumiiiToken",
      address: "0xED88227296943857409A8e0f15Ad7134e70D0F73",
      abbr: "LUMIII",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://s2.coinmarketcap.com/static/img/coins/64x64/21892.png"
      },
      {
      name: "Lunr Token",
      address: "0xBBfE0B60dE96a189BF09079DE86A2Db7bF0C7883",
      abbr: "Lunr",
      "decimals": 4,
      "chainId": 137,
      "logoURI": "https://s2.coinmarketcap.com/static/img/coins/64x64/12971.png"
      },
      {
      name: "MAI",
      address: "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1",
      abbr: "MAI",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://raw.githubusercontent.com/0xlaozi/qidao/main/images/mimatic-red.png"
      },
      {
      name: "Decentraland MANA",
      address: "0xA1c57f48F0Deb89f569dFbE6E2B7f46D33606fD4",
      abbr: "MANA",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x0F5D2fB29fb7d3CFeE444a200298f468908cC942/logo.png"
      },
      {
      name: "Mask Network",
      address: "0x2B9E7ccDF0F4e5B24757c1E1a80e311E34Cb10c7",
      abbr: "MASK",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/14051/small/Mask_Network.jpg?1614050316"
      },
      {
      name: "MASQ",
      address: "0xEe9A352F6aAc4aF1A5B9f467F6a93E0ffBe9Dd35",
      abbr: "MASQ",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/13699/small/MASQ_Logo_Blue_Solo_Transparent.png?1616661801"
      },
      {
      name: "Liquid Staking Matic",
      address: "0xfa68FB4628DFF1028CFEc22b4162FCcd0d45efb6",
      abbr: "MaticX",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://i.ibb.co/9bHbFsB/2022-04-26-11-53-13.jpg"
      },
      {
      name: "MCHCoin",
      address: "0xee7666aACAEFaa6efeeF62ea40176d3eB21953B9",
      abbr: "MCHC",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/15399/small/MCHC.jpg?1620721307"
      },
      {
      name: "Moss Carbon Credit",
      address: "0xAa7DbD1598251f856C12f63557A4C4397c253Cea",
      abbr: "MCO2",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://i.imgur.com/ZcOLkHe.jpg"
      },
      {
      name: "MEE Governance Token",
      address: "0xEB7eaB87837f4Dad1bb80856db9E4506Fc441f3D",
      abbr: "MEE",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://i.imgur.com/JnwWka0.png"
      },
      {
      name: "MetaShooter",
      address: "0x61f95bd637e3034133335C1baA0148E518D438ad",
      abbr: "MHUNT",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/24985/small/200x200.png?1649681575"
      },
      {
      name: "Milk",
      address: "0x1599fE55Cda767b1F631ee7D414b41F5d6dE393d",
      abbr: "MILK",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://i.ibb.co/6FDxmPG/milk-coin.png"
      },
      {
      name: "AssetMantle",
      address: "0x38A536A31bA4d8C1Bcca016AbBf786ecD25877E8",
      abbr: "MNTL",
      "decimals": 6,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/25181/small/thumbnail.png?1658821784"
      },
      {
      name: "Museum of Crypto Art",
      address: "0xcE899f26928a2B21c6a2Fddd393EF37c61dbA918",
      abbr: "MOCA",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/15829/small/photo_2021-06-04_09.36.16.jpeg?1622770606"
      },
      {
      name: "Ocean Token",
      address: "0x282d8efCe846A88B159800bd4130ad77443Fa1A1",
      abbr: "mOCEAN",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://oceanprotocol.com/static/4ad704a150d436a1f32d495413fc47cd/favicon-white.png"
      },
      {
      name: "Monavale",
      address: "0x6968105460f67c3BF751bE7C15f92F5286Fd0CE5",
      abbr: "MONA",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://i.imgur.com/FR12tmm.jpg"
      },
      {
      name: "MoonEdge",
      address: "0x7E4c577ca35913af564ee2a24d882a4946Ec492B",
      abbr: "MOONED",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/17393/small/ME_logo_200_200.png?1627526275"
      },
      {
      name: "SHEESHA POLYGON",
      address: "0x88C949b4eB85a90071f2C0beF861BDDEe1a7479D",
      abbr: "mSHEESHA",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://pbs.twimg.com/profile_images/1427241161417060359/uHXKH64w_400x400.jpg"
      },
      {
      name: "Metaverse",
      address: "0xA3c322Ad15218fBFAEd26bA7f616249f7705D945",
      abbr: "MV",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/23143/small/geno.png?1643626421"
      },
      {
      name: "Metavault Trade",
      address: "0x2760E46d9BB43dafCbEcaad1F64b93207f9f0eD7",
      abbr: "MVX",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://res.cloudinary.com/metavault/image/upload/v1668603846/brand-assets/brandLogos/MVX-COIN_Simple_jikqce.png"
      },
      {
      name: "Mysterium",
      address: "0x1379E8886A944d2D9d440b3d88DF536Aea08d9F3",
      abbr: "MYST",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/757/small/mysterium.png?1547034503"
      },
      {
      name: "NEAR",
      address: "0x72bd80445b0db58ebe3E8dB056529D4C5FAF6F2f",
      abbr: "NEAR",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/10365/small/near_icon.png?1601359077"
      },
      {
      name: "Nexo",
      address: "0x41b3966B4FF7b427969ddf5da3627d6AEAE9a48E",
      abbr: "NEXO",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://s2.coinmarketcap.com/static/img/coins/200x200/2694.png"
      },
      {
      name: "Nitro",
      address: "0x695FC8B80F344411F34bDbCb4E621aA69AdA384b",
      abbr: "NITRO",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/21668/small/_X6vYBDM_400x400.jpg?1639705848"
      },
      {
      name: "NASDEX Token",
      address: "0xE8d17b127BA8b9899a160D9a07b69bCa8E08bfc6",
      abbr: "NSDX",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/18634/small/nadex.PNG?1632727863"
      },
      {
      name: "Pleasure Coin",
      address: "0x8f006D1e1D9dC6C98996F50a4c810F17a47fBF19",
      abbr: "NSFW",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/15315/small/pleasurecoin-icon.png?1648724879"
      },
      {
      name: "OM",
      address: "0xC3Ec80343D2bae2F8E680FDADDe7C17E71E114ea",
      abbr: "OM",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://etherscan.io/token/images/mantradao_32.png"
      },
      {
      name: "Augury Finance",
      address: "0x76e63a3E7Ba1e2E61D3DA86a87479f983dE89a7E",
      abbr: "OMEN",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://augury.finance/_nuxt/img/omen.b433161.png"
      },
      {
      name: "One Rare Token",
      address: "0xFF2382Bd52efaceF02Cc895bcBFc4618608AA56F",
      abbr: "ORARE",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/19696/small/Thumbnail_-_500_px_-_Black.png?1635751681"
      },
      {
      name: "Orbs",
      address: "0x614389EaAE0A6821DC49062D56BDA3d9d45Fa2ff",
      abbr: "ORBS",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/4630/small/Orbs.jpg?1547039896"
      },
      {
      name: "Paxos Gold",
      address: "0x553d3D295e0f695B9228246232eDF400ed3560B5",
      abbr: "PAXG",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/9519/small/paxg.PNG?1568542565"
      },
      {
      name: "pBORA",
      address: "0x0EF39E52704Ad52E2882BBfA6781167E1b6c4510",
      abbr: "pBORA",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://i.imgur.com/Qt6iIQ8.png"
      },
      {
      name: "Polygon Ecosystem Index",
      address: "0xA9536B9c75A9E0faE3B56a96AC8EdF76AbC91978",
      abbr: "PECO",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/19270/small/amun-peco.png?1634868167"
      },
      {
      name: "PLOT",
      address: "0xe82808eaA78339b06a691fd92E1Be79671cAd8D3",
      abbr: "PLOT",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://i.imgur.com/nQDG9AQ.png"
      },
      {
      name: "pMATIC",
      address: "0xA0dF47432d9d88bcc040E9ee66dDC7E17A882715",
      abbr: "pMATIC",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://matic.ripae.finance/static/media/ripae_pftm.1a3fe2b4.svg"
      },
      {
      name: "PolyDoge",
      address: "0x8A953CfE442c5E8855cc6c61b1293FA648BAE472",
      abbr: "PolyDoge",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://polydoge.com/doge-webpage_files/doge.png"
      },
      {
      name: "PolysportsToken",
      address: "0x32Cd1BCB75473845b5d1dB6ecE60AEC6E41d8518",
      abbr: "PS1",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/25070/small/L-T2x_cG_400x400.jpg?1650024620"
      },
      {
      name: "ParaSwap",
      address: "0x42d61D766B85431666B39B89C43011f24451bFf6",
      abbr: "PSP",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/20403/small/ep7GqM19_400x400.jpg?1636979120"
      },
      {
      name: "PYR Token",
      address: "0x430EF9263E76DAE63c84292C3409D61c598E9682",
      abbr: "PYR",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/14770/small/1617088937196.png?1619414736"
      },
      {
      name: "Qi Dao",
      address: "0x580A84C73811E1839F75d86d75d88cCa0c241fF4",
      abbr: "QI",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://raw.githubusercontent.com/0xlaozi/qidao/main/images/qi.png"
      },
      {
      name: "QuickSwap(NEW)",
      address: "0xB5C064F955D8e7F38fE0460C556a72987494eE17",
      abbr: "QUICK(NEW)",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://i.ibb.co/HGWTLM7/Quick-Icon-V2.png"
      },
      {
      name: "QuickSwap(OLD)",
      address: "0x831753DD7087CaC61aB5644b308642cc1c33Dc13",
      abbr: "QUICK(OLD)",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://raw.githubusercontent.com/sameepsi/quickswap-interface/master/public/favicon.jpeg"
      },
      {
      name: "QUIDD",
      address: "0x123706cDD8e60324e610E9A2CC7012D0F45A5b8E",
      abbr: "QUIDD",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/19725/small/quidd.png?1637303435"
      },
      {
      name: "Request",
      address: "0xB25e20De2F2eBb4CfFD4D16a55C7B395e8a94762",
      abbr: "REQ",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/1031/small/Request_icon.png?1550832088"
      },
      {
      name: "StaFi(rETH)",
      address: "0x5736df66b4f8401d639Ffa915a46B4c548C09Ac1",
      abbr: "rETH",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/14452/large/rETH.png?1680074713"
      },
      {
      name: "REVV",
      address: "0x70c006878a5A50Ed185ac4C87d837633923De296",
      abbr: "REVV",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/12373/small/REVV_TOKEN_Refined_2021_%281%29.png?1627652390"
      },
      {
      name: "StaFi rMATIC",
      address: "0x9f28e2455f9FFcFac9EBD6084853417362bc5dBb",
      abbr: "rMATIC",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://s2.coinmarketcap.com/static/img/coins/200x200/24232.png"
      },
      {
      name: "ROND Coin",
      address: "0x204820B6e6FEae805e376D2C6837446186e57981",
      abbr: "ROND",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/27601/small/rond.png?1664716228"
      },
      {
      name: "Revolt 2 Earn",
      address: "0xf0f9D895aCa5c8678f706FB8216fa22957685A13",
      abbr: "RVLT",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://s2.coinmarketcap.com/static/img/coins/64x64/19893.png"
      },
      {
      name: "Safle",
      address: "0x04b33078Ea1aEf29bf3fB29c6aB7B200C58ea126",
      abbr: "SAFLE",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://s2.coinmarketcap.com/static/img/coins/64x64/12691.png"
      },
      {
      name: "SAND",
      address: "0xBbba073C31bF03b8ACf7c28EF0738DeCF3695683",
      abbr: "SAND",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/12129/small/sandbox_logo.jpg?1597397942"
      },
      {
      name: "Stader",
      address: "0x1d734A02eF1e1f5886e66b0673b71Af5B53ffA94",
      abbr: "SD",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/20658/small/sd.png?1642927667"
      },
      {
      name: "Sunflower Land",
      address: "0xD1f9c58e33933a993A3891F8acFe05a68E1afC05",
      abbr: "SFL",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/25514/small/download.png?1652164203"
      },
      {
      name: "SHIBA INU",
      address: "0x6f8a06447Ff6FcF75d803135a7de15CE88C1d4ec",
      abbr: "SHIB",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/11939/small/shiba.png?1622619446"
      },
      {
      name: "StrongNodeEdge Token",
      address: "0x32934CB16DA43fd661116468c1B225Fc26CF9A8c",
      abbr: "SNE",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://s2.coinmarketcap.com/static/img/coins/64x64/12258.png"
      },
      {
      name: "Snook",
      address: "0x689f8e5913C158fFB5Ac5aeb83b3C875F5d20309",
      abbr: "SNK",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/18197/small/snk.png?1630979321"
      },
      {
      name: "SOL",
      address: "0x7DfF46370e9eA5f0Bad3C4E29711aD50062EA7A4",
      abbr: "SOL",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/4128/small/coinmarketcap-solana-200.png?1616489452"
      },
      {
      name: "Saiyan PEPE",
      address: "0xfcA466F2fA8E667a517C9C6cfa99Cf985be5d9B1",
      abbr: "SPEPE",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://i.imgur.com/gwmgrf0.png"
      },
      {
      name: "Staked MATIC",
      address: "0x3A58a54C066FdC0f2D55FC9C89F0415C92eBf3C4",
      abbr: "stMATIC",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/24185/small/stMATIC.png?1646789287"
      },
      {
      name: "99Starz",
      address: "0x2c92a8A41f4b806a6f6F1F7C9D9DEc78DCd8c18e",
      abbr: "STZ",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/21467/small/n1fqEYRI_400x400.png?1639345175"
      },
      {
      name: "Super WinGoal Token",
      address: "0x9D2Aa8B9Cd32fe46F4E177F49871518D942B1E47",
      abbr: "SWT",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://i.imgur.com/GO11OUH.png"
      },
      {
      name: "Cryptomeda",
      address: "0x6286A9e6f7e745A6D884561D88F94542d6715698",
      abbr: "TECH",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/17983/small/tech.png?1654330771"
      },
      {
      name: "Telcoin",
      address: "0xdF7837DE1F2Fa4631D716CF2502f8b230F1dcc32",
      abbr: "TEL",
      "decimals": 2,
      "chainId": 137,
      "logoURI": "https://etherscan.io/token/images/telcoin_28.png"
      },
      {
      name: "teleBTC",
      address: "0x515D720B9D219f1931205D5B8D842bE1Fe2FeBDE",
      abbr: "TELEBTC",
      "decimals": 8,
      "chainId": 137,
      "logoURI": "https://i.imgur.com/rjH0eOe.png"
      },
      {
      name: "TOWER",
      address: "0x2bC07124D8dAc638E290f401046Ad584546BC47b",
      abbr: "TOWER",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/14134/small/tower-circular-1000.png?1632195469"
      },
      {
      name: "Trace Network",
      address: "0x4287F07CBE6954f9F0DecD91d0705C926d8d03A4",
      abbr: "TRACE",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/23266/small/Token_Icon_02.png?1655797843"
      },
      {
      name: "Polytrade",
      address: "0x692AC1e363ae34b6B489148152b12e2785a3d8d6",
      abbr: "TRADE",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://polygonscan.com/token/images/polytrade_32.png"
      },
      {
      name: "TrueUSD",
      address: "0x2e1AD108fF1D8C782fcBbB89AAd783aC49586756",
      abbr: "TUSD",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/3449/small/tusd.png?1618395665"
      },
      {
      name: "UnirisToken",
      address: "0x3C720206bFaCB2d16fA3ac0ed87D2048Dbc401Fc",
      abbr: "UCO",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/12330/small/e353ZVj.png?1599112996"
      },
      {
      name: "Continuum",
      address: "0x3B1A0c9252ee7403093fF55b4a5886d49a3d837a",
      abbr: "UM",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/18798/small/Moneda.png?1633474110"
      },
      {
      name: "Unbound Dollar",
      address: "0x1eBA4B44C4F8cc2695347C6a78F0B7a002d26413",
      abbr: "UND",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/19932/small/und.PNG?1636325217"
      },
      {
      name: "Uniswap",
      address: "0xb33EaAd8d922B1083446DC23f610c2567fB5180f",
      abbr: "UNI",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://raw.githubusercontent.com/sameepsi/quickswap-interface/master/public/favicon1.png"
      },
      {
      name: "USD Coin",
      address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
      abbr: "USDC",
      "decimals": 6,
      "chainId": 137,
      "logoURI": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png"
      },
      {
      name: "Decentralized USD",
      address: "0xFFA4D863C96e743A2e1513824EA006B8D0353C57",
      abbr: "USDD",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/25380/small/UUSD.jpg?1651823371"
      },
      {
      name: "Tether USD",
      address: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
      abbr: "USDT",
      "decimals": 6,
      "chainId": 137,
      "logoURI": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png"
      },
      {
      name: "VersaGames",
      address: "0x8497842420cFdbc97896C2353D75d89Fc8D5Be5D",
      abbr: "VERSA",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/25491/small/versa_token_96_96.png?1652074785"
      },
      {
      name: "Volt Inu",
      address: "0xF16EC50EC49aBc95FA793C7871682833B6bC47E7",
      abbr: "VOLT",
      "decimals": 9,
      "chainId": 137,
      "logoURI": "https://i.imgur.com/g7mzfRz.png"
      },
      {
      name: "VOXEL Token",
      address: "0xd0258a3fD00f38aa8090dfee343f10A9D4d30D3F",
      abbr: "VOXEL",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/21260/small/voxies.png?1638789903"
      },
      {
      name: "Wrapped BTC",
      address: "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6",
      abbr: "WBTC",
      "decimals": 8,
      "chainId": 137,
      "logoURI": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png"
      },
      {
      name: "FABWELT",
      address: "0x23E8B6A3f6891254988B84Da3738D2bfe5E703b9",
      abbr: "WELT",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/20505/small/welt.PNG?1637143324"
      },
      {
      name: "Wise Token",
      address: "0xB77e62709e39aD1cbeEBE77cF493745AeC0F453a",
      abbr: "WISE",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/13552/small/WISE-logo-1600x1280.png?1609727947"
      },
      {
      name: "wLitiDAO",
      address: "0xA936e1f747d14fC30d08272D065c8aeF4ab7f810",
      abbr: "WLD",
      "decimals": 18,
      "chainId": 137,
      "logoURI": "https://assets.coingecko.com/coins/images/24106/small/200px-cmc.png?1646376154"
      },
  
]

const BSCCoins = [{
    name: "BNB Token",
    abbr: "BNB",
    address: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c.png"
  }, {
    name: "MilkshakeSwap Token",
    abbr: "MILK",
    address: "0xc9bCF3f71E37579A4A42591B09c9dd93Dfe27965",
    "chainId": 56,
    "decimals": 18
  },
  {
    name: "Tether USD",
    abbr: "USDT",
    address: "0x7ef95a0fee0dd31b22626fa2e10ee6a223f8a684", // Weth address is fetched from the router
  },
  {
    name: "Ether",
    abbr: "ETH",
    address: "0x4338665cbb7b2485a8855a139b75d5e34ab0db94",
  },
  {
    name: "Dai Token",
    abbr: "DAI",
    address: "0x8a9424745056Eb399FD19a0EC26A14316684e274",
  },
  {
    name: "PancakeSwap Token",
    abbr: "CAKE",
    address: "0xD46bA6D942050d489DBd938a2C909A5d5039A161",
  },
  {
    name: "Wrapped BTC",
    abbr: "WBTC",
    address: "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82",
  },
  {
    name: "Uniswap",
    abbr: "UNI",
    address: "0xbf5140a22578168fd562dccf235e5d43a02ce9b1",
  },
  {
    name: "EOS Token",
    abbr: "EOS",
    address: "0x56b6fb708fc5732dec1afc8d8556423a2edccbd6",
  },
  {
    name: "Sushi",
    abbr: "SUSHI",
    address: "0x947950bcc74888a40ffa2593c5798f11fc9124c4",
  },
  {
    name: "Ditto",
    abbr: "DITTO",
    address: "0x233d91A0713155003fc4DcE0AFa871b508B3B715",
  },
  {
    name: "Binance-Peg USD Coin",
    abbr: "USDC",
    address: "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
  },
  {
    name: "Bakery Token",
    abbr: "BAKE",
    address: "0xe02df9e3e622debdd69fb838bb799e3f168902c5",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xe02df9e3e622debdd69fb838bb799e3f168902c5.png"
  },
  {
    name: "BUSD Token",
    abbr: "BUSD",
    address: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xe9e7cea3dedca5984780bafc599bd69add087d56.png"
  },
  {
    name: "Ethereum Token",
    abbr: "ETH",
    address: "0x2170ed0880ac9a755fd29b2688956bd959f933f8",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x2170ed0880ac9a755fd29b2688956bd959f933f8.png"
  },
  {
    name: "BTCB Token",
    abbr: "BTCB",
    address: "0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c.png"
  },
  {
    name: "BAND Protocol Token",
    abbr: "BAND",
    address: "0xad6caeb32cd2c308980a548bd0bc5aa4306c6c18",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xad6caeb32cd2c308980a548bd0bc5aa4306c6c18.png"
  },
  {
    name: "EOS Token",
    abbr: "EOS",
    address: "0x56b6fb708fc5732dec1afc8d8556423a2edccbd6",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x56b6fb708fc5732dec1afc8d8556423a2edccbd6.png"
  },
  {
    name: "Tether USD",
    abbr: "USDT",
    address: "0x55d398326f99059ff775485246999027b3197955",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x55d398326f99059ff775485246999027b3197955.png"
  },
  {
    name: "XRP Token",
    abbr: "XRP",
    address: "0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe.png"
  },
  {
    name: "Bitcoin Cash Token",
    abbr: "BCH",
    address: "0x8ff795a6f4d97e7887c79bea79aba5cc76444adf",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x8ff795a6f4d97e7887c79bea79aba5cc76444adf.png"
  },
  {
    name: "Litecoin Token",
    abbr: "LTC",
    address: "0x4338665cbb7b2485a8855a139b75d5e34ab0db94",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x4338665cbb7b2485a8855a139b75d5e34ab0db94.png"
  },
  {
    name: "Cardano Token",
    abbr: "ADA",
    address: "0x3ee2200efb3400fabb9aacf31297cbdd1d435d47",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x3ee2200efb3400fabb9aacf31297cbdd1d435d47.png"
  },
  {
    name: "Cosmos Token",
    abbr: "ATOM",
    address: "0x0eb3a705fc54725037cc9e008bdede697f62f335",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x0eb3a705fc54725037cc9e008bdede697f62f335.png"
  },
  {
    name: "Tezos Token",
    abbr: "XTZ",
    address: "0x16939ef78684453bfdfb47825f8a5f714f12623a",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x16939ef78684453bfdfb47825f8a5f714f12623a.png"
  },
  {
    name: "Ontology Token",
    abbr: "ONT",
    address: "0xfd7b3a77848f1c2d67e05e54d78d174a0c850335",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xfd7b3a77848f1c2d67e05e54d78d174a0c850335.png"
  },
  {
    name: "Zcash Token",
    abbr: "ZEC",
    address: "0x1ba42e5193dfa8b03d15dd1b86a3113bbbef8eeb",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x1ba42e5193dfa8b03d15dd1b86a3113bbbef8eeb.png"
  },
  {
    name: "Dai Token",
    abbr: "DAI",
    address: "0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3.png"
  },
  {
    name: "YFII.finance Token",
    abbr: "YFII",
    address: "0x7f70642d88cf1c4a3a7abb072b53b929b653eda5",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x7f70642d88cf1c4a3a7abb072b53b929b653eda5.png"
  },
  {
    name: "Cream",
    abbr: "CREAM",
    address: "0xd4cb328a82bdf5f03eb737f37fa6b370aef3e888",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xd4cb328a82bdf5f03eb737f37fa6b370aef3e888.png"
  },
  {
    name: "Prometeus",
    abbr: "PROM",
    address: "0xaf53d56ff99f1322515e54fdde93ff8b3b7dafd5",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xaf53d56ff99f1322515e54fdde93ff8b3b7dafd5.png"
  },
  {
    name: "CanYaCoin",
    abbr: "CAN",
    address: "0x007ea5c0ea75a8df45d288a4debdd5bb633f9e56",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x007ea5c0ea75a8df45d288a4debdd5bb633f9e56.png"
  },
  {
    name: "Polkadot Token",
    abbr: "DOT",
    address: "0x7083609fce4d1d8dc0c979aab8c869ea2c873402",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x7083609fce4d1d8dc0c979aab8c869ea2c873402.png"
  },
  {
    name: "PancakeSwap Token",
    abbr: "CAKE",
    address: "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82.png"
  },
  {
    name: "Ankr",
    abbr: "ANKR",
    address: "0xf307910a4c7bbc79691fd374889b36d8531b08e3",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xf307910a4c7bbc79691fd374889b36d8531b08e3.png"
  },
  {
    name: "ChainLink Token",
    abbr: "LINK",
    address: "0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd.png"
  },
  {
    name: "Burger Swap",
    abbr: "BURGER",
    address: "0xae9269f27437f0fcbc232d39ec814844a51d6b8f",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xae9269f27437f0fcbc232d39ec814844a51d6b8f.png"
  },
  {
    name: "SPARTAN PROTOCOL TOKEN",
    abbr: "SPART",
    address: "0xe4ae305ebe1abe663f261bc00534067c80ad677c",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xe4ae305ebe1abe663f261bc00534067c80ad677c.png"
  },
  {
    name: "Trust Wallet",
    abbr: "TWT",
    address: "0x4b0f1812e5df2a09796481ff14017e6005508003",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x4b0f1812e5df2a09796481ff14017e6005508003.png"
  },
  {
    name: "Venus",
    abbr: "XVS",
    address: "0xcf6bb5389c92bdda8a3747ddb454cb7a64626c63",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xcf6bb5389c92bdda8a3747ddb454cb7a64626c63.png"
  },
  {
    name: "AlphaToken",
    abbr: "ALPHA",
    address: "0xa1faa113cbe53436df28ff0aee54275c13b40975",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xa1faa113cbe53436df28ff0aee54275c13b40975.png"
  },
  {
    name: "Beefy.finance",
    abbr: "BIFI",
    address: "0xCa3F508B8e4Dd382eE878A314789373D80A5190A",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xCa3F508B8e4Dd382eE878A314789373D80A5190A.png"
  },
  {
    name: "yearn.finance",
    abbr: "YFI",
    address: "0x88f1a5ae2a3bf98aeaf342d26b30a79438c9142e",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x88f1a5ae2a3bf98aeaf342d26b30a79438c9142e.png"
  },
  {
    name: "Uniswap",
    abbr: "UNI",
    address: "0xbf5140a22578168fd562dccf235e5d43a02ce9b1",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xbf5140a22578168fd562dccf235e5d43a02ce9b1.png"
  },
  {
    name: "fry.world",
    abbr: "FRIES",
    address: "0x393B312C01048b3ed2720bF1B090084C09e408A1",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x393B312C01048b3ed2720bF1B090084C09e408A1.png"
  },
  {
    name: "StableXSwap",
    abbr: "STAX",
    address: "0x0da6ed8b13214ff28e9ca979dd37439e8a88f6c4",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x0da6ed8b13214ff28e9ca979dd37439e8a88f6c4.png"
  },
  {
    name: "Filecoin",
    abbr: "FIL",
    address: "0x0d8ce2a99bb6e3b7db580ed848240e4a0f9ae153",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x0d8ce2a99bb6e3b7db580ed848240e4a0f9ae153.png"
  },
  {
    name: "KAVA",
    abbr: "KAVA",
    address: "0x5F88AB06e8dfe89DF127B2430Bba4Af600866035",
    "chainId": 56,
    "decimals": 6,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x5F88AB06e8dfe89DF127B2430Bba4Af600866035.png"
  },
  {
    name: "USDX",
    abbr: "USDX",
    address: "0x1203355742e76875154c0d13eb81dcd7711dc7d9",
    "chainId": 56,
    "decimals": 6,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x1203355742e76875154c0d13eb81dcd7711dc7d9.png"
  },
  {
    name: "Injective Protocol",
    abbr: "INJ",
    address: "0xa2B726B1145A4773F68593CF171187d8EBe4d495",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xa2B726B1145A4773F68593CF171187d8EBe4d495.png"
  },
  {
    name: "Swipe",
    abbr: "SXP",
    address: "0x47bead2563dcbf3bf2c9407fea4dc236faba485a",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x47bead2563dcbf3bf2c9407fea4dc236faba485a.png"
  },
  {
    name: "Binance-Peg USD Coin",
    abbr: "USDC",
    address: "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d.png"
  },
  {
    name: "CertiK Token",
    abbr: "CTK",
    address: "0xa8c2b8eec3d368c0253ad3dae65a5f2bbb89c929",
    "chainId": 56,
    "decimals": 6,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xa8c2b8eec3d368c0253ad3dae65a5f2bbb89c929.png"
  },
  {
    name: "NAR Token",
    abbr: "NAR",
    address: "0xa1303e6199b319a891b79685f0537d289af1fc83",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xa1303e6199b319a891b79685f0537d289af1fc83.png"
  },
  {
    name: "Nyanswop Token",
    abbr: "NYA",
    address: "0xbfa0841f7a90c4ce6643f651756ee340991f99d5",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xbfa0841f7a90c4ce6643f651756ee340991f99d5.png"
  },
  {
    name: "HARD",
    abbr: "HARD",
    address: "0xf79037f6f6be66832de4e7516be52826bc3cbcc4",
    "chainId": 56,
    "decimals": 6,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xf79037f6f6be66832de4e7516be52826bc3cbcc4.png"
  },
  {
    name: "ROOBEE",
    abbr: "bROOBEE",
    address: "0xe64f5cb844946c1f102bd25bbd87a5ab4ae89fbe",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xe64f5cb844946c1f102bd25bbd87a5ab4ae89fbe.png"
  },
  {
    name: "Unifi Token",
    abbr: "UNFI",
    address: "0x728C5baC3C3e370E372Fc4671f9ef6916b814d8B",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x728C5baC3C3e370E372Fc4671f9ef6916b814d8B.png"
  },
  {
    name: "BLINk",
    abbr: "BLK",
    address: "0x63870A18B6e42b01Ef1Ad8A2302ef50B7132054F",
    "chainId": 56,
    "decimals": 6,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x63870A18B6e42b01Ef1Ad8A2302ef50B7132054F.png"
  },
  {
    name: "QUSD Stablecoin",
    abbr: "QUSD",
    address: "0xb8C540d00dd0Bf76ea12E4B4B95eFC90804f924E",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xb8C540d00dd0Bf76ea12E4B4B95eFC90804f924E.png"
  },
  {
    name: "Qian Governance Token",
    abbr: "KUN",
    address: "0x1A2fb0Af670D0234c2857FaD35b789F8Cb725584",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x1A2fb0Af670D0234c2857FaD35b789F8Cb725584.png"
  },
  {
    name: "VAI Stablecoin",
    abbr: "VAI",
    address: "0x4bd17003473389a42daf6a0a729f6fdb328bbbd7",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x4bd17003473389a42daf6a0a729f6fdb328bbbd7.png"
  },
  {
    name: "Juventus",
    abbr: "JUV",
    address: "0xc40c9a843e1c6d01b7578284a9028854f6683b1b",
    "chainId": 56,
    "decimals": 2,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xc40c9a843e1c6d01b7578284a9028854f6683b1b.png"
  },
  {
    name: "Paris Saint-Germain",
    abbr: "PSG",
    address: "0xbc5609612b7c44bef426de600b5fd1379db2ecf1",
    "chainId": 56,
    "decimals": 2,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xbc5609612b7c44bef426de600b5fd1379db2ecf1.png"
  },
  {
    name: "Ditto",
    abbr: "DITTO",
    address: "0x233d91A0713155003fc4DcE0AFa871b508B3B715",
    "chainId": 56,
    "decimals": 9,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x233d91A0713155003fc4DcE0AFa871b508B3B715.png"
  },
  {
    name: "Math",
    abbr: "MATH",
    address: "0xf218184af829cf2b0019f8e6f0b2423498a36983",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xf218184af829cf2b0019f8e6f0b2423498a36983.png"
  },
  {
    name: "Fuel",
    abbr: "FUEL",
    address: "0x2090c8295769791ab7A3CF1CC6e0AA19F35e441A",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x2090c8295769791ab7A3CF1CC6e0AA19F35e441A.png"
  },
  {
    name: "Nuls",
    abbr: "NULS",
    address: "0x8cd6e29d3686d24d3c2018cee54621ea0f89313b",
    "chainId": 56,
    "decimals": 8,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x8cd6e29d3686d24d3c2018cee54621ea0f89313b.png"
  },
  {
    name: "NerveNetwork",
    abbr: "NVT",
    address: "0xf0e406c49c63abf358030a299c0e00118c4c6ba5",
    "chainId": 56,
    "decimals": 8,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xf0e406c49c63abf358030a299c0e00118c4c6ba5.png"
  },
  {
    name: "Reef",
    abbr: "REEF",
    address: "0xf21768ccbc73ea5b6fd3c687208a7c2def2d966e",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xf21768ccbc73ea5b6fd3c687208a7c2def2d966e.png"
  },
  {
    name: "OG",
    abbr: "OG",
    address: "0xf05e45ad22150677a017fbd94b84fbb63dc9b44c",
    "chainId": 56,
    "decimals": 2,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xf05e45ad22150677a017fbd94b84fbb63dc9b44c.png"
  },
  {
    name: "Atletico de Madrid",
    abbr: "ATM",
    address: "0x25e9d05365c867e59c1904e7463af9f312296f9e",
    "chainId": 56,
    "decimals": 2,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x25e9d05365c867e59c1904e7463af9f312296f9e.png"
  },
  {
    name: "AS Roma",
    abbr: "ASR",
    address: "0x80d5f92c2c8c682070c95495313ddb680b267320",
    "chainId": 56,
    "decimals": 2,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x80d5f92c2c8c682070c95495313ddb680b267320.png"
  },
  {
    name: "AllianceBlock",
    abbr: "bALBT",
    address: "0x72faa679e1008ad8382959ff48e392042a8b06f7",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x72faa679e1008ad8382959ff48e392042a8b06f7.png"
  },
  {
    name: "Tenet",
    abbr: "TEN",
    address: "0xdff8cb622790b7f92686c722b02cab55592f152c",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xdff8cb622790b7f92686c722b02cab55592f152c.png"
  },
  {
    name: "Helmet.insure",
    abbr: "Helmet",
    address: "0x948d2a81086a075b3130bac19e4c6dee1d2e3fe8",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x948d2a81086a075b3130bac19e4c6dee1d2e3fe8.png"
  },
  {
    name: "BSCEX",
    abbr: "BSCX",
    address: "0x5ac52ee5b2a633895292ff6d8a89bb9190451587",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x5ac52ee5b2a633895292ff6d8a89bb9190451587.png"
  },
  {
    name: "Standard BTC Hashrate Token",
    abbr: "BTCST",
    address: "0x78650b139471520656b9e7aa7a5e9276814a38e9",
    "chainId": 56,
    "decimals": 17,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x78650b139471520656b9e7aa7a5e9276814a38e9.png"
  },
  {
    name: "Frontier Token",
    abbr: "FRONT",
    address: "0x928e55daB735aa8260AF3cEDadA18B5f70C72f1b",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x928e55daB735aa8260AF3cEDadA18B5f70C72f1b.png"
  },
  {
    name: "Soteria",
    abbr: "wSOTE",
    address: "0x541e619858737031a1244a5d0cd47e5ef480342c",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x541e619858737031a1244a5d0cd47e5ef480342c.png"
  },
  {
    name: "Mirror TSLA Token",
    abbr: "mTSLA",
    address: "0xF215A127A196e3988C09d052e16BcFD365Cd7AA3",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xF215A127A196e3988C09d052e16BcFD365Cd7AA3.png"
  },
  {
    name: "Mirror AMZN Token",
    abbr: "mAMZN",
    address: "0x3947B992DC0147D2D89dF0392213781b04B25075",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x3947B992DC0147D2D89dF0392213781b04B25075.png"
  },
  {
    name: "Mirror NFLX Token",
    abbr: "mNFLX",
    address: "0xa04F060077D90Fe2647B61e4dA4aD1F97d6649dc",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xa04F060077D90Fe2647B61e4dA4aD1F97d6649dc.png"
  },
  {
    name: "Mirror GOOGL Token",
    abbr: "mGOOGL",
    address: "0x62D71B23bF15218C7d2D7E48DBbD9e9c650B173f",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x62D71B23bF15218C7d2D7E48DBbD9e9c650B173f.png"
  },
  {
    name: "UST Token",
    abbr: "UST",
    address: "0x23396cF899Ca06c4472205fC903bDB4de249D6fC",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x23396cF899Ca06c4472205fC903bDB4de249D6fC.png"
  },
  {
    name: "b.earnfi",
    abbr: "BFI",
    address: "0x81859801b01764D4f0Fa5E64729f5a6C3b91435b",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x81859801b01764D4f0Fa5E64729f5a6C3b91435b.png"
  },
  {
    name: "bDollar",
    abbr: "BDO",
    address: "0x190b589cf9Fb8DDEabBFeae36a813FFb2A702454",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x190b589cf9Fb8DDEabBFeae36a813FFb2A702454.png"
  },
  {
    name: "bDollar Share",
    abbr: "sBDO",
    address: "0x0d9319565be7f53CeFE84Ad201Be3f40feAE2740",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x0d9319565be7f53CeFE84Ad201Be3f40feAE2740.png"
  },
  {
    name: "Elrond",
    abbr: "EGLD",
    address: "0xbf7c81fff98bbe61b40ed186e4afd6ddd01337fe",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xbf7c81fff98bbe61b40ed186e4afd6ddd01337fe.png"
  },
  {
    name: "AUTOv2",
    abbr: "AUTO",
    address: "0xa184088a740c695e156f91f5cc086a06bb78b827",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xa184088a740c695e156f91f5cc086a06bb78b827.png"
  },
  {
    name: "Hedget",
    abbr: "HGET",
    address: "0xC7d8D35EBA58a0935ff2D5a33Df105DD9f071731",
    "chainId": 56,
    "decimals": 6,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xC7d8D35EBA58a0935ff2D5a33Df105DD9f071731.png"
  },
  {
    name: "Litentry",
    abbr: "LIT",
    address: "0xb59490ab09a0f526cc7305822ac65f2ab12f9723",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xb59490ab09a0f526cc7305822ac65f2ab12f9723.png"
  },
  {
    name: "Linear Finance",
    abbr: "LINA",
    address: "0x762539b45a1dcce3d36d080f74d1aed37844b878",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x762539b45a1dcce3d36d080f74d1aed37844b878.png"
  },
  {
    name: "Beacon ETH",
    abbr: "BETH",
    address: "0x250632378e573c6be1ac2f97fcdf00515d0aa91b",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x250632378e573c6be1ac2f97fcdf00515d0aa91b.png"
  },
  {
    name: "lUSD",
    abbr: "lUSD",
    address: "0x23e8a70534308a4AAF76fb8C32ec13d17a3BD89e",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x23e8a70534308a4AAF76fb8C32ec13d17a3BD89e.png"
  },
  {
    name: "SafePal Token",
    abbr: "SFP",
    address: "0xd41fdb03ba84762dd66a0af1a6c8540ff1ba5dfb",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xd41fdb03ba84762dd66a0af1a6c8540ff1ba5dfb.png"
  },
  {
    name: "Compound Finance",
    abbr: "COMP",
    address: "0x52ce071bd9b1c4b00a0b92d298c512478cad67e8",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x52ce071bd9b1c4b00a0b92d298c512478cad67e8.png"
  },
  {
    name: "Swirge Pay",
    abbr: "SWGb",
    address: "0xe40255c5d7fa7ceec5120408c78c787cecb4cfdb",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xe40255c5d7fa7ceec5120408c78c787cecb4cfdb.png"
  },
  {
    name: "renBTC",
    abbr: "renBTC",
    address: "0xfCe146bF3146100cfe5dB4129cf6C82b0eF4Ad8c",
    "chainId": 56,
    "decimals": 8,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xfCe146bF3146100cfe5dB4129cf6C82b0eF4Ad8c.png"
  },
  {
    name: "renDOGE",
    abbr: "renDOGE",
    address: "0xc3fed6eb39178a541d274e6fc748d48f0ca01cc3",
    "chainId": 56,
    "decimals": 8,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xc3fed6eb39178a541d274e6fc748d48f0ca01cc3.png"
  },
  {
    name: "anyMTLX",
    abbr: "anyMTLX",
    address: "0x5921dee8556c4593eefcfad3ca5e2f618606483b",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x5921dee8556c4593eefcfad3ca5e2f618606483b.png"
  },
  {
    name: "ZeroSwapToken",
    abbr: "ZEE",
    address: "0x44754455564474a89358b2c2265883df993b12f0",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x44754455564474a89358b2c2265883df993b12f0.png"
  },
  {
    name: "Berry",
    abbr: "BRY",
    address: "0xf859Bf77cBe8699013d6Dbc7C2b926Aaf307F830",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xf859Bf77cBe8699013d6Dbc7C2b926Aaf307F830.png"
  },
  {
    name: "Swingby",
    abbr: "SWINGBY",
    address: "0x71DE20e0C4616E7fcBfDD3f875d568492cBE4739",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x71DE20e0C4616E7fcBfDD3f875d568492cBE4739.png"
  },
  {
    name: "Dodo",
    abbr: "DODO",
    address: "0x67ee3cb086f8a16f34bee3ca72fad36f7db929e2",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x67ee3cb086f8a16f34bee3ca72fad36f7db929e2.png"
  },
  {
    name: "Sushi",
    abbr: "SUSHI",
    address: "0x947950bcc74888a40ffa2593c5798f11fc9124c4",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x947950bcc74888a40ffa2593c5798f11fc9124c4.png"
  },
  {
    name: "OPEN Governance Token",
    abbr: "bOPEN",
    address: "0xF35262a9d427F96d2437379eF090db986eaE5d42",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xF35262a9d427F96d2437379eF090db986eaE5d42.png"
  },
  {
    name: "BoringDAO",
    abbr: "BOR",
    address: "0x92d7756c60dcfd4c689290e8a9f4d263b3b32241",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x92d7756c60dcfd4c689290e8a9f4d263b3b32241.png"
  },
  {
    name: "renZEC",
    abbr: "renZEC",
    address: "0x695FD30aF473F2960e81Dc9bA7cB67679d35EDb7",
    "chainId": 56,
    "decimals": 8,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x695FD30aF473F2960e81Dc9bA7cB67679d35EDb7.png"
  },
  {
    name: "Multiplier",
    abbr: "bMXX",
    address: "0x4131b87f74415190425ccd873048c708f8005823",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x4131b87f74415190425ccd873048c708f8005823.png"
  },
  {
    name: "IoTeX",
    abbr: "IOTX",
    address: "0x9678e42cebeb63f23197d726b29b1cb20d0064e5",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x9678e42cebeb63f23197d726b29b1cb20d0064e5.png"
  },
  {
    name: "xMARK",
    abbr: "xMARK",
    address: "0x26a5dfab467d4f58fb266648cae769503cec9580",
    "chainId": 56,
    "decimals": 9,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x26a5dfab467d4f58fb266648cae769503cec9580.png"
  },
  {
    name: "TokenPocket",
    abbr: "TPT",
    address: "0xeca41281c24451168a37211f0bc2b8645af45092",
    "chainId": 56,
    "decimals": 4,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xeca41281c24451168a37211f0bc2b8645af45092.png"
  },
  {
    name: "Yieldwatch",
    abbr: "WATCH",
    address: "0x7a9f28eb62c791422aa23ceae1da9c847cbec9b0",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x7a9f28eb62c791422aa23ceae1da9c847cbec9b0.png"
  },
  {
    name: "Bella Protocol",
    abbr: "BEL",
    address: "0x8443f091997f06a61670b735ed92734f5628692f",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x8443f091997f06a61670b735ed92734f5628692f.png"
  },
  {
    name: "DeXe",
    abbr: "DEXE",
    address: "0x039cb485212f996a9dbb85a9a75d898f94d38da6",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x039cb485212f996a9dbb85a9a75d898f94d38da6.png"
  },
  {
    name: "Ramp DEFI",
    abbr: "RAMP",
    address: "0x8519ea49c997f50ceffa444d240fb655e89248aa",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x8519ea49c997f50ceffa444d240fb655e89248aa.png"
  },
  {
    name: "Belt",
    abbr: "BELT",
    address: "0xE0e514c71282b6f4e823703a39374Cf58dc3eA4f",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xE0e514c71282b6f4e823703a39374Cf58dc3eA4f.png"
  },
  {
    name: "Basic Attention Token",
    abbr: "BAT",
    address: "0x101d82428437127bf1608f699cd651e6abf9766e",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x101d82428437127bf1608f699cd651e6abf9766e.png"
  },
  {
    name: "BUX",
    abbr: "BUX",
    address: "0x211ffbe424b90e25a15531ca322adf1559779e45",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x211ffbe424b90e25a15531ca322adf1559779e45.png"
  },
  {
    name: "ForTube",
    abbr: "FOR",
    address: "0x658A109C5900BC6d2357c87549B651670E5b0539",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x658A109C5900BC6d2357c87549B651670E5b0539.png"
  },
  {
    name: "My Neigbor Alice",
    abbr: "ALICE",
    address: "0xac51066d7bec65dc4589368da368b212745d63e8",
    "chainId": 56,
    "decimals": 6,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xac51066d7bec65dc4589368da368b212745d63e8.png"
  },
  {
    name: "Pancake Bunny",
    abbr: "BUNNY",
    address: "0xc9849e6fdb743d08faee3e34dd2d1bc69ea11a51",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xc9849e6fdb743d08faee3e34dd2d1bc69ea11a51.png"
  },
  {
    name: "Dego.Finance",
    abbr: "DEGO",
    address: "0x3fda9383a84c05ec8f7630fe10adf1fac13241cc",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x3fda9383a84c05ec8f7630fe10adf1fac13241cc.png"
  },
  {
    name: "LTO Network",
    abbr: "LTO",
    address: "0x857b222fc79e1cbbf8ca5f78cb133d1b7cf34bbd",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x857b222fc79e1cbbf8ca5f78cb133d1b7cf34bbd.png"
  },
  {
    name: "Contentos",
    abbr: "COS",
    address: "0x96dd399f9c3afda1f194182f71600f1b65946501",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x96dd399f9c3afda1f194182f71600f1b65946501.png"
  },
  {
    name: "Tixl",
    abbr: "TXL",
    address: "0x1ffd0b47127fdd4097e54521c9e2c7f0d66aafc5",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x1ffd0b47127fdd4097e54521c9e2c7f0d66aafc5.png"
  },
  {
    name: "Alpaca",
    abbr: "ALPACA",
    address: "0x8f0528ce5ef7b51152a59745befdd91d97091d2f",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x8f0528ce5ef7b51152a59745befdd91d97091d2f.png"
  },
  {
    name: "Dusk",
    abbr: "DUSK",
    address: "0xb2bd0749dbe21f623d9baba856d3b0f0e1bfec9c",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xb2bd0749dbe21f623d9baba856d3b0f0e1bfec9c.png"
  },
  {
    name: "bDIGG",
    abbr: "bDIGG",
    address: "0x5986d5c77c65e5801a5caa4fae80089f870a71da",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x5986d5c77c65e5801a5caa4fae80089f870a71da.png"
  },
  {
    name: "bBADGER",
    abbr: "bBADGER",
    address: "0x1f7216fdb338247512ec99715587bb97bbf96eae",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x1f7216fdb338247512ec99715587bb97bbf96eae.png"
  },
  {
    name: "Unitrade",
    abbr: "TRADE",
    address: "0x7af173f350d916358af3e218bdf2178494beb748",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x7af173f350d916358af3e218bdf2178494beb748.png"
  },
  {
    name: "PNT",
    abbr: "PNT",
    address: "0x7a1da9f49224ef98389b071b8a3294d1cc5e3e6a",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x7a1da9f49224ef98389b071b8a3294d1cc5e3e6a.png"
  },
  {
    name: "pBTC",
    abbr: "pBTC",
    address: "0xed28a457a5a76596ac48d87c0f577020f6ea1c4c",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xed28a457a5a76596ac48d87c0f577020f6ea1c4c.png"
  },
  {
    name: "Mirror Finance",
    abbr: "MIR",
    address: "0x5b6dcf557e2abe2323c48445e8cc948910d8c2c9",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x5b6dcf557e2abe2323c48445e8cc948910d8c2c9.png"
  },
  {
    name: "PolyCrowns",
    abbr: "pCWS",
    address: "0xbcf39f0edda668c58371e519af37ca705f2bfcbd",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xbcf39f0edda668c58371e519af37ca705f2bfcbd.png"
  },
  {
    name: "Zilliqa",
    abbr: "ZIL",
    address: "0xb86abcb37c3a4b64f74f59301aff131a1becc787",
    "chainId": 56,
    "decimals": 12,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xb86abcb37c3a4b64f74f59301aff131a1becc787.png"
  },
  {
    name: "Lien",
    abbr: "LIEN",
    address: "0x5d684adaf3fcfe9cfb5cede3abf02f0cdd1012e3",
    "chainId": 56,
    "decimals": 8,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x5d684adaf3fcfe9cfb5cede3abf02f0cdd1012e3.png"
  },
  {
    name: "Switcheo",
    abbr: "SWTH",
    address: "0x250b211EE44459dAd5Cd3bCa803dD6a7EcB5d46C",
    "chainId": 56,
    "decimals": 8,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x250b211EE44459dAd5Cd3bCa803dD6a7EcB5d46C.png"
  },
  {
    name: "Ellipsis",
    abbr: "EPS",
    address: "0xa7f552078dcc247c2684336020c03648500c6d9f",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xa7f552078dcc247c2684336020c03648500c6d9f.png"
  },
  {
    name: "DFuture",
    abbr: "DFT",
    address: "0x42712dF5009c20fee340B245b510c0395896cF6e",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x42712dF5009c20fee340B245b510c0395896cF6e.png"
  },
  {
    name: "Gourmet Galaxy",
    abbr: "GUM",
    address: "0xc53708664b99DF348dd27C3Ac0759d2DA9c40462",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xc53708664b99DF348dd27C3Ac0759d2DA9c40462.png"
  },
  {
    name: "Harmony One",
    abbr: "ONE",
    address: "0x03ff0ff224f904be3118461335064bb48df47938",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x03ff0ff224f904be3118461335064bb48df47938.png"
  },
  {
    name: "Nerve Finance",
    abbr: "NRV",
    address: "0x42f6f551ae042cbe50c739158b4f0cac0edb9096",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x42f6f551ae042cbe50c739158b4f0cac0edb9096.png"
  },
  {
    name: "Easyfi Network",
    abbr: "EASY",
    address: "0x7c17c8bed8d14bacce824d020f994f4880d6ab3b",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x7c17c8bed8d14bacce824d020f994f4880d6ab3b.png"
  },
  {
    name: "SafeMoon",
    abbr: "SAFEMOON",
    address: "0x8076c74c5e3f5852037f31ff0093eeb8c8add8d3",
    "chainId": 56,
    "decimals": 9,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x8076c74c5e3f5852037f31ff0093eeb8c8add8d3.png"
  },
  {
    name: "Tau Bitcoin",
    abbr: "𝜏BTC",
    address: "0x2cD1075682b0FCCaADd0Ca629e138E64015Ba11c",
    "chainId": 56,
    "decimals": 9,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x2cD1075682b0FCCaADd0Ca629e138E64015Ba11c.png"
  },
  {
    name: "Hoo",
    abbr: "HOO",
    address: "0xe1d1f66215998786110ba0102ef558b22224c016",
    "chainId": 56,
    "decimals": 8,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xe1d1f66215998786110ba0102ef558b22224c016.png"
  },
  {
    name: "Oddz",
    abbr: "ODDZ",
    address: "0xcd40f2670cf58720b694968698a5514e924f742d",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xcd40f2670cf58720b694968698a5514e924f742d.png"
  },
  {
    name: "APYSwap",
    abbr: "APYS",
    address: "0x37dfACfaeDA801437Ff648A1559d73f4C40aAcb7",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x37dfACfaeDA801437Ff648A1559d73f4C40aAcb7.png"
  },
  {
    name: "Bondly",
    abbr: "BONDLY",
    address: "0x96058f8c3e16576d9bd68766f3836d9a33158f89",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x96058f8c3e16576d9bd68766f3836d9a33158f89.png"
  },
  {
    name: "TokoCrypto",
    abbr: "TKO",
    address: "0x9f589e3eabe42ebc94a44727b3f3531c0c877809",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x9f589e3eabe42ebc94a44727b3f3531c0c877809.png"
  },
  {
    name: "Itam",
    abbr: "ITAM",
    address: "0x04c747b40be4d535fc83d09939fb0f626f32800b",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x04c747b40be4d535fc83d09939fb0f626f32800b.png"
  },
  {
    name: "ARPA",
    abbr: "ARPA",
    address: "0x6f769e65c14ebd1f68817f5f1dcdb61cfa2d6f7e",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x6f769e65c14ebd1f68817f5f1dcdb61cfa2d6f7e.png"
  },
  {
    name: "Perlin X",
    abbr: "PERL",
    address: "0x0f9e4d49f25de22c2202af916b681fbb3790497b",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x0f9e4d49f25de22c2202af916b681fbb3790497b.png"
  },
  {
    name: "Juggernaut Finance",
    abbr: "JGN",
    address: "0xc13b7a43223bb9bf4b69bd68ab20ca1b79d81c75",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xc13b7a43223bb9bf4b69bd68ab20ca1b79d81c75.png"
  },
  {
    name: "Alien Worlds",
    abbr: "TLM",
    address: "0x2222227e22102fe3322098e4cbfe18cfebd57c95",
    "chainId": 56,
    "decimals": 4,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x2222227e22102fe3322098e4cbfe18cfebd57c95.png"
  },
  {
    name: "AlpaToken",
    abbr: "ALPA",
    address: "0xc5e6689c9c8b02be7c49912ef19e79cf24977f03",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xc5e6689c9c8b02be7c49912ef19e79cf24977f03.png"
  },
  {
    name: "Horizon Protocol",
    abbr: "HZN",
    address: "0xC0eFf7749b125444953ef89682201Fb8c6A917CD",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xC0eFf7749b125444953ef89682201Fb8c6A917CD.png"
  },
  {
    name: "Mix",
    abbr: "MIX",
    address: "0xB67754f5b4C704A24d2db68e661b2875a4dDD197",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xB67754f5b4C704A24d2db68e661b2875a4dDD197.png"
  },
  {
    name: "ChainGuardians",
    abbr: "CGG",
    address: "0x1613957159e9b0ac6c80e824f7eea748a32a0ae2",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x1613957159e9b0ac6c80e824f7eea748a32a0ae2.png"
  },
  {
    name: "Suterusu",
    abbr: "SUTER",
    address: "0x4cfbbdfbd5bf0814472ff35c72717bd095ada055",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x4cfbbdfbd5bf0814472ff35c72717bd095ada055.png"
  },
  {
    name: "Hakka Finance",
    abbr: "HAKKA",
    address: "0x1d1eb8e8293222e1a29d2c0e4ce6c0acfd89aaac",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x1d1eb8e8293222e1a29d2c0e4ce6c0acfd89aaac.png"
  },
  {
    name: "Exeedme",
    abbr: "XED",
    address: "0x5621b5a3f4a8008c4ccdd1b942b121c8b1944f1f",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x5621b5a3f4a8008c4ccdd1b942b121c8b1944f1f.png"
  }
]

const BSCTESTNETCoins = [
  {
    name: "BNB Token",
    abbr: "BNB",
    address: "0xae13d989dac2f0debff460ac112a837c89baa7cd", // Weth address is fetched from the router
  },
  {
    name: "AIBP Token",
    abbr: "AIBP",
    address: "0x83a1ff398Fb48D94E4C28ab10995e98dD07723b5", // Weth address is fetched from the router
  },
  {
    name: "VJAD Token",
    abbr: "VJAD",
    address: "0xEBAFB79742D05B8cf9D9e79E9Bb49B3F24e7306a", // Weth address is fetched from the router
  },
  {
    name: "BUSD Token",
    abbr: "BUSD",
    address: "0x78867bbeef44f2326bf8ddd1941a4439382ef2a7",
  },
  {
    name: "Ethereum Token",
    abbr: "ETH",
    address: "0x8babbb98678facc7342735486c851abd7a0d17ca",
  }, {
    name: "MilkshakeSwap Token",
    abbr: "MILK",
    address: "0xc9bCF3f71E37579A4A42591B09c9dd93Dfe27965",
    "chainId": 56,
    "decimals": 18
  },
  {
    name: "WBNB Token",
    abbr: "WBNB",
    address: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c.png"
  },
  {
    name: "Bakery Token",
    abbr: "BAKE",
    address: "0xe02df9e3e622debdd69fb838bb799e3f168902c5",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xe02df9e3e622debdd69fb838bb799e3f168902c5.png"
  },
  {
    name: "BUSD Token",
    abbr: "BUSD",
    address: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xe9e7cea3dedca5984780bafc599bd69add087d56.png"
  },
  {
    name: "Ethereum Token",
    abbr: "ETH",
    address: "0x2170ed0880ac9a755fd29b2688956bd959f933f8",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x2170ed0880ac9a755fd29b2688956bd959f933f8.png"
  },
  {
    name: "BTCB Token",
    abbr: "BTCB",
    address: "0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c.png"
  },
  {
    name: "BAND Protocol Token",
    abbr: "BAND",
    address: "0xad6caeb32cd2c308980a548bd0bc5aa4306c6c18",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xad6caeb32cd2c308980a548bd0bc5aa4306c6c18.png"
  },
  {
    name: "EOS Token",
    abbr: "EOS",
    address: "0x56b6fb708fc5732dec1afc8d8556423a2edccbd6",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x56b6fb708fc5732dec1afc8d8556423a2edccbd6.png"
  },
  {
    name: "Tether USD",
    abbr: "USDT",
    address: "0x55d398326f99059ff775485246999027b3197955",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x55d398326f99059ff775485246999027b3197955.png"
  },
  {
    name: "XRP Token",
    abbr: "XRP",
    address: "0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe.png"
  },
  {
    name: "Bitcoin Cash Token",
    abbr: "BCH",
    address: "0x8ff795a6f4d97e7887c79bea79aba5cc76444adf",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x8ff795a6f4d97e7887c79bea79aba5cc76444adf.png"
  },
  {
    name: "Litecoin Token",
    abbr: "LTC",
    address: "0x4338665cbb7b2485a8855a139b75d5e34ab0db94",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x4338665cbb7b2485a8855a139b75d5e34ab0db94.png"
  },
  {
    name: "Cardano Token",
    abbr: "ADA",
    address: "0x3ee2200efb3400fabb9aacf31297cbdd1d435d47",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x3ee2200efb3400fabb9aacf31297cbdd1d435d47.png"
  },
  {
    name: "Cosmos Token",
    abbr: "ATOM",
    address: "0x0eb3a705fc54725037cc9e008bdede697f62f335",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x0eb3a705fc54725037cc9e008bdede697f62f335.png"
  },
  {
    name: "Tezos Token",
    abbr: "XTZ",
    address: "0x16939ef78684453bfdfb47825f8a5f714f12623a",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x16939ef78684453bfdfb47825f8a5f714f12623a.png"
  },
  {
    name: "Ontology Token",
    abbr: "ONT",
    address: "0xfd7b3a77848f1c2d67e05e54d78d174a0c850335",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xfd7b3a77848f1c2d67e05e54d78d174a0c850335.png"
  },
  {
    name: "Zcash Token",
    abbr: "ZEC",
    address: "0x1ba42e5193dfa8b03d15dd1b86a3113bbbef8eeb",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x1ba42e5193dfa8b03d15dd1b86a3113bbbef8eeb.png"
  },
  {
    name: "Dai Token",
    abbr: "DAI",
    address: "0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3.png"
  },
  {
    name: "YFII.finance Token",
    abbr: "YFII",
    address: "0x7f70642d88cf1c4a3a7abb072b53b929b653eda5",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x7f70642d88cf1c4a3a7abb072b53b929b653eda5.png"
  },
  {
    name: "Cream",
    abbr: "CREAM",
    address: "0xd4cb328a82bdf5f03eb737f37fa6b370aef3e888",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xd4cb328a82bdf5f03eb737f37fa6b370aef3e888.png"
  },
  {
    name: "Prometeus",
    abbr: "PROM",
    address: "0xaf53d56ff99f1322515e54fdde93ff8b3b7dafd5",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xaf53d56ff99f1322515e54fdde93ff8b3b7dafd5.png"
  },
  {
    name: "CanYaCoin",
    abbr: "CAN",
    address: "0x007ea5c0ea75a8df45d288a4debdd5bb633f9e56",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x007ea5c0ea75a8df45d288a4debdd5bb633f9e56.png"
  },
  {
    name: "Polkadot Token",
    abbr: "DOT",
    address: "0x7083609fce4d1d8dc0c979aab8c869ea2c873402",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x7083609fce4d1d8dc0c979aab8c869ea2c873402.png"
  },
  {
    name: "PancakeSwap Token",
    abbr: "CAKE",
    address: "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82.png"
  },
  {
    name: "Ankr",
    abbr: "ANKR",
    address: "0xf307910a4c7bbc79691fd374889b36d8531b08e3",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xf307910a4c7bbc79691fd374889b36d8531b08e3.png"
  },
  {
    name: "ChainLink Token",
    abbr: "LINK",
    address: "0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd.png"
  },
  {
    name: "Burger Swap",
    abbr: "BURGER",
    address: "0xae9269f27437f0fcbc232d39ec814844a51d6b8f",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xae9269f27437f0fcbc232d39ec814844a51d6b8f.png"
  },
  {
    name: "SPARTAN PROTOCOL TOKEN",
    abbr: "SPART",
    address: "0xe4ae305ebe1abe663f261bc00534067c80ad677c",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xe4ae305ebe1abe663f261bc00534067c80ad677c.png"
  },
  {
    name: "Trust Wallet",
    abbr: "TWT",
    address: "0x4b0f1812e5df2a09796481ff14017e6005508003",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x4b0f1812e5df2a09796481ff14017e6005508003.png"
  },
  {
    name: "Venus",
    abbr: "XVS",
    address: "0xcf6bb5389c92bdda8a3747ddb454cb7a64626c63",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xcf6bb5389c92bdda8a3747ddb454cb7a64626c63.png"
  },
  {
    name: "AlphaToken",
    abbr: "ALPHA",
    address: "0xa1faa113cbe53436df28ff0aee54275c13b40975",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xa1faa113cbe53436df28ff0aee54275c13b40975.png"
  },
  {
    name: "Beefy.finance",
    abbr: "BIFI",
    address: "0xCa3F508B8e4Dd382eE878A314789373D80A5190A",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xCa3F508B8e4Dd382eE878A314789373D80A5190A.png"
  },
  {
    name: "yearn.finance",
    abbr: "YFI",
    address: "0x88f1a5ae2a3bf98aeaf342d26b30a79438c9142e",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x88f1a5ae2a3bf98aeaf342d26b30a79438c9142e.png"
  },
  {
    name: "Uniswap",
    abbr: "UNI",
    address: "0xbf5140a22578168fd562dccf235e5d43a02ce9b1",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xbf5140a22578168fd562dccf235e5d43a02ce9b1.png"
  },
  {
    name: "fry.world",
    abbr: "FRIES",
    address: "0x393B312C01048b3ed2720bF1B090084C09e408A1",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x393B312C01048b3ed2720bF1B090084C09e408A1.png"
  },
  {
    name: "StableXSwap",
    abbr: "STAX",
    address: "0x0da6ed8b13214ff28e9ca979dd37439e8a88f6c4",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x0da6ed8b13214ff28e9ca979dd37439e8a88f6c4.png"
  },
  {
    name: "Filecoin",
    abbr: "FIL",
    address: "0x0d8ce2a99bb6e3b7db580ed848240e4a0f9ae153",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x0d8ce2a99bb6e3b7db580ed848240e4a0f9ae153.png"
  },
  {
    name: "KAVA",
    abbr: "KAVA",
    address: "0x5F88AB06e8dfe89DF127B2430Bba4Af600866035",
    "chainId": 56,
    "decimals": 6,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x5F88AB06e8dfe89DF127B2430Bba4Af600866035.png"
  },
  {
    name: "USDX",
    abbr: "USDX",
    address: "0x1203355742e76875154c0d13eb81dcd7711dc7d9",
    "chainId": 56,
    "decimals": 6,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x1203355742e76875154c0d13eb81dcd7711dc7d9.png"
  },
  {
    name: "Injective Protocol",
    abbr: "INJ",
    address: "0xa2B726B1145A4773F68593CF171187d8EBe4d495",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xa2B726B1145A4773F68593CF171187d8EBe4d495.png"
  },
  {
    name: "Swipe",
    abbr: "SXP",
    address: "0x47bead2563dcbf3bf2c9407fea4dc236faba485a",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x47bead2563dcbf3bf2c9407fea4dc236faba485a.png"
  },
  {
    name: "Binance-Peg USD Coin",
    abbr: "USDC",
    address: "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d.png"
  },
  {
    name: "CertiK Token",
    abbr: "CTK",
    address: "0xa8c2b8eec3d368c0253ad3dae65a5f2bbb89c929",
    "chainId": 56,
    "decimals": 6,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xa8c2b8eec3d368c0253ad3dae65a5f2bbb89c929.png"
  },
  {
    name: "NAR Token",
    abbr: "NAR",
    address: "0xa1303e6199b319a891b79685f0537d289af1fc83",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xa1303e6199b319a891b79685f0537d289af1fc83.png"
  },
  {
    name: "Nyanswop Token",
    abbr: "NYA",
    address: "0xbfa0841f7a90c4ce6643f651756ee340991f99d5",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xbfa0841f7a90c4ce6643f651756ee340991f99d5.png"
  },
  {
    name: "HARD",
    abbr: "HARD",
    address: "0xf79037f6f6be66832de4e7516be52826bc3cbcc4",
    "chainId": 56,
    "decimals": 6,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xf79037f6f6be66832de4e7516be52826bc3cbcc4.png"
  },
  {
    name: "ROOBEE",
    abbr: "bROOBEE",
    address: "0xe64f5cb844946c1f102bd25bbd87a5ab4ae89fbe",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xe64f5cb844946c1f102bd25bbd87a5ab4ae89fbe.png"
  },
  {
    name: "Unifi Token",
    abbr: "UNFI",
    address: "0x728C5baC3C3e370E372Fc4671f9ef6916b814d8B",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x728C5baC3C3e370E372Fc4671f9ef6916b814d8B.png"
  },
  {
    name: "BLINk",
    abbr: "BLK",
    address: "0x63870A18B6e42b01Ef1Ad8A2302ef50B7132054F",
    "chainId": 56,
    "decimals": 6,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x63870A18B6e42b01Ef1Ad8A2302ef50B7132054F.png"
  },
  {
    name: "QUSD Stablecoin",
    abbr: "QUSD",
    address: "0xb8C540d00dd0Bf76ea12E4B4B95eFC90804f924E",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xb8C540d00dd0Bf76ea12E4B4B95eFC90804f924E.png"
  },
  {
    name: "Qian Governance Token",
    abbr: "KUN",
    address: "0x1A2fb0Af670D0234c2857FaD35b789F8Cb725584",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x1A2fb0Af670D0234c2857FaD35b789F8Cb725584.png"
  },
  {
    name: "VAI Stablecoin",
    abbr: "VAI",
    address: "0x4bd17003473389a42daf6a0a729f6fdb328bbbd7",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x4bd17003473389a42daf6a0a729f6fdb328bbbd7.png"
  },
  {
    name: "Juventus",
    abbr: "JUV",
    address: "0xc40c9a843e1c6d01b7578284a9028854f6683b1b",
    "chainId": 56,
    "decimals": 2,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xc40c9a843e1c6d01b7578284a9028854f6683b1b.png"
  },
  {
    name: "Paris Saint-Germain",
    abbr: "PSG",
    address: "0xbc5609612b7c44bef426de600b5fd1379db2ecf1",
    "chainId": 56,
    "decimals": 2,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xbc5609612b7c44bef426de600b5fd1379db2ecf1.png"
  },
  {
    name: "Ditto",
    abbr: "DITTO",
    address: "0x233d91A0713155003fc4DcE0AFa871b508B3B715",
    "chainId": 56,
    "decimals": 9,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x233d91A0713155003fc4DcE0AFa871b508B3B715.png"
  },
  {
    name: "Math",
    abbr: "MATH",
    address: "0xf218184af829cf2b0019f8e6f0b2423498a36983",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xf218184af829cf2b0019f8e6f0b2423498a36983.png"
  },
  {
    name: "Fuel",
    abbr: "FUEL",
    address: "0x2090c8295769791ab7A3CF1CC6e0AA19F35e441A",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x2090c8295769791ab7A3CF1CC6e0AA19F35e441A.png"
  },
  {
    name: "Nuls",
    abbr: "NULS",
    address: "0x8cd6e29d3686d24d3c2018cee54621ea0f89313b",
    "chainId": 56,
    "decimals": 8,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x8cd6e29d3686d24d3c2018cee54621ea0f89313b.png"
  },
  {
    name: "NerveNetwork",
    abbr: "NVT",
    address: "0xf0e406c49c63abf358030a299c0e00118c4c6ba5",
    "chainId": 56,
    "decimals": 8,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xf0e406c49c63abf358030a299c0e00118c4c6ba5.png"
  },
  {
    name: "Reef",
    abbr: "REEF",
    address: "0xf21768ccbc73ea5b6fd3c687208a7c2def2d966e",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xf21768ccbc73ea5b6fd3c687208a7c2def2d966e.png"
  },
  {
    name: "OG",
    abbr: "OG",
    address: "0xf05e45ad22150677a017fbd94b84fbb63dc9b44c",
    "chainId": 56,
    "decimals": 2,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xf05e45ad22150677a017fbd94b84fbb63dc9b44c.png"
  },
  {
    name: "Atletico de Madrid",
    abbr: "ATM",
    address: "0x25e9d05365c867e59c1904e7463af9f312296f9e",
    "chainId": 56,
    "decimals": 2,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x25e9d05365c867e59c1904e7463af9f312296f9e.png"
  },
  {
    name: "AS Roma",
    abbr: "ASR",
    address: "0x80d5f92c2c8c682070c95495313ddb680b267320",
    "chainId": 56,
    "decimals": 2,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x80d5f92c2c8c682070c95495313ddb680b267320.png"
  },
  {
    name: "AllianceBlock",
    abbr: "bALBT",
    address: "0x72faa679e1008ad8382959ff48e392042a8b06f7",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x72faa679e1008ad8382959ff48e392042a8b06f7.png"
  },
  {
    name: "Tenet",
    abbr: "TEN",
    address: "0xdff8cb622790b7f92686c722b02cab55592f152c",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xdff8cb622790b7f92686c722b02cab55592f152c.png"
  },
  {
    name: "Helmet.insure",
    abbr: "Helmet",
    address: "0x948d2a81086a075b3130bac19e4c6dee1d2e3fe8",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x948d2a81086a075b3130bac19e4c6dee1d2e3fe8.png"
  },
  {
    name: "BSCEX",
    abbr: "BSCX",
    address: "0x5ac52ee5b2a633895292ff6d8a89bb9190451587",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x5ac52ee5b2a633895292ff6d8a89bb9190451587.png"
  },
  {
    name: "Standard BTC Hashrate Token",
    abbr: "BTCST",
    address: "0x78650b139471520656b9e7aa7a5e9276814a38e9",
    "chainId": 56,
    "decimals": 17,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x78650b139471520656b9e7aa7a5e9276814a38e9.png"
  },
  {
    name: "Frontier Token",
    abbr: "FRONT",
    address: "0x928e55daB735aa8260AF3cEDadA18B5f70C72f1b",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x928e55daB735aa8260AF3cEDadA18B5f70C72f1b.png"
  },
  {
    name: "Soteria",
    abbr: "wSOTE",
    address: "0x541e619858737031a1244a5d0cd47e5ef480342c",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x541e619858737031a1244a5d0cd47e5ef480342c.png"
  },
  {
    name: "Mirror TSLA Token",
    abbr: "mTSLA",
    address: "0xF215A127A196e3988C09d052e16BcFD365Cd7AA3",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xF215A127A196e3988C09d052e16BcFD365Cd7AA3.png"
  },
  {
    name: "Mirror AMZN Token",
    abbr: "mAMZN",
    address: "0x3947B992DC0147D2D89dF0392213781b04B25075",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x3947B992DC0147D2D89dF0392213781b04B25075.png"
  },
  {
    name: "Mirror NFLX Token",
    abbr: "mNFLX",
    address: "0xa04F060077D90Fe2647B61e4dA4aD1F97d6649dc",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xa04F060077D90Fe2647B61e4dA4aD1F97d6649dc.png"
  },
  {
    name: "Mirror GOOGL Token",
    abbr: "mGOOGL",
    address: "0x62D71B23bF15218C7d2D7E48DBbD9e9c650B173f",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x62D71B23bF15218C7d2D7E48DBbD9e9c650B173f.png"
  },
  {
    name: "UST Token",
    abbr: "UST",
    address: "0x23396cF899Ca06c4472205fC903bDB4de249D6fC",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x23396cF899Ca06c4472205fC903bDB4de249D6fC.png"
  },
  {
    name: "b.earnfi",
    abbr: "BFI",
    address: "0x81859801b01764D4f0Fa5E64729f5a6C3b91435b",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x81859801b01764D4f0Fa5E64729f5a6C3b91435b.png"
  },
  {
    name: "bDollar",
    abbr: "BDO",
    address: "0x190b589cf9Fb8DDEabBFeae36a813FFb2A702454",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x190b589cf9Fb8DDEabBFeae36a813FFb2A702454.png"
  },
  {
    name: "bDollar Share",
    abbr: "sBDO",
    address: "0x0d9319565be7f53CeFE84Ad201Be3f40feAE2740",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x0d9319565be7f53CeFE84Ad201Be3f40feAE2740.png"
  },
  {
    name: "Elrond",
    abbr: "EGLD",
    address: "0xbf7c81fff98bbe61b40ed186e4afd6ddd01337fe",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xbf7c81fff98bbe61b40ed186e4afd6ddd01337fe.png"
  },
  {
    name: "AUTOv2",
    abbr: "AUTO",
    address: "0xa184088a740c695e156f91f5cc086a06bb78b827",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xa184088a740c695e156f91f5cc086a06bb78b827.png"
  },
  {
    name: "Hedget",
    abbr: "HGET",
    address: "0xC7d8D35EBA58a0935ff2D5a33Df105DD9f071731",
    "chainId": 56,
    "decimals": 6,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xC7d8D35EBA58a0935ff2D5a33Df105DD9f071731.png"
  },
  {
    name: "Litentry",
    abbr: "LIT",
    address: "0xb59490ab09a0f526cc7305822ac65f2ab12f9723",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xb59490ab09a0f526cc7305822ac65f2ab12f9723.png"
  },
  {
    name: "Linear Finance",
    abbr: "LINA",
    address: "0x762539b45a1dcce3d36d080f74d1aed37844b878",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x762539b45a1dcce3d36d080f74d1aed37844b878.png"
  },
  {
    name: "Beacon ETH",
    abbr: "BETH",
    address: "0x250632378e573c6be1ac2f97fcdf00515d0aa91b",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x250632378e573c6be1ac2f97fcdf00515d0aa91b.png"
  },
  {
    name: "lUSD",
    abbr: "lUSD",
    address: "0x23e8a70534308a4AAF76fb8C32ec13d17a3BD89e",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x23e8a70534308a4AAF76fb8C32ec13d17a3BD89e.png"
  },
  {
    name: "SafePal Token",
    abbr: "SFP",
    address: "0xd41fdb03ba84762dd66a0af1a6c8540ff1ba5dfb",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xd41fdb03ba84762dd66a0af1a6c8540ff1ba5dfb.png"
  },
  {
    name: "Compound Finance",
    abbr: "COMP",
    address: "0x52ce071bd9b1c4b00a0b92d298c512478cad67e8",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x52ce071bd9b1c4b00a0b92d298c512478cad67e8.png"
  },
  {
    name: "Swirge Pay",
    abbr: "SWGb",
    address: "0xe40255c5d7fa7ceec5120408c78c787cecb4cfdb",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xe40255c5d7fa7ceec5120408c78c787cecb4cfdb.png"
  },
  {
    name: "renBTC",
    abbr: "renBTC",
    address: "0xfCe146bF3146100cfe5dB4129cf6C82b0eF4Ad8c",
    "chainId": 56,
    "decimals": 8,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xfCe146bF3146100cfe5dB4129cf6C82b0eF4Ad8c.png"
  },
  {
    name: "renDOGE",
    abbr: "renDOGE",
    address: "0xc3fed6eb39178a541d274e6fc748d48f0ca01cc3",
    "chainId": 56,
    "decimals": 8,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xc3fed6eb39178a541d274e6fc748d48f0ca01cc3.png"
  },
  {
    name: "anyMTLX",
    abbr: "anyMTLX",
    address: "0x5921dee8556c4593eefcfad3ca5e2f618606483b",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x5921dee8556c4593eefcfad3ca5e2f618606483b.png"
  },
  {
    name: "ZeroSwapToken",
    abbr: "ZEE",
    address: "0x44754455564474a89358b2c2265883df993b12f0",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x44754455564474a89358b2c2265883df993b12f0.png"
  },
  {
    name: "Berry",
    abbr: "BRY",
    address: "0xf859Bf77cBe8699013d6Dbc7C2b926Aaf307F830",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xf859Bf77cBe8699013d6Dbc7C2b926Aaf307F830.png"
  },
  {
    name: "Swingby",
    abbr: "SWINGBY",
    address: "0x71DE20e0C4616E7fcBfDD3f875d568492cBE4739",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x71DE20e0C4616E7fcBfDD3f875d568492cBE4739.png"
  },
  {
    name: "Dodo",
    abbr: "DODO",
    address: "0x67ee3cb086f8a16f34bee3ca72fad36f7db929e2",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x67ee3cb086f8a16f34bee3ca72fad36f7db929e2.png"
  },
  {
    name: "Sushi",
    abbr: "SUSHI",
    address: "0x947950bcc74888a40ffa2593c5798f11fc9124c4",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x947950bcc74888a40ffa2593c5798f11fc9124c4.png"
  },
  {
    name: "OPEN Governance Token",
    abbr: "bOPEN",
    address: "0xF35262a9d427F96d2437379eF090db986eaE5d42",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xF35262a9d427F96d2437379eF090db986eaE5d42.png"
  },
  {
    name: "BoringDAO",
    abbr: "BOR",
    address: "0x92d7756c60dcfd4c689290e8a9f4d263b3b32241",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x92d7756c60dcfd4c689290e8a9f4d263b3b32241.png"
  },
  {
    name: "renZEC",
    abbr: "renZEC",
    address: "0x695FD30aF473F2960e81Dc9bA7cB67679d35EDb7",
    "chainId": 56,
    "decimals": 8,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x695FD30aF473F2960e81Dc9bA7cB67679d35EDb7.png"
  },
  {
    name: "Multiplier",
    abbr: "bMXX",
    address: "0x4131b87f74415190425ccd873048c708f8005823",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x4131b87f74415190425ccd873048c708f8005823.png"
  },
  {
    name: "IoTeX",
    abbr: "IOTX",
    address: "0x9678e42cebeb63f23197d726b29b1cb20d0064e5",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x9678e42cebeb63f23197d726b29b1cb20d0064e5.png"
  },
  {
    name: "xMARK",
    abbr: "xMARK",
    address: "0x26a5dfab467d4f58fb266648cae769503cec9580",
    "chainId": 56,
    "decimals": 9,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x26a5dfab467d4f58fb266648cae769503cec9580.png"
  },
  {
    name: "TokenPocket",
    abbr: "TPT",
    address: "0xeca41281c24451168a37211f0bc2b8645af45092",
    "chainId": 56,
    "decimals": 4,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xeca41281c24451168a37211f0bc2b8645af45092.png"
  },
  {
    name: "Yieldwatch",
    abbr: "WATCH",
    address: "0x7a9f28eb62c791422aa23ceae1da9c847cbec9b0",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x7a9f28eb62c791422aa23ceae1da9c847cbec9b0.png"
  },
  {
    name: "Bella Protocol",
    abbr: "BEL",
    address: "0x8443f091997f06a61670b735ed92734f5628692f",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x8443f091997f06a61670b735ed92734f5628692f.png"
  },
  {
    name: "DeXe",
    abbr: "DEXE",
    address: "0x039cb485212f996a9dbb85a9a75d898f94d38da6",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x039cb485212f996a9dbb85a9a75d898f94d38da6.png"
  },
  {
    name: "Ramp DEFI",
    abbr: "RAMP",
    address: "0x8519ea49c997f50ceffa444d240fb655e89248aa",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x8519ea49c997f50ceffa444d240fb655e89248aa.png"
  },
  {
    name: "Belt",
    abbr: "BELT",
    address: "0xE0e514c71282b6f4e823703a39374Cf58dc3eA4f",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xE0e514c71282b6f4e823703a39374Cf58dc3eA4f.png"
  },
  {
    name: "Basic Attention Token",
    abbr: "BAT",
    address: "0x101d82428437127bf1608f699cd651e6abf9766e",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x101d82428437127bf1608f699cd651e6abf9766e.png"
  },
  {
    name: "BUX",
    abbr: "BUX",
    address: "0x211ffbe424b90e25a15531ca322adf1559779e45",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x211ffbe424b90e25a15531ca322adf1559779e45.png"
  },
  {
    name: "ForTube",
    abbr: "FOR",
    address: "0x658A109C5900BC6d2357c87549B651670E5b0539",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x658A109C5900BC6d2357c87549B651670E5b0539.png"
  },
  {
    name: "My Neigbor Alice",
    abbr: "ALICE",
    address: "0xac51066d7bec65dc4589368da368b212745d63e8",
    "chainId": 56,
    "decimals": 6,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xac51066d7bec65dc4589368da368b212745d63e8.png"
  },
  {
    name: "Pancake Bunny",
    abbr: "BUNNY",
    address: "0xc9849e6fdb743d08faee3e34dd2d1bc69ea11a51",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xc9849e6fdb743d08faee3e34dd2d1bc69ea11a51.png"
  },
  {
    name: "Dego.Finance",
    abbr: "DEGO",
    address: "0x3fda9383a84c05ec8f7630fe10adf1fac13241cc",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x3fda9383a84c05ec8f7630fe10adf1fac13241cc.png"
  },
  {
    name: "LTO Network",
    abbr: "LTO",
    address: "0x857b222fc79e1cbbf8ca5f78cb133d1b7cf34bbd",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x857b222fc79e1cbbf8ca5f78cb133d1b7cf34bbd.png"
  },
  {
    name: "Contentos",
    abbr: "COS",
    address: "0x96dd399f9c3afda1f194182f71600f1b65946501",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x96dd399f9c3afda1f194182f71600f1b65946501.png"
  },
  {
    name: "Tixl",
    abbr: "TXL",
    address: "0x1ffd0b47127fdd4097e54521c9e2c7f0d66aafc5",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x1ffd0b47127fdd4097e54521c9e2c7f0d66aafc5.png"
  },
  {
    name: "Alpaca",
    abbr: "ALPACA",
    address: "0x8f0528ce5ef7b51152a59745befdd91d97091d2f",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x8f0528ce5ef7b51152a59745befdd91d97091d2f.png"
  },
  {
    name: "Dusk",
    abbr: "DUSK",
    address: "0xb2bd0749dbe21f623d9baba856d3b0f0e1bfec9c",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xb2bd0749dbe21f623d9baba856d3b0f0e1bfec9c.png"
  },
  {
    name: "bDIGG",
    abbr: "bDIGG",
    address: "0x5986d5c77c65e5801a5caa4fae80089f870a71da",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x5986d5c77c65e5801a5caa4fae80089f870a71da.png"
  },
  {
    name: "bBADGER",
    abbr: "bBADGER",
    address: "0x1f7216fdb338247512ec99715587bb97bbf96eae",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x1f7216fdb338247512ec99715587bb97bbf96eae.png"
  },
  {
    name: "Unitrade",
    abbr: "TRADE",
    address: "0x7af173f350d916358af3e218bdf2178494beb748",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x7af173f350d916358af3e218bdf2178494beb748.png"
  },
  {
    name: "PNT",
    abbr: "PNT",
    address: "0x7a1da9f49224ef98389b071b8a3294d1cc5e3e6a",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x7a1da9f49224ef98389b071b8a3294d1cc5e3e6a.png"
  },
  {
    name: "pBTC",
    abbr: "pBTC",
    address: "0xed28a457a5a76596ac48d87c0f577020f6ea1c4c",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xed28a457a5a76596ac48d87c0f577020f6ea1c4c.png"
  },
  {
    name: "Mirror Finance",
    abbr: "MIR",
    address: "0x5b6dcf557e2abe2323c48445e8cc948910d8c2c9",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x5b6dcf557e2abe2323c48445e8cc948910d8c2c9.png"
  },
  {
    name: "PolyCrowns",
    abbr: "pCWS",
    address: "0xbcf39f0edda668c58371e519af37ca705f2bfcbd",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xbcf39f0edda668c58371e519af37ca705f2bfcbd.png"
  },
  {
    name: "Zilliqa",
    abbr: "ZIL",
    address: "0xb86abcb37c3a4b64f74f59301aff131a1becc787",
    "chainId": 56,
    "decimals": 12,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xb86abcb37c3a4b64f74f59301aff131a1becc787.png"
  },
  {
    name: "Lien",
    abbr: "LIEN",
    address: "0x5d684adaf3fcfe9cfb5cede3abf02f0cdd1012e3",
    "chainId": 56,
    "decimals": 8,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x5d684adaf3fcfe9cfb5cede3abf02f0cdd1012e3.png"
  },
  {
    name: "Switcheo",
    abbr: "SWTH",
    address: "0x250b211EE44459dAd5Cd3bCa803dD6a7EcB5d46C",
    "chainId": 56,
    "decimals": 8,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x250b211EE44459dAd5Cd3bCa803dD6a7EcB5d46C.png"
  },
  {
    name: "Ellipsis",
    abbr: "EPS",
    address: "0xa7f552078dcc247c2684336020c03648500c6d9f",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xa7f552078dcc247c2684336020c03648500c6d9f.png"
  },
  {
    name: "DFuture",
    abbr: "DFT",
    address: "0x42712dF5009c20fee340B245b510c0395896cF6e",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x42712dF5009c20fee340B245b510c0395896cF6e.png"
  },
  {
    name: "Gourmet Galaxy",
    abbr: "GUM",
    address: "0xc53708664b99DF348dd27C3Ac0759d2DA9c40462",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xc53708664b99DF348dd27C3Ac0759d2DA9c40462.png"
  },
  {
    name: "Harmony One",
    abbr: "ONE",
    address: "0x03ff0ff224f904be3118461335064bb48df47938",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x03ff0ff224f904be3118461335064bb48df47938.png"
  },
  {
    name: "Nerve Finance",
    abbr: "NRV",
    address: "0x42f6f551ae042cbe50c739158b4f0cac0edb9096",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x42f6f551ae042cbe50c739158b4f0cac0edb9096.png"
  },
  {
    name: "Easyfi Network",
    abbr: "EASY",
    address: "0x7c17c8bed8d14bacce824d020f994f4880d6ab3b",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x7c17c8bed8d14bacce824d020f994f4880d6ab3b.png"
  },
  {
    name: "SafeMoon",
    abbr: "SAFEMOON",
    address: "0x8076c74c5e3f5852037f31ff0093eeb8c8add8d3",
    "chainId": 56,
    "decimals": 9,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x8076c74c5e3f5852037f31ff0093eeb8c8add8d3.png"
  },
  {
    name: "Tau Bitcoin",
    abbr: "𝜏BTC",
    address: "0x2cD1075682b0FCCaADd0Ca629e138E64015Ba11c",
    "chainId": 56,
    "decimals": 9,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x2cD1075682b0FCCaADd0Ca629e138E64015Ba11c.png"
  },
  {
    name: "Hoo",
    abbr: "HOO",
    address: "0xe1d1f66215998786110ba0102ef558b22224c016",
    "chainId": 56,
    "decimals": 8,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xe1d1f66215998786110ba0102ef558b22224c016.png"
  },
  {
    name: "Oddz",
    abbr: "ODDZ",
    address: "0xcd40f2670cf58720b694968698a5514e924f742d",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xcd40f2670cf58720b694968698a5514e924f742d.png"
  },
  {
    name: "APYSwap",
    abbr: "APYS",
    address: "0x37dfACfaeDA801437Ff648A1559d73f4C40aAcb7",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x37dfACfaeDA801437Ff648A1559d73f4C40aAcb7.png"
  },
  {
    name: "Bondly",
    abbr: "BONDLY",
    address: "0x96058f8c3e16576d9bd68766f3836d9a33158f89",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x96058f8c3e16576d9bd68766f3836d9a33158f89.png"
  },
  {
    name: "TokoCrypto",
    abbr: "TKO",
    address: "0x9f589e3eabe42ebc94a44727b3f3531c0c877809",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x9f589e3eabe42ebc94a44727b3f3531c0c877809.png"
  },
  {
    name: "Itam",
    abbr: "ITAM",
    address: "0x04c747b40be4d535fc83d09939fb0f626f32800b",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x04c747b40be4d535fc83d09939fb0f626f32800b.png"
  },
  {
    name: "ARPA",
    abbr: "ARPA",
    address: "0x6f769e65c14ebd1f68817f5f1dcdb61cfa2d6f7e",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x6f769e65c14ebd1f68817f5f1dcdb61cfa2d6f7e.png"
  },
  {
    name: "Perlin X",
    abbr: "PERL",
    address: "0x0f9e4d49f25de22c2202af916b681fbb3790497b",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x0f9e4d49f25de22c2202af916b681fbb3790497b.png"
  },
  {
    name: "Juggernaut Finance",
    abbr: "JGN",
    address: "0xc13b7a43223bb9bf4b69bd68ab20ca1b79d81c75",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xc13b7a43223bb9bf4b69bd68ab20ca1b79d81c75.png"
  },
  {
    name: "Alien Worlds",
    abbr: "TLM",
    address: "0x2222227e22102fe3322098e4cbfe18cfebd57c95",
    "chainId": 56,
    "decimals": 4,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x2222227e22102fe3322098e4cbfe18cfebd57c95.png"
  },
  {
    name: "AlpaToken",
    abbr: "ALPA",
    address: "0xc5e6689c9c8b02be7c49912ef19e79cf24977f03",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xc5e6689c9c8b02be7c49912ef19e79cf24977f03.png"
  },
  {
    name: "Horizon Protocol",
    abbr: "HZN",
    address: "0xC0eFf7749b125444953ef89682201Fb8c6A917CD",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xC0eFf7749b125444953ef89682201Fb8c6A917CD.png"
  },
  {
    name: "Mix",
    abbr: "MIX",
    address: "0xB67754f5b4C704A24d2db68e661b2875a4dDD197",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xB67754f5b4C704A24d2db68e661b2875a4dDD197.png"
  },
  {
    name: "ChainGuardians",
    abbr: "CGG",
    address: "0x1613957159e9b0ac6c80e824f7eea748a32a0ae2",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x1613957159e9b0ac6c80e824f7eea748a32a0ae2.png"
  },
  {
    name: "Suterusu",
    abbr: "SUTER",
    address: "0x4cfbbdfbd5bf0814472ff35c72717bd095ada055",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x4cfbbdfbd5bf0814472ff35c72717bd095ada055.png"
  },
  {
    name: "Hakka Finance",
    abbr: "HAKKA",
    address: "0x1d1eb8e8293222e1a29d2c0e4ce6c0acfd89aaac",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x1d1eb8e8293222e1a29d2c0e4ce6c0acfd89aaac.png"
  },
  {
    name: "Exeedme",
    abbr: "XED",
    address: "0x5621b5a3f4a8008c4ccdd1b942b121c8b1944f1f",
    "chainId": 56,
    "decimals": 18,
    "logoURI": "https://exchange.pancakeswap.finance/images/coins/0x5621b5a3f4a8008c4ccdd1b942b121c8b1944f1f.png"
  }
]


const GÖRLICoins = [
  {
    name: "Ether",
    abbr: "ETH",
    address: "", // Weth address is fetched from the router
  },
  {
    name: "Dai",
    abbr: "DAI",
    address: "0x73967c6a0904aa032c103b4104747e88c566b1a2",
  },
  {
    name: "Tether USD",
    abbr: "USDT",
    address: "0x509ee0d083ddf8ac028f2a56731412edd63223b9",
  },
]
const MUMBAICoins = [
  {
    name: "Wrapped Matic",
    abbr: "WMATIC",
    address: "0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889",
    },
  {
    name: "Dai Stablecoin",
    abbr: "DAI",
    address: "0xcB1e72786A6eb3b44C2a2429e317c8a2462CFeb1",
    },
    {
    name: "Ether",
    abbr: "ETH",
    address: "0x714550C2C1Ea08688607D86ed8EeF4f5E4F22323",
    },
    {
    name: "SAND",
    abbr: "SAND",
    address: "0xE03489D4E90b22c59c5e23d45DFd59Fc0dB8a025",
    },
    {
    name: "Tether USD",
    abbr: "USDT",
    address: "0x3813e82e6f7098b9583FC0F33a962D02018B6803",
    },
    
]
const COINS = new Map();
COINS.set(chains.ChainId.MAINNET, MAINNETCoins);
COINS.set(chains.ChainId.POLYGON, POLYGONCoins);
COINS.set(chains.ChainId.BSC, BSCCoins);
COINS.set(chains.ChainId.BSCTESTNET, BSCTESTNETCoins);
COINS.set(chains.ChainId.GÖRLI, GÖRLICoins);
COINS.set(chains.ChainId.MUMBAI, MUMBAICoins);
export default COINS
