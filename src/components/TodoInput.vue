<template>
  <div>
    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control text-primary"
        placeholder="add a new mission…"
        v-model="text"
        @keyup.enter="submit"
      />
      <div class="input-group-prepend">
        <span
          class="input-group-text bg-white text-primary"
          id="basic-addon1"
          @click.prevent="submit"
        >+</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TodoInput',
  data(){
    return{
      text:''
    }
  },
  methods:{
    submit(){
      var value = this.text;
      if(!value){
        return 
      }
      this.$emit('input',value)
      this.text=''
    }
  }
}
</script>