import React from 'react';
import css from "./Layot.module.css"
import {Outlet, NavLink} from "react-router-dom";

export const Layout = () => {
    return (
        <div>
            <div className={css.header}>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/posts">Posts</NavLink>
            </div>
            <Outlet/>
        </div>
    );
};

