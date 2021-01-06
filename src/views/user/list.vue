<template>
  <List v-bind="props" />
</template>

<script>
import List from "@/components/List";
import { mapState } from "vuex";

export default {
  components: { List },
  data() {
    return {
      props: {
        title: "Danh sách người dùng",
        button: {
          label: "Tạo người dùng",
          link: "CreateUser"
        },
        action: "UpdateUser",
        fields: [
          { key: "fullname", label: "Tên đầy đủ" },
          { key: "username", label: "Tên đăng nhập" },
          { key: "date_created", label: "Ngày được tạo" },
          {
            key: "status",
            label: "Trạng thái",
            formatter: value => (value ? "Đang làm" : "Đã nghỉ")
          },
          { key: "id", label: "Thao tác" }
        ],
        items: []
      }
    };
  },
  computed: mapState({
    users: state => state.User.users
  }),
  created() {
    this.props.items = this.users;
  }
};
</script>

<style></style>
