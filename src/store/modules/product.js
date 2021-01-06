export default {
  state: {
    selected_product: {},
    products: [
      {
        id: 0,
        name: "Táo",
        date_created: "21/12/2020 7:01:01 AM",
        date_updated: "21/12/2020 7:01:01 AM",
        price: 50000,
        status: false
      },
      {
        id: 1,
        name: "Nho",
        date_created: "21/12/2020 7:01:01 AM",
        date_updated: "21/12/2020 7:01:01 AM",
        price: 50000,
        status: true
      },
      {
        id: 2,
        name: "Cam",
        date_created: "21/12/2020 7:01:01 AM",
        date_updated: "21/12/2020 7:01:01 AM",
        price: 50000,
        status: true
      },
      {
        id: 3,
        name: "Ổi",
        date_created: "21/12/2020 7:01:01 AM",
        date_updated: "21/12/2020 7:01:01 AM",
        price: 50000,
        status: false
      },
      {
        id: 4,
        name: "Quýt",
        date_created: "21/12/2020 7:01:01 AM",
        date_updated: "21/12/2020 7:01:01 AM",
        price: 50000,
        status: true
      }
      // {
      //   id: 5,
      //   name: "Cam",
      //   date_created: "21/12/2020 7:01:01 AM",
      //   date_updated: "21/12/2020 7:01:01 AM",
      //   price: 50000,
      //   status: true,
      // },
      // {
      //   id: 6,
      //   name: "Táo",
      //   date_created: "21/12/2020 7:01:01 AM",
      //   date_updated: "21/12/2020 7:01:01 AM",
      //   price: 50000,
      //   status: false,
      // },
      // {
      //   id: 7,
      //   name: "Nho",
      //   date_created: "21/12/2020 7:01:01 AM",
      //   date_updated: "21/12/2020 7:01:01 AM",
      //   price: 50000,
      //   status: true,
      // },
      // {
      //   id: 8,
      //   name: "Cam",
      //   date_created: "21/12/2020 7:01:01 AM",
      //   date_updated: "21/12/2020 7:01:01 AM",
      //   price: 50000,
      //   status: true,
      // },
      // {
      //   id: 9,
      //   name: "Táo",
      //   date_created: "21/12/2020 7:01:01 AM",
      //   date_updated: "21/12/2020 7:01:01 AM",
      //   price: 50000,
      //   status: false,
      // },
      // {
      //   id: 10,
      //   name: "Nho",
      //   date_created: "21/12/2020 7:01:01 AM",
      //   date_updated: "21/12/2020 7:01:01 AM",
      //   price: 50000,
      //   status: true,
      // },
      // {
      //   id: 11,
      //   name: "Cam",
      //   date_created: "21/12/2020 7:01:01 AM",
      //   date_updated: "21/12/2020 7:01:01 AM",
      //   price: 50000,
      //   status: true,
      // },
    ]
  },
  mutations: {
    CREATE_PRODUCT(state, new_product) {
      state.products.push(new_product);
    },
    GET_PRODUCT(state, id) {
      state.selected_product = state.products.find(prod => prod.id == id);
    },
    UPDATE_PRODUCT(state, upd_product) {
      let product = state.products.find(prod => prod.id == upd_product.id);
      product.price = upd_product.price;
      product.status = upd_product.status;
      product.date_updated = upd_product.date_updated;
    }
  },
  actions: {},
  getters: {
    getProductById: state => id => {
      return state.products.find(product => product.id == id);
    },
    getLastIdProduct(state) {
      return state.products[state.products.length - 1].id;
    }
  },
  namespaced: true
};
