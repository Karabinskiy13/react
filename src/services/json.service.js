import {axiosService} from "./axios.service";
import {urls} from "../config/urls";

export const jsonService={
    getAllUsers:()=> axiosService.get(urls.users).then(value =>value.data),
    getUserById:(id)=>axiosService.get(`${urls.users}/${id}`).then(value => value.data),
    getAllPosts:()=>axiosService.get(urls.posts).then(value => value.data ),
    getPostsById:(id)=>axiosService.get(`${urls.posts}/${id}`).then(value => value.data),
    getCommentsById:(id)=>axiosService.get(`${urls.posts}/${id}/comments`).then(value => value.data),
    getPostsByUserId:(id) => axiosService.get(`${urls.users}/${id}/posts`).then(value => value.data),
    getUserAlbums:(id) => axiosService.get(`${urls.users}/${id}/albums`).then(value => value.data),
    getAlbumsPhotos:(albumId) => axiosService.get(`${urls.albums}/${albumId}/photos`).then(value => value.data)
}