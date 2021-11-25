import { useState } from "react";
import { useWallet } from "../shared/context";

import { WalletDialog } from "./";

const HeaderWallet = () => {
  const [open, setOpen] = useState<Boolean>(false);
  const { state, dispatch } = useWallet();

  return (
    /* Wallet icon starting with 0x32jkdm23... */
    <div className="header__wallet">
      <div className="header__wallet-wrapper">
        <div className="icon wallet">
          <div className="tooltip">{state.walletAddress}</div>
          {/* This should open a Dialog with information for user
          precautions and input where user can change their wallet address */}
          <span onClick={() => setOpen(!open)}>
            <img
              height="30px"
              width="30px"
              src="./images/wallet.png"
              alt="Wallet"
            ></img>
          </span>
        </div>
      </div>
      <WalletDialog open={open} setOpen={setOpen} dispatch={dispatch} state={state}/>
    </div>
  );
};

export default HeaderWallet;
