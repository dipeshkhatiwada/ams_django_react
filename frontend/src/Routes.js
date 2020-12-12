import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Rutes for private and admin
import PrivateRoute from './auth/helper/PrivateRoutes';
// import AdminRoute from './auth/helper/AdminRoutes';

// Component Import
import Signin from './user/Signin';
import Signup from './user/Signup';
import Dashboard from './user/Dashboard';
// import AddCategory from './category/AddCategory';
// import ManageCategory from './category/ManageCategory';
// import UpdateCategory from './category/UpdateCategory';
// import AddPost from './post/AddPost';
// import ManagePost from './post/ManagePost';
// import ListPost from './post/ListPost';
// import UpdatePost from './post/UpdatePost';
const Routes= ()=> {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Signin} />
                <Route path="/backend/login/" exact component={Signin} />
                <Route path="/signin" exact component={Signin} />
                
                <PrivateRoute path="/admin/dashboard" exact component={Dashboard}  />

                {/*<PrivateRoute path="/admin/category/create" exact component={AddCategory}  />*/}
                {/*<PrivateRoute path="/admin/category/index" exact component={ManageCategory}  />*/}
                {/*<PrivateRoute path="/admin/category/update-:categoryId" exact component={UpdateCategory}  />*/}

                {/*<PrivateRoute path="/admin/post/create" exact component={AddPost}  />*/}
                {/*<PrivateRoute path="/admin/post/index" exact component={ManagePost}  />*/}
                {/*<PrivateRoute path="/admin/post/detail-:postId" exact component={ListPost}  />*/}
                {/*<PrivateRoute path="/admin/post/update-:postId" exact component={UpdatePost}  />*/}


            </Switch>
        </BrowserRouter>
    );
}

export default Routes