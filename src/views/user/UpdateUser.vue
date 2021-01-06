<template>
  <!---------- HOME SCREEN ---------->

  <!-- Screen Right -->

  <!-- Home Main -->
  <div class="home-main">
    <h3 class="text-green text-center">CẬP NHẬT THÔNG TIN TÀI KHOẢN</h3>
    <form action="" method="get" class="form row">
      <div class="form-group col-6">
        <label class="text-green">Tên đăng nhập</label>
        <input
          disabled
          type="text"
          class="form-control"
          placeholder="Tạo tên đăng nhập"
          v-model="username"
        />
      </div>
      <div class="col-6"></div>
      <div class="form-group col-6">
        <label class="text-green">Tên nhân viên</label>
        <input
          type="text"
          class="form-control"
          placeholder="Nhập tên"
          v-model="selected_user.fullname.firstname"
        />
      </div>
      <div class="form-group col-6">
        <label class="text-green">Họ nhân viên</label>
        <input
          type="text"
          class="form-control"
          placeholder="Nhập họ"
          v-model="selected_user.fullname.lastname"
        />
      </div>
      <div class="form-group col-6">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            id="gridCheck"
            v-model="selected_user.status"
          />
          <label class="form-check-label text-green" for="gridCheck">
            Trạng thái
          </label>
        </div>
      </div>
      <div class="form-group col-6">
        <router-link to="/">
          <button class="btn btn-green" @click="UPDATE_USER(upd_user)">
            Cập nhật
          </button>
          <button class="btn btn-green">Hủy</button>
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapState, mapMutations} = createNamespacedHelpers('User');

export default {
  props: {
    id: Number
  },
  created() {
    console.log(this.selected_user);
    this.GET_USER(this.id);
  },
  computed: {
    ...mapState(["selected_user"]),
    username() {
      return this.selected_user.username;
    },
    firstname() {
      return this.selected_user.fullname.firstname;
    },
    lastname() {
      return this.selected_user.fullname.lastname;
    },
    status() {
      return this.selected_user.status;
    },
    upd_user() {
      return {
        fullname: { firstname: this.firstname, lastname: this.lastname },
        status: this.status
      };
    }
  },
  methods: {
    ...mapMutations(["GET_USER", "UPDATE_USER"])
  }
};
</script>

<style scoped>
/* Home Header */
.home-main {
  background-color: white;
  padding: 20px;
  margin: 100px 40px 5px 30px;
  border-radius: 10px;
  box-shadow: 0 3px 6px rgba(41, 41, 41, 0.16), 0 3px 6px rgba(32, 30, 30, 0.23);
}

.home-main-search {
  width: 90%;
  margin: 30px;
  display: flex;
  justify-content: space-between;
}

.home-main-table {
  width: 90%;
  margin: 30px;
}

.home-main-footer {
  width: 90%;
  margin: 30px;
  display: flex;
  justify-content: space-between;
}

.btn {
  margin-right: 10px;
}
</style>
