<template>
  <div class="">
    <CompForm v-bind="props" @passData="getData" />
  </div>
</template>

<script>
import CompForm from "@/components/Form";
import { required } from "vuelidate/lib/validators";
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapMutations } = createNamespacedHelpers("User");

export default {
  components: { CompForm },
  data() {
    return {
      props: {
        title: "TẠO NGƯỜI DÙNG",
        page: "",
        fields: [
          { label: "Tên đăng nhập", data: "" },
          { label: "Họ nhân viên", data: "" },
          { label: "Tên nhân viên", data: "" },
        ],
      },
      dataGet: [],
      date: new Date(),
    };
  },
  validations: {
    firstname: {
      required,
    },
    lastname: {
      required,
    },
    username: {
      required,
    },
  },
  methods: {
    ...mapMutations(["CREATE_USER"]),
    getData(dataPass) {
      this.dataGet = dataPass;
      this.CREATE_USER(this.new_user);
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
    // ...mapState(["users"]),
    ...mapGetters(["getLastIdUser"]),
    new_user() {
      return {
        id: this.getLastIdUser + 1,
        fullname: {
          firstname: this.dataGet[1],
          lastname: this.dataGet[2],
        },
        username: this.dataGet[0],
        date_created: this.formatDate(this.date),
        status: this.dataGet[3]
      };
    },
  },
};
</script>

<style></style>
