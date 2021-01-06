<template>
  <div class="">
    <CompForm v-bind="props" @passData="getData" />
  </div>
</template>

<script>
import CompForm from "@/components/Form";
import { required, minLength, minValue } from "vuelidate/lib/validators";
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapState, mapMutations } = createNamespacedHelpers(
  "Product"
);

export default {
  components: { CompForm },
  data() {
    return {
      props: {
        title: "TẠO SẢN PHẨM",
        page: "Products",
        fields: [
          { label: "Tên sản phẩm", data: "" },
          { label: "Giá sản phẩm", data: "" },
        ],
      },
      dataGet: [],
      date: new Date(),
    };
  },
  validations: {
    name: {
      required,
      minLength: minLength(3),
    },
    price: {
      required,
      minValue: minValue(1000),
    },
  },
  methods: {
    ...mapMutations(["CREATE_PRODUCT"]),
    getData(dataPass) {
      this.dataGet = dataPass;
      this.CREATE_PRODUCT(this.new_product);
    },
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
    },
  },
  computed: {
    ...mapState(["products"]),
    ...mapGetters(["getLastIdProduct"]),
    formatMoney() {
      return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(this.price.toString());
    },
    new_product() {
      return {
        id: this.getLastIdProduct,
        name: this.dataGet[0],
        date_created: this.formatDate(this.date),
        date_updated: this.formatDate(this.date),
        price: this.dataGet[1],
        status: this.dataGet[2]
      };
    },
  },
};
</script>

<style></style>
