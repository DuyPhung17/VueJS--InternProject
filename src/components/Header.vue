<template>
  <!-- Home Header -->
  <div class="home-header">
    <div class="m-1 user-right" v-b-toggle.collapse-2>
      <p>
        <i class="fa fa-user-circle"></i>&nbsp; User
        <i class="fa fa-caret-down"></i>
      </p>
      <b-collapse class="drop_item" invisible id="collapse-2">
        <div>&nbsp; Hồ sơ</div>
        <router-link to="/login" tag="div"
          >&nbsp;<span @click="logout()">Thoát</span></router-link
        >
      </b-collapse>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  methods: {
    logout() {
      sessionStorage.removeItem("auth");
      this.$router.replace("/login");
    }
  }
};
</script>

<style scoped>
/* Home Header */

.home-header {
  position: fixed;
  width: 105%;
  left: -5%;
  height: 10vh;
  margin: 0px;
  text-align: right;
  padding-right: 70px;
  font-size: large;
  z-index: 4;
  box-shadow: 0 3px 6px rgba(41, 41, 41, 0.16), 0 3px 6px rgba(32, 30, 30, 0.23);
  background-color: white;
}
.drop_item {
  position: absolute;
  right: 10px;
  width: 150px !important;
  background-color: rgb(255, 251, 251);
  color: cadetblue;
  box-shadow: 0 3px 6px rgba(41, 41, 41, 0.16), 0 3px 6px rgba(32, 30, 30, 0.23);
}
.home-header .user-right {
  position: absolute;
  top: 10%;
  right: 5%;
  width: 8%;
  height: 6vh;
  line-height: 6vh;
  background-color: cadetblue;
  border-radius: 50px;
  color: white;
  text-align: center;
  z-index: 5;
}
</style>
