class App {
  _element: HTMLElement

  constructor() {
    this._element = document.getElementsByTagName('body')[0]
  }

  run() {
    this._element.innerText = 'App running...'
    return this
  }
}

export { App }
