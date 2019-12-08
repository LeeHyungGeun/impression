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

    Impression._instances.push(el)

    this._check()
  }

  _check() {
    setInterval(() => {
      const el = Impression._instances[0]
      const isInViewport = this._isElementViewport(el)
      
      console.log(isInViewport)

    }, 1000)
  }

  _isElementViewport(el) {
    // REF: https://gist.github.com/davidtheclark/5515733
    const { top: elementTop, left: elementLeft, bottom: elementBottom, right: elementRight } = el.getBoundingClientRect()

    // window.innerHeight // 내부 height
    // window.innerWidth // 내부 width
    // window.pageYOffset // 스크롤된 길이

    // const screenLeft = window.pageXOffset
    // const screenTop = window.pageYOffset
    // const screenRight = screenLeft + window.innerHeight
    // const screenBottom = screenTop + window.innerWidth

    if (elementTop >= 0 &&
      elementLeft >= 0 &&
      elementBottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      elementRight <= (window.innerWidth || document.documentElement.clientWidth)) {
      return true
    } else {
      return false
    }
  }
}

// Impression._instances = new WeakMap()
Impression._instances = []

export default Impression
