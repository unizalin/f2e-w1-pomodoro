<template>
  <div>
    <nav class="sidebar mr-auto">
      <div class="sidebar-sticky">
        <ul class="nav flex-column mb-2">
          <li class="nav-item ">
            <router-link to="/todo" class="nav-link d-flex" href="#">
              <i class="material-icons text-white py-2 text-dark-white">list</i>
              <span data-feather="file-text " class="ml-2 text-dark-white">TO-DO LIST</span>
            </router-link>
          </li>
          <li class="nav-item ">
            <router-link to="/analytics" class="nav-link d-flex" href="#">
              <i class="material-icons text-white py-2 text-dark-white">insert_chart</i>
              <span data-feather="file-text"  class="ml-2 text-dark-white">ANALYTICS</span>
            </router-link>
          </li>
          <li class="nav-item ">
            <router-link to="/ringtones" class="nav-link d-flex" href="#">
              <i class="material-icons text-white py-2 text-dark-white">library_music</i>            
              <span  data-feather="file-text" class="ml-2 text-dark-white">RINGTONES</span>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<style lang="scss" scoped>
.nav-item span{
  font-size: 36px;
}
.text-dark-white{
  color: #ffffff33 !important;
}
</style>

