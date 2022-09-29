<template>
  <div class="container-fluid">
    <div class="row flex-nowrap">
      <div
        class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 shadow-lg p-3 bg-dark text-dark"
      >
        <div
          class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100"
        >
          <a
            href="/"
            class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
          >
            <span class="fs-5 d-none d-sm-inline">Project Manager</span>
          </a>

          <ul
            class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
            id="menu"
          >
            <li class="nav-item">
              <a href="/projects" class="nav-link align-middle px-0">
                <i class="fs-4 bi-house"></i>
                <span class="ms-1 d-none d-sm-inline">Projects</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="/tasksPage" class="nav-link align-middle px-0">
                <i class="fs-4 bi-house"></i>
                <span class="ms-1 d-none d-sm-inline">Tasks</span>
              </a>
            </li>

            <li class="w-100">
              <a href="/actions" class="nav-link px-0">
                <span class="d-none d-sm-inline">Actions</span>
              </a>
            </li>
            <li>
              <a href="/history" class="nav-link px-0">
                <span class="d-none d-sm-inline">History</span>
              </a>
            </li>
            <li>
              <a href="/" class="nav-link px-0">
                <span class="d-none d-sm-inline">Dashboard</span>
              </a>
            </li>
          </ul>
          <hr />
        </div>
      </div>
      <div class="col py-3">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
