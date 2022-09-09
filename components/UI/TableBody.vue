<script setup>
const props = defineProps(["content", "headers2"]);
</script>

<template>
  <tbody>
    <tr
      class="table-content"
      v-for="(project, pIndex) in props.content"
      :key="pIndex"
    >
      <td v-for="(header, hIndex) in props.headers2" :key="hIndex">
        {{ project[header]}}
      </td>
    </tr>
  </tbody>
  <tbody></tbody>
</template>
