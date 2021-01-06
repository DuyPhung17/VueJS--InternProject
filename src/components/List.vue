<template>
  <div class="home-main">
    <!-- Home Main Header -->
    <div class="home-main-header">
      <h3 class="text-green">{{ title }}</h3>
      <a class="btn btn-green" @click="$router.push(button.link)">{{
        button.label
      }}</a>
    </div>

    <div class="home-main-input">
      <b-form-group>
        <b-form-select
          id="per-page-select"
          v-model="perPage"
          :options="pageOptions"
          size="sm"
        ></b-form-select>
      </b-form-group>

      <b-form-group>
        <b-input-group size="sm">
          <b-form-input
            id="filter-input"
            v-model="filter"
            type="search"
            placeholder="Tìm kiếm"
          ></b-form-input>

          <b-input-group-append>
            <b-button :disabled="!filter" @click="filter = ''">Xóa</b-button>
          </b-input-group-append>
        </b-input-group>
      </b-form-group>
    </div>

    <!-- Home Main Table -->
    <b-table
      class="home-main-table"
      head-variant="dark"
      hover
      :items="items"
      :fields="fields"
      :current-page="currentPage"
      :per-page="perPage"
      :filter="filter"
    >
      <template #cell(fullname)="data">
        {{ data.value.firstname }} {{ data.value.lastname }}
      </template>

      <template #cell(id)="data">
        <router-link :to="{ name: action, params: { id: data.value } }">
          <b-button class="mr-2 btn-invis text-center text-green">
            <i class="fa fa-edit"></i>
          </b-button>
        </router-link>
      </template>
    </b-table>

    <!-- Home Main Footer -->
    <div class="home-main-footer">
      <p>{{ currentPage }} - {{ totalRows }} / Tổng số {{ totalRows }}</p>
      <b-pagination
        v-model="currentPage"
        :total-rows="totalRows"
        :per-page="perPage"
        align="fill"
        size="sm"
        class="my-0"
      ></b-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "List",
  props: {
    title: { type: String },
    button: { type: Object },
    action: { type: String },
    fields: { type: Array },
    items: { type: Array }
  },
  data() {
    return {
      totalRows: 1,
      currentPage: 1,
      perPage: 5,
      pageOptions: [5, 10, 20],
      filter: null
    };
  },
  mounted() {
    this.totalRows = this.items.length;
  }
};
</script>

<style scoped>
.home-main-header {
  display: flex;
  justify-content: space-between;
}

.home-main {
  position: relative;
  width: 90%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 4%);
  background-color: white;
  padding: 20px;
  margin: 50px 0px;
  border-radius: 10px;
  box-shadow: 0 3px 6px rgba(41, 41, 41, 0.16), 0 3px 6px rgba(32, 30, 30, 0.23);
}

.home-main-input {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}

.home-main-table {
  margin-top: 20px;
}

.home-main-footer {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}
</style>
