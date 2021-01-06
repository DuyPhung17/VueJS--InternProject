export default {
  state: {
    selected_user: {},
    users: [
      {
        id: 0,
        fullname: { firstname: "Phùng", lastname: "Duy" },
        username: "duy",
        date_created: "21/12/2020 7:01:01 AM",
        status: true
      },
      {
        id: 1,
        fullname: { firstname: "Nguyễn", lastname: "Tuấn" },
        username: "tuan",
        date_created: "21/12/2020 7:01:01 AM",
        status: true
      },
      {
        id: 2,
        fullname: { firstname: "Trần", lastname: "Hiếu" },
        username: "hieu",
        date_created: "21/12/2020 7:01:01 AM",
        status: false
      },
      {
        id: 3,
        fullname: { firstname: "Phùng", lastname: "Duy" },
        username: "duy",
        date_created: "21/12/2020 7:01:01 AM",
        status: true
      },
      {
        id: 4,
        fullname: { firstname: "Nguyễn", lastname: "Tuấn" },
        username: "tuan",
        date_created: "21/12/2020 7:01:01 AM",
        status: true
      },
      {
        id: 5,
        fullname: { firstname: "Trần", lastname: "Hiếu" },
        username: "hieu",
        date_created: "21/12/2020 7:01:01 AM",
        status: false
      },
      {
        id: 6,
        fullname: { firstname: "Phùng", lastname: "Duy" },
        username: "duy",
        date_created: "21/12/2020 7:01:01 AM",
        status: true
      },
      {
        id: 7,
        fullname: { firstname: "Nguyễn", lastname: "Tuấn" },
        username: "tuan",
        date_created: "21/12/2020 7:01:01 AM",
        status: true
      },
      {
        id: 8,
        fullname: { firstname: "Trần", lastname: "Hiếu" },
        username: "hieu",
        date_created: "21/12/2020 7:01:01 AM",
        status: false
      },
      {
        id: 9,
        fullname: { firstname: "Phùng", lastname: "Duy" },
        username: "duy",
        date_created: "21/12/2020 7:01:01 AM",
        status: true
      },
      {
        id: 10,
        fullname: { firstname: "Nguyễn", lastname: "Tuấn" },
        username: "tuan",
        date_created: "21/12/2020 7:01:01 AM",
        status: true
      },
      {
        id: 11,
        fullname: { firstname: "Trần", lastname: "Hiếu" },
        username: "hieu",
        date_created: "21/12/2020 7:01:01 AM",
        status: false
      },
      {
        id: 12,
        fullname: { firstname: "Phùng", lastname: "Duy" },
        username: "duy",
        date_created: "21/12/2020 7:01:01 AM",
        status: true
      },
      {
        id: 13,
        fullname: { firstname: "Nguyễn", lastname: "Tuấn" },
        username: "tuan",
        date_created: "21/12/2020 7:01:01 AM",
        status: true
      },
      {
        id: 14,
        fullname: { firstname: "Trần", lastname: "Hiếu" },
        username: "hieu",
        date_created: "21/12/2020 7:01:01 AM",
        status: false
      },
      {
        id: 15,
        fullname: { firstname: "Phùng", lastname: "Duy" },
        username: "duy",
        date_created: "21/12/2020 7:01:01 AM",
        status: true
      },
      {
        id: 16,
        fullname: { firstname: "Nguyễn", lastname: "Tuấn" },
        username: "tuan",
        date_created: "21/12/2020 7:01:01 AM",
        status: true
      },
      {
        id: 17,
        fullname: { firstname: "Trần", lastname: "Hiếu" },
        username: "hieu",
        date_created: "21/12/2020 7:01:01 AM",
        status: false
      },
      {
        id: 18,
        fullname: { firstname: "Phùng", lastname: "Duy" },
        username: "duy",
        date_created: "21/12/2020 7:01:01 AM",
        status: true
      },
      {
        id: 19,
        fullname: { firstname: "Nguyễn", lastname: "Tuấn" },
        username: "tuan",
        date_created: "21/12/2020 7:01:01 AM",
        status: true
      },
      {
        id: 20,
        fullname: { firstname: "Trần", lastname: "Hiếu" },
        username: "hieu",
        date_created: "21/12/2020 7:01:01 AM",
        status: false
      },
      {
        id: 21,
        fullname: { firstname: "Phùng", lastname: "Duy" },
        username: "duy",
        date_created: "21/12/2020 7:01:01 AM",
        status: true
      },
      {
        id: 22,
        fullname: { firstname: "Nguyễn", lastname: "Tuấn" },
        username: "tuan",
        date_created: "21/12/2020 7:01:01 AM",
        status: true
      },
      {
        id: 23,
        fullname: { firstname: "Trần", lastname: "Hiếu" },
        username: "hieu",
        date_created: "21/12/2020 7:01:01 AM",
        status: false
      },
      {
        id: 24,
        fullname: { firstname: "Phùng", lastname: "Duy" },
        username: "duy",
        date_created: "21/12/2020 7:01:01 AM",
        status: true
      }
    ]
  },
  mutations: {
    CREATE_USER(state, new_user) {
      state.users.push(new_user);
    },
    GET_USER(state, id) {
      state.selected_user = state.users.find(user => user.id == id);
    },
    UPDATE_USER(state, upd_user) {
      let user = state.users.find(user => user.id == upd_user.id);
      user.fullname.firstname = upd_user.fullname.firstname;
      user.fullname.lastname = upd_user.fullname.lastname;
      user.status = upd_user.status;
    }
  },
  actions: {},
  getters: {
    getUserById: state => id => {
      return state.users.find(user => user.id == id);
    },
    getLastIdUser(state) {
      return state.users[state.users.length - 1].id;
    }
  },
  namespaced: true
};
