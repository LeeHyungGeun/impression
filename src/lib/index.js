import env from 'env'
import Impression from './impression'

window[env.NAMESPACE] = window[env.NAMESPACE] || {}

if (!window[env.NAMESPACE].add) {
  /*const add = */(window[env.NAMESPACE].add = function(element, dataAttrs = {}) {
    const { _el } = new Impression(element, dataAttrs)
    
    return Promise.resolve()
      .then(() => {
        return _el
      })
  })
  
  window[env.NAMESPACE].version = '0.0.1'
}

export default window[env.NAMESPACE]
