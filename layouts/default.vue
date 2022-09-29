<template>
  <div class="slot bg-gray">
    <!-- <UINavbar /> -->
    <UISidebar >
      <slot />
    </UISidebar>
  </div>
</template>

<style scoped>
.slot {
  min-height: 100vh;
  background-color: rgb(248, 248, 244);
  overflow: hidden;
  overflow-y: hidden;
  

}
</style>
