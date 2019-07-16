<template>
  <div class="inside">
    <div class="playbtn bg-info">
      <div class="inside_circle rounded-circle">
        <div class="click">
          <div class="play"></div>
        </div>
      </div>
      <div class="inside_time">
        <div class="timer text-primary">25:00</div>
        <div class="title text-blue text-bold">the First thing to do today</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.inside {
  width: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
}

.playbtn {
  width: 100%;
  height: 175px;
  border-radius: 350px 350px 0 0;
}
.inside_circle {
  width: 100%;
  background-color: #ff4384;
  position: absolute;
  top: ０;
  left: 50%;
  transform: translate(-50%, -50%);
}
.click {
  width: 96px;
  height: 96px;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  .play {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 40px;
    border-style: solid;
    border-width: 20px 0 20px 30px;
    border-color: transparent transparent transparent #ff4384;
  }
}
.inside_time {
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  bottom: 10%;
  .timer {
    font-size: 64px;
    font-weight: bold;
  }
}
</style>
