
<template>
  <div class="about container-fluid px-5 pt-5 bg-secondary">
    <div class="row">
      <div class="col-4">
        <LeftSideBar />
        <InsideTime />
      </div>
      <div class="col-5 mx-auto">
        <TodoList />
      </div>
      <div class="col-1">
        <RightSideBar />
      </div>
    </div>
  </div>
</template>
<script>
import TodoList from '@/components/TodoList.vue'
import LeftSideBar from '@/components/LeftSideBar.vue'
import RightSideBar from '@/components/RightSideBar.vue'
import InsideTime from '@/components/InsideTime.vue'

export default {
  components:{
    TodoList,
    LeftSideBar,
    RightSideBar,
    InsideTime
  }
}
</script>