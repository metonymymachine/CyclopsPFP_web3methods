import {
  addWalletListener,
  connectWallet,
  loadPreSaleStatus,
  loadSaleStatus,
  allowlist_mint,
  cyclops_mint,
  togglePresale,
  toggleSale,
  walletReset,
  walletState,
  web3ModalObj,
  withdraw,
  allowListCounter,
  mintpassMint,
  provider,
  public_mint,
} from "./script";

//connect to the wallet
global.connectWb3Wallet = () => {
  connectWallet();
};

//minting for general public
global.cyclops_mint = (amount) => {
  cyclops_mint(amount);
};

//Presale mint
global.allowlist_mint = (amount) => {
  allowlist_mint(amount);
};

//Presale mint
global.mint_pass_mint = (amount) => {
  mintpassMint(amount);
};

global.provider_ = () => {
  return provider;
};

global.publicmint = (amount) => {
  public_mint(amount);
};

//bundle price minting

// global.mint_bunlde_price = (amount) => {
//   mintBundlePrice(amount);
// };

//wallet event listener
global.walletChanges = () => {
  addWalletListener();
};

//reset the walletxa
global.walletReset = () => {
  walletReset();
};

//toggle presale

global.toggle_presale = () => {
  togglePresale();
};

//toggle sale
global.toggle_sale = () => {
  toggleSale();
};

//withdraw
global.withdraw = () => {
  withdraw();
};

//presale and sale status
global.pre_sale_status = () => {
  loadPreSaleStatus();
};

//load sale status
global.sale_status = () => {
  loadSaleStatus();
};

//get root

global.root = () => {
  get_root();
};

global.state = () => {
  walletState();
};
global.web3modal = web3ModalObj;
