import React from 'react';
import {Link, withRouter} from "react-router-dom";
import {signout, isAuthenticated } from '../auth/helper';

const Navbar = ({
  history
}) => {
  const {user:{name, email, role}} = isAuthenticated();

  return (
    <>
    <div className="navbar-bg"></div>
    <nav className="navbar navbar-expand-lg main-navbar">
      <div className="form-inline mr-auto">
        <ul className="navbar-nav mr-3">
          <li>
            <a href="/" data-toggle="sidebar" className="nav-link nav-link-lg collapse-btn">
               <i className="fa fa-list"></i>
            </a>
          </li>
          <li>
            <a href="/" className="nav-link nav-link-lg fullscreen-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-copy"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            </a>
          </li>
        </ul>
      </div>
      <ul className="navbar-nav navbar-right">
        <li className="dropdown dropdown-list-toggle"><a href="/" data-toggle="dropdown"
            className="nav-link nav-link-lg message-toggle"><i className="fa fa-trash"></i>
            <span className="badge headerBadge1">
              6 </span> </a>
          <div className="dropdown-menu dropdown-list dropdown-menu-right pullDown">
            <div className="dropdown-header">
              Messages
              <div className="float-right">
                <a href="/">Mark All As Read</a>
              </div>
            </div>
            <div className="dropdown-list-content dropdown-list-message">
              <a href="/" className="dropdown-item"> <span className="dropdown-item-avatar
                                          text-white"> <img alt="newsportal" src="assets/img/users/user-1.png" className="rounded-circle"/>
                </span> <span className="dropdown-item-desc"> <span className="message-user">John
                    Deo</span>
                  <span className="time messege-text">Please check your mail !!</span>
                  <span className="time">2 Min Ago</span>
                </span>
              </a> <a href="/" className="dropdown-item"> <span className="dropdown-item-avatar text-white">
                  <img alt="newsportal" src="assets/img/users/user-2.png" className="rounded-circle" />
                </span> <span className="dropdown-item-desc"> <span className="message-user">Sarah
                    Smith</span> <span className="time messege-text">Request for leave
                    application</span>
                  <span className="time">5 Min Ago</span>
                </span>
              </a> <a href="/" className="dropdown-item"> <span className="dropdown-item-avatar text-white">
                  <img alt="newsportal" src="assets/img/users/user-5.png" className="rounded-circle" />
                </span> <span className="dropdown-item-desc"> <span className="message-user">Jacob
                    Ryan</span> <span className="time messege-text">Your payment invoice is
                    generated.</span> <span className="time">12 Min Ago</span>
                </span>
              </a> <a href="/" className="dropdown-item"> <span className="dropdown-item-avatar text-white">
                  <img alt="newsportal" src="assets/img/users/user-4.png" className="rounded-circle" />
                </span> <span className="dropdown-item-desc"> <span className="message-user">Lina
                    Smith</span> <span className="time messege-text">hii John, I have upload
                    doc
                    related to task.</span> <span className="time">30
                    Min Ago</span>
                </span>
              </a> <a href="/" className="dropdown-item"> <span className="dropdown-item-avatar text-white">
                  <img alt="newsportal" src="assets/img/users/user-3.png" className="rounded-circle" />
                </span> <span className="dropdown-item-desc"> <span className="message-user">Jalpa
                    Joshi</span> <span className="time messege-text">Please do as specify.
                    Let me
                    know if you have any query.</span> <span className="time">1
                    Days Ago</span>
                </span>
              </a> <a href="/" className="dropdown-item"> <span className="dropdown-item-avatar text-white">
                  <img alt="newsportal" src="assets/img/users/user-2.png" className="rounded-circle" />
                </span> <span className="dropdown-item-desc"> <span className="message-user">Sarah
                    Smith</span> <span className="time messege-text">Client Requirements</span>
                  <span className="time">2 Days Ago</span>
                </span>
              </a>
            </div>
            <div className="dropdown-footer text-center">
              <a href="/">View All <i className="fas fa-chevron-right"></i></a>
            </div>
          </div>
        </li>
        <li className="dropdown dropdown-list-toggle"><a href="/" data-toggle="dropdown"
            className="nav-link notification-toggle nav-link-lg"><i className="fa fa-bell"></i>
          </a>
          <div className="dropdown-menu dropdown-list dropdown-menu-right pullDown">
            <div className="dropdown-header">
              Notifications
              <div className="float-right">
                <a href="/">Mark All As Read</a>
              </div>
            </div>
            <div className="dropdown-list-content dropdown-list-icons">
              <a href="/" className="dropdown-item dropdown-item-unread"> <span
                  className="dropdown-item-icon bg-primary text-white"> <i className="fas
                                              fa-code"></i>
                </span> <span className="dropdown-item-desc"> Template update is
                  available now! <span className="time">2 Min
                    Ago</span>
                </span>
              </a> <a href="/" className="dropdown-item"> <span className="dropdown-item-icon bg-info text-white"> <i className="far
                                              fa-user"></i>
                </span> <span className="dropdown-item-desc"> <b>You</b> and <b>Dedik
                    Sugiharto</b> are now friends <span className="time">10 Hours
                    Ago</span>
                </span>
              </a> <a href="/" className="dropdown-item"> <span className="dropdown-item-icon bg-success text-white"> <i
                    className="fas
                                              fa-check"></i>
                </span> <span className="dropdown-item-desc"> <b>Kusnaedi</b> has
                  moved task <b>Fix bug header</b> to <b>Done</b> <span className="time">12
                    Hours
                    Ago</span>
                </span>
              </a> <a href="/" className="dropdown-item"> <span className="dropdown-item-icon bg-danger text-white"> <i
                    className="fas fa-exclamation-triangle"></i>
                </span> <span className="dropdown-item-desc"> Low dsk space. Let's
                  clean it! <span className="time">17 Hours Ago</span>
                </span>
              </a> <a href="/" className="dropdown-item"> <span className="dropdown-item-icon bg-info text-white"> <i className="fas
                                              fa-bell"></i>
                </span> <span className="dropdown-item-desc"> Welcome to Otika
                  template! <span className="time">Yesterday</span>
                </span>
              </a>
            </div>
            <div className="dropdown-footer text-center">
              <a href="/">View All <i className="fas fa-chevron-right"></i></a>
            </div>
          </div>
        </li>
        <li className="dropdown">
          <a href="/" data-toggle="dropdown" className="nav-link dropdown-toggle nav-link-lg nav-link-user">
               {/* <img alt="newsportal" src="assets/img/user.png" className="user-img-radious-style" /> */}
               <span className="d-sm-none d-lg-inline-block">{name}</span>
          </a>
          <div className="dropdown-menu dropdown-menu-right pullDown">
            <div className="dropdown-title">Hello {name}</div>
            <a href="profile.html" className="dropdown-item has-icon"> <i className="far
                                      fa-user"></i> Profile
            </a> <a href="timeline.html" className="dropdown-item has-icon"> <i className="fas fa-bolt"></i>
              Activities
            </a> <a href="/" className="dropdown-item has-icon"> <i className="fas fa-cog"></i>
              Settings
            </a>
            <div className="dropdown-divider"></div>
            <a href="/" className="dropdown-item has-icon text-danger" onClick={()=>{
                    signout(()=>{
                        history.push("/")
                    });
                }} > 
            <i className="fas fa-sign-out-alt"></i>
              Logout
            </a>
          </div>
        </li>
      </ul>
    </nav>
    </>
  );
}
export default withRouter(Navbar);