export default function(context) {
  if (!context.store.getters['shopping/getTotalShopping'].length > 0) {
    context.redirect('/cart')
  }
}
