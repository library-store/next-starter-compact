import axios from "axios";

export const fetchApi = {
  get,
  post,
  put,
  patch,
  delete: _delete,
};

const headers = {
  "Content-Type": "application/json"
};

const instance = axios.create({
  baseURL: "https://gwdev.iflux.global/api",
  withCredentials: true,
  headers,
});

instance.interceptors.response.use(
  (response) =>
    new Promise((resolve, reject) => {
      try {
        resolve(response.data);
      } catch (err) {
        reject(err);
      }
    }),
  (error) =>
    new Promise((reject) => {
      return reject(error);
    })
);

function get(url: any) {
  const token = localStorage.getItem("token");

  instance.defaults.headers.common['Authorization'] = `Token ${token}`;

  return instance.get(`${url}`);
}

function post(url: any, body: any, headers = {}) {
  const token = localStorage.getItem("token");
  instance.defaults.headers.common['Authorization'] = `Token ${token}`;

  return instance.post(`${url}`, body, {
    headers
  });
}

function put(url: any, body: any) {
  const token = localStorage.getItem("token");
  instance.defaults.headers.common['Authorization'] = `Token ${token}`;

  return instance.put(`${url}`, body, {
    headers
  });
}

function patch(url: any, body: any) {
  const token = localStorage.getItem("token");
  instance.defaults.headers.common['Authorization'] = `Token ${token}`;

  return instance.patch(`${url}`, body, {
    headers
  });
}

function _delete(url: any) {
  const token = localStorage.getItem("token");
  instance.defaults.headers.common['Authorization'] = `Token ${token}`;

  const requestOptions = {
    method: "DELETE",
  };
  return instance.delete(`${url}`, requestOptions);
}
