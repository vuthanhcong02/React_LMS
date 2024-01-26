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
const showListUser = () => {
  return instance.get("users");
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
export { postCreateUser, showListUser, updateUser, deleteUser };
