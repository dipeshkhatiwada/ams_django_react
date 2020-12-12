import React from 'react';
import { isAuthenticated } from '../auth/helper';
import { Link } from 'react-router-dom';
import Base from '../components/Base';
const Dashboard = () =>{
  const {user:{name, email, role}} = isAuthenticated();
  return (
      <Base>
        {name}
      </Base>
  );
}
export default Dashboard;
