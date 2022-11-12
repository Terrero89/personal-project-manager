<template>
<div class="container wrapper ">
<slot />


</div>

</template>

<style scoped>
.wrapper {
/*     
  border: solid rgb(220, 220, 220) 1px; */
  background-color: rgb(247, 247, 247);
  padding: 2rem 1rem ;
  margin:2rem auto;
  border-radius: 5px;
  box-shadow: 0px 6px 40px 15px rgba(0, 0, 0, 0.05);
}
</style>
