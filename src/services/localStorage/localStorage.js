const storage = {
  get(key) {
    localStorage.getItem(key);
  },
  remove(key) {
    localStorage.removeItem(key);
  },
  set(key, value) {
    localStorage.setItem(key, value);
  },
  clear() {
    localStorage.clear();
  }
};

export const { get, clear, remove, set } = storage;

export default storage;
