//should show all tasks details for specific task
<template>
  <div>
    <h3>TASKS ID</h3>
    <div>
      <h2>specific task id ->{{ $route.params.detail }}</h2>
    </div>
    <h2>parent project params-> {{ $route.params.projectId }}</h2>
    <TaskList />
  </div>
</template>

<script></script>

//should sow all task for one project

<style scoped>
.task-list {
  max-width: 1500px;
  margin: 0 auto;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;

  /* border: 1px solid #ddd; */
}

th,
td {
  padding: 1.6rem 1rem;
  font-size: 1.2rem;
}
td {
  padding: 2rem 1rem;
  font-size: 1.3rem;
}

.table-header {
  border: solid rgb(187, 187, 187) 1px;
  color: rgb(63, 63, 63);
  text-transform: uppercase;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(100, 100, 255, 1) 0%,
    rgba(42, 168, 194, 0.4) 0%
  );
}

.table-content {
  color: rgb(84, 84, 84);
  padding: 2rem;
  background-color: white;
}
</style>
