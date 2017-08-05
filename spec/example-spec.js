import { App } from 'app/app'

describe('An example test', () => {
  it('runs specs correctly', () => {
    expect(`${2 + 3}`).toEqual('5')
  })

  it('imports modules correctly', () => {
    const app = new App()
    expect(app.run()).toEqual(app)
  })
})
