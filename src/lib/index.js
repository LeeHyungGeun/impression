import Impression from './impression'

const NAMESPACE = 'impression'

window[NAMESPACE] = window[NAMESPACE] || {}

if (!window[NAMESPACE].add) {
  /*const add = */(window[NAMESPACE].add = function(element, dataAttrs = {}) {
    const { _el } = new Impression(element, dataAttrs)
    
    return Promise.resolve()
      .then(() => {
        return _el
      })
  })

  window[NAMESPACE].version = '0.0.1'
}

export default window[NAMESPACE]
