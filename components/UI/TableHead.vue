<script setup>
    const props = defineProps(["headers"]);
    </script>


<template>
  <thead>
    <tr class="table-header">
      <th v-for="(header, hIndex) in props.headers" :key="hIndex">
        {{ header }}
      </th>
      
    </tr>
  </thead>
  <tbody></tbody>
</template>
