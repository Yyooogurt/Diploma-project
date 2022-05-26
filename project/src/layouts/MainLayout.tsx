import React from 'react';
import { Outlet } from 'react-router-dom';
import MapContainer from '../components/Maps'
import { Header } from '../components';
import logo  from "../components/clover.png";
import visa  from "../components/visa.png";
import instagram  from "../components/instagram.svg";
import facebook  from "../components/facebook.png";


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
        <div className="block_1">
              <div className="bottom_logo">
                <img width="140" src={logo} alt="Clover logo" />
                <a href="">© 2021-2022 clover.com.ua ®</a>
              </div>
            </div>

            <div className="block_2"> 
              <h4>Працюємо: з 8:00  до 22:00. <br /> Час роботи може змінюватися</h4>   		
                <ul className="phone_numbers">   
                <li><a className="phne_mob"href="tel:+380507773322"><img src="" alt="" />050 777 33 22</a></li>                                            
                <li><a className="phne_mob"href="tel:+380507773322"><img src="" alt="" />050 777 55 22</a></li>    
                <li><a className="phne_mob"href="tel:+380507773322"><img src="" alt="" />050 777 44 22</a></li>       
                </ul> 
            </div>
            <div className="block_3">
              <h4>Ми приймаємо</h4>
              <img alt="visa" className="logo_pay" src={visa}></img>
            </div>
            <div className="block_4">
              <h4>Ми в соціальних мережах</h4> 
              <a href="https://www.facebook.com/"><img alt="visa" className="social social_instagram" src={instagram}></img></a>
              <a href="https://www.instagram.com/"><img alt="visa" className="social" src={facebook}></img></a>
            </div>
        </div>
      </div>
      
  );
};

export default MainLayout;

