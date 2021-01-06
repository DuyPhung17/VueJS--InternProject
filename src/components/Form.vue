<template>
  <!---------- HOME SCREEN ---------->

  <!-- Screen Right -->

  <!-- Home Main -->
  <div class="home-main">
    <h3 class="text-green text-center">{{ title }}</h3>
    <form class="form row" method="">
      <div class="col-6" v-for="(field, index) in fields" :key="field.index">
        <div class="form-group">
          <label class="text-green">{{ field.label }}</label>
          <input
            type="text"
            class="form-control"
            :placeholder="'Nhập ' + field.label.toLowerCase()"
            v-model.trim="$v.fields.$each[index].data.$model"
            :class="{
              'is-invalid': $v.fields.$each[index].data.$error,
              'is-valid': !$v.fields.$each[index].data.$invalid,
            }"
          />
          <p
            class="invalid-feedback text-danger"
            v-if="!$v.fields.$each[index].data.required"
          >
            Chưa nhập {{ field.label.toLowerCase() }} !
          </p>
        </div>
      </div>

      <div class="form-group col-6">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            id="gridCheck"
            v-model="status"
          />
          <label class="form-check-label text-green" for="gridCheck">
            Trạng thái
          </label>
        </div>
      </div>
      <div class="form-group col-6">
        <router-link :to="'/' + page">
          <button class="btn btn-green" @click="passData()">
            Tạo
          </button>
          <button class="btn btn-green">Hủy</button>
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
export default {
  props: {
    title: String,
    fields: Array,
    page: String
  },
  validations: {
    fields: {
      $each: { data: { required } },
    },
  },
  data() {
    return {
      date: new Date(),
      status: false,
    };
  },
  computed: {
    dataPass() {
      let arr = [];
      for (const field of this.fields) 
        arr.push(field.data);
      arr.push(this.status);
      return arr;
      // return {
      //   dataArr: this.fields,
      //   status: this.status,
      // };
    },
  },
  methods: {
    passData() {
      this.$emit("passData", this.dataPass);
    },
  },
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
