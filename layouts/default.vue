<template>
  <div>
    <nuxt />
  </div>
</template>

<style lang="scss">
@import '~/node_modules/normalize.css/normalize.css';
@import '@/assets/styles/_config';

html {
  font-size: $root-size/16 * 100%;
}

#__nuxt {
  font-family: font-name('default');
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
