<template>
  <div class="playbtn rounded-circle my-5 align-center">
    <div class="inside_circle rounded-circle">
      <div class="click">
        <div class="play"></div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.playbtn{
  position: relative;
  width: 450px;
  height: 450px;
  border: 4px solid #FF4384;
}
.inside_circle{
  width: 400px;
  height: 400px;
  background-color: #FF4384;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
.click{
  width: 96px;
  height: 96px;
  border-radius: 50%;
   position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background-color: #fff;
  .play{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      height: 40px;
      border-style: solid;
      border-width: 20px 0 20px 30px;
      border-color: transparent transparent transparent #FF4384;
  }
}

</style>
