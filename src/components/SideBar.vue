<template>
  <div>
    <nav class="sidebar">
      <div class="sidebar-sticky">
        <ul class="nav flex-column mb-2">
          <li class="nav-item">
            <i class="material-icons text-white ">list</i>
            <router-link to="/todolist" class="nav-link" href="#">
              <!-- <span data-feather="file-text">to-do list</span> -->
            </router-link>
          </li>
          <li class="nav-item">
            <i class="material-icons text-white">insert_chart</i>
            <router-link to="/analytics" class="nav-link" href="#">
              <!-- <span data-feather="file-text">analytics</span> -->
            </router-link>
          </li>
          <li class="nav-item">
              <i class="material-icons text-white">library_music</i>            
              <router-link to="/ringtones" class="nav-link" href="#">
              <!-- <span data-feather="file-text">ringtones</span> -->
            </router-link>
          </li>
          <li class="nav-item ">
            <span class='nav-text text-white h4'>POMODORO</span>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
