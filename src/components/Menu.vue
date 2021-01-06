<template>
  <!---- Navbar Left ---->
  <div class="nav-left">
    <!-- Navbar-logo -->
    <div class="nav-logo" @click="$router.push('/')">
      <i class="fab fa-vuejs"></i>
      <hr />
    </div>
    <!-- Navbar-list -->
    <div>
      <div class="m-1 level1" v-b-toggle.collapse-3>
        <i class="fa fa-cog"></i>&nbsp; Cài đặt
        <i class="fa fa-caret-down"></i>
      </div>
      <b-collapse visible id="collapse-3">
        <router-link to="/" tag="div" class="level2">
          <i class="fa fa-user"></i>&nbsp; Người dùng
        </router-link>

        <router-link to="/Products" tag="div" class="level2">
          <i class="fa fa-box-open"></i>&nbsp; Sản phẩm
        </router-link>
      </b-collapse>
      <div class="level1"><i class="fa fa-tasks"></i>&nbsp; Quản lý</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style scoped>
/* Navbar Left */
.nav-left {
  position: fixed;
  top: 0;
  width: 15%;
  height: 100vh;
  background-color: cadetblue;
  color: white;
  padding: 15px;
  z-index: 1000;
}

.nav-left .nav-logo {
  font-size: 80px;
  text-align: center;
  background-color: cadetblue;
  cursor: pointer;
}

.level1,
.level2 {
  margin-bottom: 15px !important;
}
.level1:hover,
.level2:hover {
  cursor: pointer;
}

.level2 {
  margin-left: 15px;
}
</style>
