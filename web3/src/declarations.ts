interface Coin98{
  send: Function;
  enable: () => Promise<string[]>;
  on?: (method: string, listener: (...args: any[]) => void) => void;
  removeListener?: (method: string, listener: (...args: any[]) => void) => void;
  disconnect: Function
}

declare interface Window {
  ethereum: Coin98,
  isCoin98?: boolean
}

declare const __DEV__: boolean;
