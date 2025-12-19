import axios from "axios";

const API=axios.create({
    baseURL:"https://agami-interview-backend.onrender.com"
});

export default API