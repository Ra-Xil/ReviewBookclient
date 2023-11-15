import axios from "axios";
const url = "/api/post";
const urluser = "/api/user";
const iduser = "655484a220e0109b7e7e91a0";
export default class API {
    static async getUserById(id) {
        const res = await axios.get(`${urluser}/${iduser}`);
        return res.data;
    }
    static async getUser() {
        const res = await axios.get(urluser);
        return res.data;
    }
    // lấy dữ liệu từ server
    static async getAllPost() {
        const res = await axios.get(url);
        return res.data;
    }
    // lấy id
    static async getPostById(id) {
        const res = await axios.get(`${url}/${id}`);
        return res.data;
    }
    // thêm dữ liệu
    static async addPost(post) {
        const res = await axios.post(url, post);
        return res.data;
    }
    // cập nhật dữ liệu
    static async upDatePost(id, post) {
        const res = await axios.patch(`${url}/${id}`, post);
        return res.data;
    }
    // xóa dữ liệu
    static async deletePost(id) {
        const res = await axios.delete(`${url}/${id}`);
        return res.data;
    }

}