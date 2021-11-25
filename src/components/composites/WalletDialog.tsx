import { DispatchW, State } from "../../shared/context";
import { Dispatch } from "react";

import { useState } from "react";

import CSS from "csstype";

const openStyles: CSS.Properties = {
  opacity: 1,
  visibility: "visible",
};

const closedStyles: CSS.Properties = {
  opacity: 0,
  visibility: "hidden",
};

type WalletDialogProps = {
  open: Boolean;
  setOpen: Dispatch<Boolean>;
  dispatch: DispatchW;
  state: State;
};

const WalletDialog = ({
  open,
  setOpen,
  dispatch,
  state,
}: WalletDialogProps) => {
  const [wallet, setWallet] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  function setTimeoutToClearMessage() {
    setTimeout(() => {
      setMessage("");
    }, 4000);
  }

  function setTimeoutToCloseDialog() {
    setTimeout(() => {
      setOpen(!open);
    }, 4500);
  }

  return (
    <div className="dialog" style={open ? openStyles : closedStyles}>
      <div className="dialog__content">
        <div className="dialog__content-info">
          <h3>Change your Wallet Address in the input below</h3>
          <div className="dialog__content-info--danger">
            <p>
              It is your responsibility to check your wallet address, |WE| do
              not take any responsibility for incorrectly inputed wallet
              details.
            </p>
          </div>
        </div>
        {message.length > 1 ? (
          <div style={{ color: "#FF6868" }}>{message}</div>
        ) : (
          <></>
        )}
        <div className="dialog__content-input">
          <input type="text" placeholder={state.walletAddress} onChange={(e) => setWallet(e.target.value)} />
          <button
            className="save"
            onClick={() => {
              if (wallet.length > 40) {
                dispatch({ type: "CHANGE_WALLET_ADDRESS", payload: wallet });
                setMessage("Successfully changed your wallet");
                setTimeoutToCloseDialog();
              } else {
                //TODO: Clear input on error
                setWallet("");
                setMessage(
                  "Wallet Address must be at least 40 characters long and start with 0x.."
                );
              }
              setTimeoutToClearMessage();
            }}
          >
            Save Wallet
          </button>
        </div>
        <p className="dialog__content-close" onClick={() => setOpen(!open)}>
          &times;
        </p>
      </div>
    </div>
  );
};

export default WalletDialog;
