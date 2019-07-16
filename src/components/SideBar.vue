<template>
  <div>
    <nav class="sidebar">
      <div class="sidebar-sticky">
        <ul class="nav flex-column mb-2">
          <li class="nav-item">
            <router-link to="/todo" class="nav-link" href="#">
              <i class="material-icons text-white">list</i>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/analytics" class="nav-link" href="#">
              <i class="material-icons text-white">insert_chart</i>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/ringtones" class="nav-link" href="#">
              <i class="material-icons text-white">library_music</i>
            </router-link>
          </li>
          <li class="nav-item">
            <span class="nav-text text-white h4">POMODORO</span>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
