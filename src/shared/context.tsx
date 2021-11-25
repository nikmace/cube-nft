import type { ReactNode } from "react";
import { createContext, useContext, useReducer } from "react";

const defaultState = {
  walletAddress: "0x29D7d1dd5B6f9C864d9db560D72a247c178aE86B",
};

export type Action = {
  type: "CHANGE_WALLET_ADDRESS";
  payload: string;
};
export type DispatchW = (action: Action) => void;
export type State = typeof defaultState;

const WalletContext = createContext<
  { state: State; dispatch: DispatchW } | undefined
>(undefined);

function walletReducer(state: State, action: Action) {
  switch (action.type) {
    case "CHANGE_WALLET_ADDRESS":
      return {
        walletAddress: action.payload,
      };
    default:
      throw new Error("There is no such action: " + action.type);
  }
}

export function WalletProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(walletReducer, defaultState);

  return (
    <WalletContext.Provider value={{ state, dispatch }}>
      {children}
    </WalletContext.Provider>
  );
}

export function useWallet() {
  const context = useContext(WalletContext);

  if (!context) {
    throw new Error("useWallet must be used inside a WalletContext");
  }

  return context;
}
