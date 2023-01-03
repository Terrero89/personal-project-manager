<script setup>
//   <UIWarningModal v-show="showModal" @close-modal="showModal = false"/>
const emit = defineEmits(["close-modal", "deleteHandler"]);
const props = defineProps(["deletedId"]);

const modalHandler = (() => { 
    emit("close-modal");
    emit('deleteHandler = false')
})
</script>

<template>
  <div class="modal-overlay">
    <div class="item mx-0 my-auto mx-3">
      <div class="px-5">
        <h6>WARNING!</h6>
        <p>
          All Tasks under this project must be deleted or completed to delete
          project. Would you like to proceed?
        </p>
        <button
          type="button"
          class="btn btn-danger"
          @click="$emit('deleteHandler')"
        >
          Delete
        </button>
        <button
          type="button"
          class="btn btn-outline-danger text-dark mx-2"
          @click="$emit('close-modal')"
        >
          Close
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
  z-index: 99;
}

.modal {
  text-align: center;
  background-color: rgb(255, 255, 255);
  height: 500px;
  width: 500px;
  margin-top: 10%;
  padding: 60px 0;
  border-radius: 20px;
  z-index: 1000;
  border: solid red 1px;
}
.close {
  margin: 10% 0 0 16px;
  cursor: pointer;
}

.item {
  width: 35rem;
  padding: 1rem;
  display: flex;

  background-color: rgb(255, 255, 255, 0.8);
  border-radius: 10px;
}

.close-img {
  width: 25px;
}

/* .check {
  width: 150px;
  z-index: 100;
} */

h6 {
  font-weight: 500;
  font-size: 28px;
  margin: 20px 0;
}

p {
  font-size: 16px;
  margin: 20px 0;
}

/* button {
  background-color: #ff005d;
  width: 150px;
  height: 40px;
  color: white;
  font-size: 14px;
  border-radius: 8px;
  margin-top: 50px;
  display:inline-block;
} */
</style>
