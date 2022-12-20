<script setup></script>

<template>
  <div class="dashboard-item my-5">
    <div class="dashboard-info m-3">
      <h5 class="my-3">Projects</h5>
      <div class="item d-flex justify-content-between">
        <div class="title">Total</div>
        <span class="fs-2 fw-bolder"> {{ total }} </span>
      </div>

      <div class="item d-flex justify-content-between">
        <div class="title">Completed</div>
        <span class="digit text-primary fw-bold"> {{ successAverage }}%</span>
      </div>

      <div class="item d-flex justify-content-between">
        <div class="title">In Progress</div>
        <span class="digit text-danger fw-bold"> {{ inProgressAvg }}%</span>
      </div>
      <div class="item d-flex justify-content-between">
        <div class="title">Completion success</div>
        <span class="digit text-success fw-bold">
          {{ projectCompletionSuccess }}%</span
        >
      </div>

      <div class="item d-flex justify-content-between">
        <div class="title">Completion average</div>
        <span class="digit fw-bold badge rounded-pill bg-info text-dark px-2"
          >{{ averageDays }} Days
        </span>
      </div>
    </div>
  </div>
</template>
