class Impression {
  constructor(el, dataAttrs = {}) {
    try {
      this._constructor(el, dataAttrs)
    } catch (error) {
      console.error(error)
    }
  }

  _constructor(el) {
    if (typeof el === 'string') {
      el = document.querySelector(el)
    }

    if (!el) {
      console.error('ERROR: element is undefined.')
    }

    this._el = el
  }
}

export default Impression
