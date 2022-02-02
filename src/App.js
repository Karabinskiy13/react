import {Routes, Route} from "react-router-dom";


import {Layout} from "./components/Layout/Layout";
import {UsersPage} from "./components/Pages/UserPage/Users/UsersPage";
import {SingleUser} from "./components/Pages/UserPage/Users/SingleUser";
import {UserPosts} from "./components/Pages/UserPage/Posts/UserPosts";
import {AlbumPhotos} from "./components/Pages/UserPage/Albums/AlbumPhotos";
import {UsersAlbums} from "./components/Pages/UserPage/Albums/UsersAlbums";
import {PostsPage} from "./components/Pages/PostPage/Posts/PostsPage";
import {SinglePostPage} from "./components/Pages/PostPage/Posts/SinglePostPage";
import {CommentsMap} from "./components/Pages/PostPage/Comments/CommentsMap";

const App = () => {

    return (
        <div className='App'>
            <Routes>
                    <Route path={'/'} element={<Layout/>}>
                        <Route path={'users'} element={<UsersPage/>}>
                            <Route path={':id'} element={<SingleUser/>}>
                                <Route path={'posts'} element={<UserPosts/>}/>
                            </Route>
                            <Route path={':id/albums'} element={<UsersAlbums/>}>
                                <Route path={':albumId/photos'} element={<AlbumPhotos/>}/>
                            </Route>
                        </Route>
                        <Route path={'posts'} element={<PostsPage/>}>
                            <Route path={':id'} element={<SinglePostPage/>}>
                                <Route path={'comments'} element={<CommentsMap/>}/>
                            </Route>
                        </Route>
                        <Route path={'*'} element={<UsersPage/>}/>
                    </Route>
            </Routes>
        </div>
    )
}
export default App;