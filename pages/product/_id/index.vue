<template>
  <section>
    <article>
      <header>
        <h1>{{ product.title }}</h1>

        <span class="amount">$ {{ product.price | currency('en-US') }}</span>
      </header>

      <div class="description" v-html="product.description" />

      <p class="annotate">
        Prices valid till 31.10.2019, yearly adjustment for conversion rate to
        EURO
      </p>
      <add-to-cart :id="product.id" :price="product.price" />
    </article>

    <aside
      :style="{
        backgroundImage:
          'url(' + require(`@/assets/images/product/${product.image}`) + ')'
      }"
    >
      <img :src="require(`@/assets/images/product/${product.image}`)" alt />
    </aside>
  </section>
</template>

<script>
/* eslint-disable vue/require-default-prop */
import AddProduct from '@/components/AddProduct'

export default {
  components: {
    AddToCart: AddProduct
  },
  asyncData(context) {
    const pdt = context.store.getters['product/products'].find(
      (elmt) => elmt.id === context.route.params.id
    )

    return {
      product: pdt
    }
  }
}
</script>

<style lang="scss" scoped>
section {
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  margin-top: 4rem;
  max-width: $project-inner;
  padding-left: $project-mobile-padding;
  padding-right: $project-mobile-padding;

  @include breakpoint('beyond-medium') {
    flex-direction: row;
    margin-top: 8.8rem;
    padding-left: 0;
    padding-right: 0;
  }

  article {
    box-sizing: border-box;
    order: 2;
    padding-right: 4rem;
    width: 100%;

    @include breakpoint('beyond-medium') {
      order: 1;
      width: 62%;
    }

    header {
      border-bottom: 13px solid rgba(color('highlight'), 0.1);
      padding-bottom: 1.6rem;
    }
  }
}

h1 {
  color: color('default');
  font-family: font-name('default-black');
  font-size: rem(24);
  margin: 2rem 0 0;

  @include breakpoint('beyond-medium') {
    margin: 0;
  }

  @include breakpoint('beyond-project') {
    font-size: rem(52);
  }
}

.amount {
  color: color('highlight');
  display: block;
  font-family: font-name('default');
  font-size: rem(18);
  margin-top: rem(16);
  text-transform: uppercase;

  @include breakpoint('beyond-project') {
    font-size: rem(24);
  }
}

.description,
p {
  color: color('primary');
  font-family: font-name('default-book');
  font-size: rem(16);
  margin-top: 3rem;

  @include breakpoint('beyond-project') {
    font-size: rem(18);
  }
}

.annotate {
  color: color('secondary');
}

aside {
  backgound-repeat: no-repeat;
  /* background-image: url('~/assets/images/product/product_1.jpg'); */
  background-position: center;
  background-size: cover;
  height: 15rem;
  order: 1;
  overflow: hidden;
  width: 100%;

  img {
    display: none;

    @include breakpoint('beyond-medium') {
      display: block;
    }
  }

  @include breakpoint('beyond-medium') {
    height: auto;
    order: 2;
    width: 38%;
  }

  img {
    width: 100%;
  }
}
</style>
