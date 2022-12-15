<template>
  <div>
    <h3>DASHBOARD PAGE</h3>
    <div class="dashboard">
      <div class="dash-border">
        <div class="dashboard-item">
          <div class="project-info">
            <h5>Projects</h5>
            <p>project completed <span> 25%</span></p>
            <p>project in progress<span> 28%</span></p>
            <p>project due<span> 5%</span></p>
            <p>Completion average<span> 16 Days</span></p>
            <p>Total Projects<span> 18 </span></p>
          </div>
        </div>
        <div class="dashboard-item">
          <h5>Tasks</h5>
          <p>Tasks completed <span> 25%</span></p>
          <p>Tasks in progress<span> 28%</span></p>
          <p>Tasks due<span> 5%</span></p>
          <p>Completion average<span> 2 Days</span></p>
          <p>Total Tasks<span> 18 </span></p>
        </div>
        <div class="dashboard-item">
          <h5>Actions</h5>
          <p>Total Actions<span> 25%</span></p>
          <p>Delete Actions<span> 28%</span></p>
          <p>Update Actions<span> 5%</span></p>
          <p>Add Actions<span> 25</span></p>
          <p>Total Actions<span> 45 </span></p>
        </div>
        <div class="dashboard-item">
          <h5>History</h5>
          <p>Total Actions<span> 25%</span></p>
          <p>Delete Actions<span> 28%</span></p>
          <p>Update Actions<span> 5%</span></p>
          <p>Add Actions<span> 25</span></p>
          <p>Total Actions<span> 45 </span></p>
        </div>
        <div class="dashboard-item">5</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dashboard {
  min-height: 40vh;
}

.dash-border {
  border: solid red 1px;
  min-height: 90vh;
  display: flex;
  flex-wrap: wrap;
 justify-content: center;
 align-items: center;
 
}

.dashboard-item {
  border: solid rgb(7, 55, 117,0.3) 1px;
  width: 30%;
  height: 20rem;
  margin: auto 0.5rem;
  border-radius: 10px;
  /* padding: 2rem 1rem; */
  align-items: center;
}

@media screen and (max-width: 768px) {
    .dashboard-item {
  width: 90%;

 
}
}
</style>
