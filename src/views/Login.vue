<template>
  <!-- -------- LOGIN SCREEN ---------->
  <form class="loginForm">
    <!--Header Form-->
    <div class="form-header text-center m-3">
      <i class="fab fa-vuejs"></i>
    </div>
    <!-- Username Input -->
    <div class="form-group mt-5">
      <label><i class="fa fa-user"></i> Username</label>
      <input
        type="text"
        class="form-control"
        placeholder="Nhập tên đăng nhập"
        v-model.trim="$v.username.$model"
        :class="{
          'is-invalid': $v.username.$error,
          'is-valid': !$v.username.$invalid
        }"
      />
      <p class="invalid-feedback text-danger" v-if="!$v.username.required">
        Chưa nhập họ tên đăng nhập !
      </p>
    </div>
    <!--Password Input-->
    <div class="form-group">
      <label><i class="fa fa-lock"></i> Password</label>
      <input
        type="password"
        class="form-control"
        placeholder="Nhập mật khẩu"
        v-model.trim="$v.password.$model"
        :class="{
          'is-invalid': $v.password.$error,
          'is-valid': !$v.password.$invalid
        }"
      />
      <p class="invalid-feedback text-danger" v-if="!$v.password.required">
        Chưa nhập mật khẩu !
      </p>
    </div>
    <!--Button Submit-->
    <router-link to="/">
      <button
        type="submit"
        :disabled="submitStatus === 'PENDING'"
        class="btn btn-dark btn-block mt-4"
        @click="submit()"
      >
        Login
      </button>
    </router-link>
  </form>
</template>

<script>
import { required } from "vuelidate/lib/validators";

export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  validations: {
    username: {
      required
    },
    password: {
      required
    }
  },
  methods: {
    submit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else this.auth();
    },
    auth() {
      sessionStorage.setItem("auth", true);
      this.$router.replace("/");
    }
  }
};
</script>

<style scoped>
/* Login Screen */
.loginForm {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 350px;
  height: 470px;
  padding: 30px;
  background-color: cadetblue;
  border-radius: 10px;
  color: white;

  -webkit-box-shadow: 1px 0px 34px -9px rgb(73, 71, 73);
  -moz-box-shadow: 1px 0px 34px -9px rgb(104, 97, 104);
  box-shadow: 1px 0px 34px -9px rgb(68, 64, 68);
}

.form-header i {
  font-size: 100px;
}
</style>
