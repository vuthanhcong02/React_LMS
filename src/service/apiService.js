import instance from "../utils/axiosCustom";
const postCreateUser = (email, password, username, role, avatar) => {
  const data = new FormData();
  data.append("username", username);
  data.append("email", email);
  data.append("password", password);
  data.append("role", role);
  data.append("avatar", avatar);

  return instance.post("users/create", data);
};
const showListUser = (page) => {
  return instance.get(`users?page=${page}`);
};
const updateUser = (id, password, username, role, avatar) => {
  const data = new FormData();
  data.append("id", id);
  data.append("username", username);
  data.append("password", password);
  data.append("role", role);
  data.append("avatar", avatar);

  // Sử dụng template string để thêm giá trị của id vào URL
  return instance.put(`users/${id}`, data);
};
const deleteUser = (id) => {
  return instance.delete(`users/${id}`);
};
const postLogin = (email, password) => {
  return instance.post("auth/login", {
    email: email,
    password: password,
  });
};

export { postCreateUser, showListUser, updateUser, deleteUser, postLogin };
