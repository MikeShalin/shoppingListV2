class localStorageMock {
  store = {}

  getItem = (key) => this.store[key]
  setItem = (key, value) => {
    this.store[key] = value.toString()
  }
  clear = () => {
    this.store = {}
  }
  removeItem = (key) => {
    delete this.store[key]
  }
}

export default new localStorageMock()
