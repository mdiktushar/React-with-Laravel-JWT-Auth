import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout_Main = () => {
    return (
        <div>
            main
            <Outlet />
        </div>
    );
};

export default Layout_Main;