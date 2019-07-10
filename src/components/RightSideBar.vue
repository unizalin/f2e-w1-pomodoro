<template>
  <div class="RightSideBar">
    <router-link to="/" href="#">
      <div class="close-container">
        <div class="leftright"></div>
        <div class="rightleft"></div>
        <label class="close">close</label>
      </div>
    </router-link>          
    <span class='nav-text text-white'>POMODORO</span>
  </div>
</template>
<style lang="scss" scoped>
$softorange: #F4A259;
$tomatored: #F25C66;
$mediumblu: #1E272D;
.RightSideBar{
  position: relative;
  height: 100vh;
}
.nav-text{
  position: absolute;
  bottom: 10%;
  font-size: 36px;
}
.text-dark-white{
  color: #ffffff33 !important;
}
.close-container{
  position: relative;
  width: 48px;
  height: 48px;
  cursor: pointer;
}

.leftright{
  height: 4px;
  width: 48px;
  position: absolute;
  margin-top: 24px;
  background-color: $softorange;
  border-radius: 2px;
  transform: rotate(45deg);
  transition: all .3s ease-in;
}

.rightleft{
  height: 4px;
  width: 48px;
  position: absolute;
  margin-top: 24px;
  background-color: $softorange;
  border-radius: 2px;
  transform: rotate(-45deg);
  transition: all .3s ease-in;
}

label{
  color: white;
  font-family: Helvetica, Arial, sans-serif; 
  font-size: .6em;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: all .3s ease-in;
  opacity: 0;
}
.close{
  margin: 60px 0 0 5px;
  position: absolute;
}

.close-container:hover .leftright{
  transform: rotate(-45deg);
  background-color: $tomatored;
}
.close-container:hover .rightleft{
  transform: rotate(45deg);
  background-color: $tomatored;
}
.close-container:hover label{
  opacity: 1;
}

</style>

