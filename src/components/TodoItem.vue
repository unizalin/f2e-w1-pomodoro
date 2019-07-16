<template>
  <div>
    <li class="text-white d-flex justify-content-between" :id="label.id">
      <i
        class="far"
        :class="{'fa-check-circle':label.complete,'fa-circle':!label.complete}"
        @click="clickComplete"
      ></i>
      <span class="ml-2" :class="{'completed':label.complete}">{{label.text}}</span>
      <span>
        <i class="material-icons ml-auto">play_circle_outline</i>
      </span>
    </li>
  </div>
</template>
<script>
export default {
  name: 'TodoItem',
  props:  ['label'],
  data(){
    return{
      test:false
    }
  },
  methods:{
    clickComplete(){
      this.label.complete=!this.label.complete
    }
  }
}
</script>
<style lang="scss" scoped>
li {
  padding: 4px;
  border-bottom: 1px solid #ffffff66;
}
.completed {
  text-decoration: line-through;
}
.material-icons {
  font-size: 16px;
}
</style>
