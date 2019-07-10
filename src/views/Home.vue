<template>
  <div class="home container-fluid p-5 ">
    <div class="row">
      <div class="col-5">
          <Task/>
      </div>
      <div class="col-6">
          <PlayBtn/>
      </div>
      <div class="col-1">
          <SideBar/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SideBar from '@/components/SideBar.vue'
import PlayBtn from '@/components/PlayBtn.vue'
import Task from '@/components/Task.vue'

export default {
  name: 'home',
  components: {
    SideBar,
    PlayBtn,
    Task
  }
}
</script>
