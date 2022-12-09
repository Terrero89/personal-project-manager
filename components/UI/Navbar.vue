<script setup></script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark py-3">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">Project Manager</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto mb-2 mr mb-lg-0">
          <li class="nav-item">
            <NuxtLink class="nav-link active" aria-current="page" to="/projects"
              >Projects</NuxtLink
            >
          </li>
          <li class="nav-item">
            <NuxtLink
              class="nav-link active"
              aria-current="tasks-page"
              to="/taskspage"
              >Tasks</NuxtLink
            >
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link active" aria-current="page" to="/history"
              >History</NuxtLink
            >
          </li>

          <li class="nav-item">
            <NuxtLink
              class="nav-link active"
              aria-current="dashboard-page"
              to="/dashboard"
              >Dashboard</NuxtLink
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.mr {
  margin-left: auto;
}
</style>
