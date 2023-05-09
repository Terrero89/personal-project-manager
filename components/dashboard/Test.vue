<script setup>
import { onMounted} from "vue";
import { useProjectStore } from "@/store/projects";
import { storeToRefs } from "pinia";

const projectStore = useProjectStore(); //projects store
const { fetchProjects } = projectStore;
const { projects } = storeToRefs(projectStore);



function dale(){
  for(const key in projectStore.generic()){
    console.log(key)
  console.log(projectStore.generic()[key])
}


}


dale()



onMounted(() => {
  fetchProjects();
});



const chartData = ref([
  { month: "Jan", number:1,  value: 100 },
  { month: "Feb", number:2,  value: 15 },
  { month: "Mar",number:3,  value: 20 },
  { month: "Apr",number:4,  value: 25 },
  { month: "May",number:5,  value: 30 },
  { month: "Jun",number:6,  value: 35 },
  { month: "Jul", value: 40 },
  { month: "Aug", value: 45 },
  { month: "Sep", value: 66 },
  { month: "Oct", value: 55 },
  { month: "Nov", value: 60 },
  { month: "Dec", value: 65 },
]);




</script>

<template>
 <!-- <p>{{ projectStore.kool() }}</p>
 <p>{{ projectStore.generic() }}</p> -->
  <div class="bar-chart">
   
    <div v-for="(item, i ) in projectStore.generic()" :key="item.month">
   

       <div class="label number-label">{{ item }}</div>
      <div class="bar" :style="{ height: (item*25) + 'px' }">
       
      </div>

      <div class="label">{{ i }}</div>
    </div>
  </div>
</template>

<style>
.number-label {
  /* color: white; */
  display: flex;
  justify-content: center;
}
.bar-chart {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  height: 300px;
  padding: 0 1rem;
  width: 35rem;
  border:solid rgb(192, 192, 192) 1px;
  margin: 0 auto;
  border-radius: 12px;
  box-shadow: 1px 2px 34px -3px rgba(0,0,0,0.32)
}

.bar {
  width: 10px;
  background-color: rgb(0, 140, 255);
  margin-right: 10px;
  border-radius: 3px;
}

.label {
  margin-top: 10px;
  text-align: center;
}

@media screen and (max-width: 767px) {
  .bar-chart {
    height: auto;
  }

  .bar {
    width: 15px;
    margin-right: 5px;
  }

  .label {
    font-size: 10px;
    margin-top: 5px;
    font-size: 12px;
  }
}

@media screen and (min-width: 768px) and (max-width: 991px) {
  .bar-chart {
    height: auto;
  }

  .bar {
    width: 35px;
    margin-right: 5px;
  }

  .label {
    margin-top: 5px;
    font-size: 14px;
  }
}

@media screen and (min-width: 992px) and (max-width: 1199px) {
  .bar-chart {
    height: auto;
  }

  .bar {
    width: 35px;
    margin-right: 10px;
  }

  .label {
    margin-top: 10px;
    font-size: 16px;
  }
}

@media screen and (min-width: 1200px) {
  .bar-chart {
    height: 300px;
  }

  .bar {
    width: 35px;
    margin-right: 10px;
  }

  .label {
    margin-top: 10px;
    font-size: 16px;
  }
}
</style>
