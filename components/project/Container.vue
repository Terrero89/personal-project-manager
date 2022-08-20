<script setup></script>

<template>
  <div class="projects">
    <div class="container wrapper">
      <div class="row">
        <div class="col-8">
          <div class="project-item">
            <p>id: 1</p>
            <h2>Project: Web Development</h2>
            <p>
              Project description: Lorem ipsum dolor sit amet. Lorem, ipsum
              dolor sit amet consectetur adipisicing.
            </p>
            <p>Status: Completed</p>

            <div class="button-status">
              <button type="button" class="btn-sm btn btn-outline-primary mr">
                Details
              </button>
              <button type="button" class="btn-sm btn btn-primary">
                Update
              </button>
              <button type="button" class="btn-sm btn btn-danger">X</button>
            </div>
          </div>

          <div class="project-item">
            <p>id: 1</p>
            <h2>Project: Python Game</h2>
            <p>
              Project description: Lorem ipsum dolor sit amet. Lorem, ipsum
              dolor sit amet consectetur adipisicing.
            </p>
            <p>Status: Completed</p>

            <div class="button-status">
              <button type="button" class="btn-sm btn btn-outline-primary mr">
                Details
              </button>
              <button type="button" class="btn-sm btn btn-primary">
                Update
              </button>
              <button type="button" class="btn-sm btn btn-danger">X</button>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="actions-section">
            <h3>Actions Section</h3>
            <div class="actions">
              <h3>Project added</h3>
              <p>Date: 7/7/22</p>
            </div>
            <div class="actions">
              <h3>Project added</h3>
              <p>Date: 7/7/22</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.projects {
  display: flex;
  justify-content: center;
}
.project-item {
  border: solid red 1px;
  border-radius: 0.5rem;
  padding: 1rem;
  margin: 0.5rem 0;
}
.button-status {
  margin-left: auto;
}

.wrapper {
  border: solid rgb(0, 81, 255) 1px;
  padding: 2rem;
}

.actions {
  border: solid red 1px;
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  margin: 0.5rem 0;
}
</style>
