<script setup></script>

<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-dark py-3 ">
      <div class="container-fluid">
        <NuxtLink class="nav-link active" aria-current="page" to="/"
        >Project Manager</NuxtLink
      >
        <!-- <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button> -->

  
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto mb-2 mr mb-lg-0">
            <li class="nav-item">
              <NuxtLink
                class="nav-link active"
                aria-current="page"
                to="/projects"
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
              <NuxtLink
                class="nav-link active"
                aria-current="page"
                to="/history"
                >History
                </NuxtLink
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
  </div>
</template>

<style scoped>
.mr {
  margin-left: auto;
}
.navbar{
  background-color: rgb(13, 1, 117);
}

.nav-link{
color: white;
}
</style>
