import React from 'react';
import Menu from "./Menu"
import Navbar from './Navbar';
import Breadcrumb from './Breadcrumb';
import Footer from './Footer';
const listDisplay = [
    {
      displayname:"Category",
      url:"/admin/category",
      icon:"fa fa-list"
    },
    {
      displayname:"post",
      url:"/admin/post",
      icon:"fa fa-user"
    },
  ];
const Base=({
    className = "section-body",
    children
})=>  (
    <div className="main-wrapper main-wrapper-1">
        <Navbar/>
        <Menu 
            listDisplay={listDisplay}
        />
        
        <div className="main-content">
            <Breadcrumb/>
        <section className="section">
            <div className={className}>
                {children}
            </div>
        </section>
        </div>
        <Footer/>
    </div>
);

export default Base;