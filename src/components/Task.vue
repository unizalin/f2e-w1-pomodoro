<template>
  <div>
    <TodoInput></TodoInput>
    <div class="timer">
      <div class="display-1 text-primary">25:00</div>
    </div>
  </div>
</template>
<script>
import TodoInput from './TodoInput.vue'

export default {
  components:{
    TodoInput,
  }
}
</script>
