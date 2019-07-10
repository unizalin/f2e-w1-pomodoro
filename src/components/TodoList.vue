<template>
  <div>
      <TodoInput @input="addTodo"> </TodoInput>
      <div class="todo d-flex justify-content-between mt-4 mb-2">
        <span class="h4 text-white m-0">TO-DO</span><span class="triangle_up "></span>
      </div>
    <ul>
      <TodoItem v-for="(todo,idx) in filterTodos" :label="todo" :key="idx"></TodoItem>
    </ul>
      <div class="todo d-flex justify-content-between mt-4 mb-2">
        <span class="h4 text-white m-0">DONE</span><span class="triangle_up "></span>
      </div>
      <ul>
        <TodoItem v-for="(todo,idx) in doneTodos" :label="todo" :key="idx"></TodoItem>
      </ul>
  </div>
</template>

<script>
import TodoInput  from './TodoInput.vue'
import TodoItem  from './TodoItem.vue'

export default {
  name:'TodoList',
  components:{
    TodoInput,
    TodoItem
  },
  data(){
    return{
      todos:[
        {id:'1',text:'the First thing to do today',complete:false},
        {id:'2',text:'the Second thing to do today',complete:false},
        {id:'3',text:'the Third thing to do today',complete:false}
      ]
    }
  },
  methods:{
    addTodo(text){
      var timestamp = Math.floor(Date.now());
      this.todos.push(
        {id:timestamp,text,complete:false}
        )
    }
  },
  computed:{
    filterTodos(){
      let newTodos=[];
      this.todos.forEach((item)=>{
        if(!item.complete){
          newTodos.push(item)
        }
      })
      return newTodos
    },
    doneTodos(){
      let newTodos=[];
      this.todos.forEach((item)=>{
        if(item.complete){
          newTodos.push(item)
        }
      })
      return newTodos
    }
  }
}
</script>
<style lang="scss" scoped>
.todo{
  padding: 8px;
  background-color: #ffffff66;
  .triangle_down{
    cursor: pointer;
    margin-top: 8px;
    width:0;
    height:0;
    border-width:8px 8px 0;
    border-style:solid;
    border-color:#fff transparent transparent ;/* 红 透明 透明 */
  }
  .triangle_up{
    cursor: pointer;
    margin-top: 8px;
    width:0;
    height:0;
    border-width:0 8px 8px ;
    border-style:solid;
    border-color: transparent transparent #fff;/* 红 透明 透明 */
  }
}
</style>
