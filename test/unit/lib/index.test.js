import env from 'env'
import '@/lib/index'

describe('lib/index', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="wrap-1"></div>
    `
  })

  it('impression.add() - should return dom element if pass an element', () => {
    // Given
    const impression = global[env.NAMESPACE]
    const $element = document.querySelector('#wrap-1')
    // const elementName = '#wrap-1'
    // const spy = jest.fn((elem) => elem)

    // When
    return impression.add($element).then((element) => {
      // Then
      expect(element.id).toBe($element.id)
    })
  })
  
  it('impression.add() - should return dom element if pass an element id', () => {
    // Given
    const impression = global[env.NAMESPACE]
    const elementName = '#wrap-1'

    // When
    return impression.add(elementName).then((element) => {
      // Then
      expect(element.id).toBe('wrap-1')
    })
  })
})
