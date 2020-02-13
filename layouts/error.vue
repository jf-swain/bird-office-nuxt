<template>
  <div class="error-page">
    <h1>Oops, something went wrong!</h1>
    <p>Back to <a href="/">safety</a>!</p>
  </div>
</template>

<style lang="scss" scoped>
.error-page {
  margin-top: 3rem;
  text-align: center;
}

h1 {
  color: color('highlight');
  font-size: rem(18);
}

p {
  font-size: rem(14);
}

a {
  color: color('highlight');
}
</style>
