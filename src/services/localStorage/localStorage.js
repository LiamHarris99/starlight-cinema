const storage = {
  get(key) {
    return localStorage.getItem(key);
  },
  remove(key) {
    return localStorage.removeItem(key);
  },
  set(key, value) {
    return localStorage.setItem(key, value);
  },
  clear() {
    return localStorage.clear();
  }
};

export const { get, clear, remove, set } = storage;

export default storage;
