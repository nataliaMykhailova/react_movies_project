import axios from "axios";

import {baseURL} from "../constants/urls";

const apiService = axios.create({baseURL});

apiService.interceptors.request.use((request) => {
        request.headers.set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MTRhMjZjNjNjZjdlM2Y4ZTI4NTAxNDAyNTQ4Yjk1ZSIsInN1YiI6IjY2NmUwNTM4YTFiYzNkYjEwY2M0YTU0ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UHwYoZWz2lr0mQAdlg7j2toi_fF9EZlDL3JVYgJGXms');
    return request;
})


export {
    apiService
}
