<template>
  <div>
  <div class="input-group mb-3">
    <input type="text" class="form-control text-primary" placeholder="add a new mission…" aria-label="Username" aria-describedby="basic-addon1">
    <div class="input-group-prepend">
      <span class="input-group-text bg-white text-primary" id="basic-addon1">+</span>
    </div>
  </div> 
  <div class="timer">
    <div class="display-1 text-primary">
      25:00
    </div>
  </div> 
</div>
</template>
<script>
import TodoList from './TodoList.vue'
export default {
  component:{
    TodoList
  }
}
</script>
