<template>
  <!---------- HOME SCREEN ---------->
  <!-- Home Main -->
  <div class="home-main">
    <h3 class="text-green text-center mb-4">CẬP NHẬT THÔNG TIN SẢN PHẨM</h3>
    <form action="" method="get" class="form row">
      <div class="form-group col-6">
        <label class="text-green">Tên sản phẩm</label>
        <input
          type="text"
          disabled
          class="form-control"
          placeholder="Nhập tên sản phẩm"
          v-model="selected_product.name"
        />
      </div>
      <div class="form-group col-6">
        <label class="text-green">Giá sản phẩm</label>
        <input
          type="number"
          class="form-control"
          placeholder="Nhập giá sản phẩm"
          v-model="selected_product.price"
        />
      </div>
      <div class="form-group col-6">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            id="gridCheck"
            v-model="selected_product.status"
          />
          <label class="form-check-label text-green" for="gridCheck">
            Trạng thái
          </label>
        </div>
      </div>
      <div class="form-group col-6">
        <router-link to="/Products">
          <button class="btn btn-green" @click="UPDATE_PRODUCT(upd_product)">
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
const { mapState, mapMutations } = createNamespacedHelpers('Product');

export default {
  data() {
    return {
      date: new Date()
    };
  },
  props: {
    id: Number
  },
  created() {
    this.GET_PRODUCT(this.id);
  },
  computed: {
    ...mapState(["selected_product"]),
    name() {
      return this.selected_product.name;
    },
    price() {
      return this.selected_product.price;
    },
    status() {
      return this.selected_product.status;
    },
    upd_product() {
      return {
        price: this.price,
        status: this.status,
        date_updated: this.formatDate(this.date)
      };
    }
  },
  methods: {
    ...mapMutations(["GET_PRODUCT", "UPDATE_PRODUCT"]),
    formatDate(dateVal) {
      var newDate = new Date(dateVal);

      var sMonth = this.padValue(newDate.getMonth() + 1);
      var sDay = this.padValue(newDate.getDate());
      var sYear = newDate.getFullYear();
      var sHour = newDate.getHours();
      var sMinute = this.padValue(newDate.getMinutes());
      var sSecond = this.padValue(newDate.getSeconds());
      var sAMPM = "AM";

      var iHourCheck = parseInt(sHour);

      if (iHourCheck > 12) {
        sAMPM = "PM";
        sHour = iHourCheck - 12;
      } else if (iHourCheck === 0) {
        sHour = "12";
      }

      sHour = this.padValue(sHour);

      return (
        sDay +
        "/" +
        sMonth +
        "/" +
        sYear +
        " " +
        sHour +
        ":" +
        sMinute +
        ":" +
        sSecond +
        " " +
        sAMPM
      );
    },
    padValue(value) {
      return value < 10 ? "0" + value : value;
    }
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
