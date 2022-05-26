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
        <h2 className="content__title_2">Наші точки видачі у місті Дніпро:</h2>
          <MapContainer />
        </div>
        <div className="bottom">
          
        </div>
      </div>
      
  );
};

export default MainLayout;

