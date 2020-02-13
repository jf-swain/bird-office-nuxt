let amount

module.exports = {
  'Testing - Add random product to cart header'(browser) {
    browser
      .url('http://localhost:3000/')
      .waitForElementVisible('body')
      .assert.visible('.home-content')
      .elements('css selector', '.home-content a', (res) => {
        const numproduct = res.value.length
        const randomProduct = Math.floor(Math.random() * numproduct)
        const selectProduct = res.value[randomProduct]
        const jsonWebElementId = selectProduct[Object.keys(selectProduct)[0]]

        browser.elementIdClick(jsonWebElementId)
      })
      .waitForElementVisible('button.action__add')
      .getText('.amount', function(result) {
        amount = result.value
      })
      .click('button.action__add')
      .perform(() => {
        browser.assert.containsText('.shopping-cart__amount', amount)
      })
      .end()
  }
}
