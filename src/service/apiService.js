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
export { postCreateUser };
