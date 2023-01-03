<template>
  <div class="container wrapper">
    <slot />
  </div>
</template>

<style scoped>
.wrapper {
  background-color: rgb(247, 247, 247);
  /* min-height:43rem; */
  padding: 1rem 1rem;
  margin: 1rem auto 3rem auto;
  border-radius: 5px;
  box-shadow: 0px 6px 40px 15px rgba(0, 0, 0, 0.05);
}
</style>
