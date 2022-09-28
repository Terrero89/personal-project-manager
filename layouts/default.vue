<template>
  <div class="slot">
    <UINavbar />
    <slot />
  </div>
</template>

<style scoped>
.slot {
  min-height: 100vh;
  background-color: rgb(248, 244, 244);
}


</style>
