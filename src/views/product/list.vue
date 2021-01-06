<template>
  <div class="">
    <List v-bind="props" />
  </div>
</template>

<script>
import List from "@/components/List";
import { mapState } from "vuex";

export default {
  components: { List },
  data() {
    return {
      props: {
        title: "Danh sách sản phẩm",
        button: {
          label: "Tạo sản phẩm",
          link: "CreateProduct"
        },
        action: "UpdateProduct",
        fields: [
          { key: "name", label: "Tên đầy đủ" },
          { key: "date_created", label: "Ngày tạo" },
          { key: "date_updated", label: "Ngày cập nhật gần đây" },
          {
            key: "price",
            label: "Giá",
            formatter: value =>
              new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND"
              }).format(value.toString())
          },
          {
            key: "status",
            label: "Trạng thái",
            formatter: value => (value ? "Đang hoạt động" : "Không hoạt động")
          },
          { key: "id", label: "Thao tác" }
        ],
        items: []
      }
    };
  },
  computed: mapState({
    products: state => state.Product.products
  }),
  methods: {},
  created() {
    this.props.items = this.products;
  }
};
</script>

<style></style>
