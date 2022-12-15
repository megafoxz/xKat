import Helper from "./helpers";
import axios from "axios";
import AppConstant from "./constant";
import { AsyncStorage } from "react-native";

export default class HttpClient {
  constructor(baseUrl) {
    this.axiosInstance = axios.create({
      baseURL: baseUrl,
      timeout: 30000,
    });
  }

  async getOptions(header = {}) {
    var options = {
      headers: await Helper.buildHeaders(header),
    };
    return options;
  }

  handleError(err) {
    return {
      error: err.toString(),
    };
  }

  async get(url, query = {}, headers = {}) {
    let options = this.getOptions(headers);
    url = Helper.buildUrl(url, query);
    console.log(url);

    return new Promise((resolve) => {
      this.axiosInstance
        .get(url, options)
        .then((res) => resolve(res.data))
        .catch((err) => resolve(this.handleError(err)));
    });
  }

  async post(url, query = {}, body = {}, headers = {}) {
    let options = await this.getOptions(headers);
    url = Helper.buildUrl(url, query);

    return new Promise((resolve) => {
      this.axiosInstance
        .get(url, body, options)
        .then((res) => resolve(res.data))
        .catch((err) => resolve(this.handleError(err)));
    });
  }

  async put(url, query = {}, body = {}, headers = {}) {
    let options = await this.getOptions(headers);
    url = Helper.buildUrl(url, query);

    return new Promise((resolve) => {
      this.axiosInstance
        .put(url, body, options)
        .then((res) => resolve(res.data))
        .catch((err) => resolve(this.handleError(err)));
    });
  }

  async delete(url, query = {}, headers = {}) {
    let options = await this.getOptions(headers);
    url = Helper.buildUrl(url, query);

    return new Promise((resolve) => {
      this.axiosInstance
        .delete(url, options)
        .then((res) => resolve(res.data))
        .catch((err) => resolve(this.handleError(err)));
    });
  }

  async postFile(url, file, body = {}, headers = {}, onUploadProgress = null) {
    let formData = new FormData();
    formData.append("file-upload", file);

    for (let key in body) {
      formData.append(key, body[key]);
    }

    let options = await this.getOptions(headers);
    if (onUploadProgress) {
      options.onUploadProgress = onUploadProgress;
    }

    return new Promise((resolve) => {
      this.axiosInstance
        .post(url, formData, options)
        .then((res) => resolve(res.data))
        .catch((err) => resolve(this.handleError(err)));
    });
  }
}
// export default {
//   async get(url, query = {}, headers = {}) {
//     return fetch(url.split(/\s/).join(""), {
//       method: "GET",
//       headers: await Helper.getDefaultRequestHeaders(),
//       query: query,
//     })
//       .then((response) => response.json())
//       .then((response) => {
//         return response;
//       });
//   },

//   async post(url, query = {}, body = {}, headers = {}) {
//     return fetch(url.split(/\s/).join(""), {
//       method: "POST",
//       headers: await Helper.getDefaultRequestHeaders(),
//       query: query,
//       body: body,
//     })
//       .then((response) => response.json())
//       .then((response) => {
//         return response;
//       });
//   },

//   put(url, query = {}, body = {}, headers = {}) {},

//   delete(url, query = {}, headers = {}) {},

//   postFile(
//     url,
//     query = {},
//     file,
//     body = {},
//     headers = {},
//     onUploadProgress = null
//   ) {},
// };
