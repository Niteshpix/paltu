import http from "../../Config/http-common";

class UserDataService {


  get(id) {
    return http.get(`/user/${id}`);
  }


  update(id, data) {
    return http.put(`/user/${id}`, data);
  }

  delete(id) {
    return http.delete(`/user/${id}`);
  }

}

export default new UserDataService();