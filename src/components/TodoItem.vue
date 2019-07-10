<template>
  <div>
    <li class="text-white">
        <input  type="checkbox" value="" :id="label.id" v-model="label.complete" > 
        <span class="ml-2" :class="{'completed':label.complete}">{{label.text}}</span> 
        <span class="py-1"><i class="material-icons ml-auto">play_circle_outline</i> </span>
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
  }
}
</script>
<style lang="scss" scoped>
  li{
    padding: 4px;
    border-bottom:  1px solid #ffffff66;
  }
  .completed{
    text-decoration: line-through;
  }
  .material-icons{
    font-size: 16px;
  }

</style>
