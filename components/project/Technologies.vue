<script setup>
const props = defineProps(["technologies", "type"]);
const techTypes = computed(() => {
  if (
    props.technologies === "React Js" ||
    props.technologies === "Vue js" ||
    props.technologies === "javascript" ||
    props.technologies === "Html" ||
    props.technologies === "CSS" ||
    props.technologies === "Tailwind" ||
    props.technologies === "Bootstrap" ||
    props.technologies === "Bulma"
  ) {
    return "frontend";
  }

  if (
    props.technologies === "Python" ||
    props.technologies === "C" ||
    props.technologies === "C++" ||
    props.technologies === "Mysql" ||
    props.technologies === "Node/Express Js" ||
    props.technologies === "Flask" ||
    props.technologies === "Django" ||
    props.technologies === "Java" ||
    props.technologies === "Firebase"
  ) {
    return "backend";
  }
  if (props.technologies === "Next Js" || props.technologies === "Nuxt js") {
    return "fullStack";
  }
});
</script>

<template>
  
    <span class="mar " :class="techTypes" >
      {{technologies}}
    </span>

</template>
<style scoped>

.test{
    display: flex;
}
.mar {
  margin-right: 0.6rem;
}
.fullStack {
  color: rgb(7, 121, 3);
}
.frontend {
  color: rgb(1, 99, 228);
}

.backend {
  color: rgb(50, 2, 126);
}
</style>
