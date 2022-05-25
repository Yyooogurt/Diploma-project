import React from 'react';
import { Outlet } from 'react-router-dom';
import MapContainer from '../components/Maps'
import { Header } from '../components';


const MainLayout: React.FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Outlet />
      </div>
      <div className="map">
        <MapContainer />
      </div>
    </div>
  );
};

export default MainLayout;
