interface IStorage {
  getItem(key: string): Promise<string> | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
}

// May not work because of the interface
const LocalStorage: IStorage = {
  async getItem() {
    const item = localStorage.getItem("wallet_addr_v1");

    if (!item) {
      return null;
    }

    return await JSON.parse(item);
  },
  async setItem(item) {
    const strItem = JSON.stringify(item);
    
    localStorage.setItem("wallet_addr_v1", strItem);
  },
  removeItem() {
    localStorage.removeItem("wallet_addr_v1");
  },
};

export default LocalStorage;
