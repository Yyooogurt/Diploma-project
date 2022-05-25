import React from 'react';
import { Link } from 'react-router-dom';

import cartEmptyImg from '../assets/img/empty-cart.png';

export const CartEmpty: React.FC = () => (
  <div className="cart cart--empty">
    <h2>
    Кошик порожній <span>😕</span>
    </h2>
    <p>
      Найімовірніше, ви не замовляли ще.
      <br />
      Щоб замовити, перейди на головну сторінку.
    </p>
    <img src={cartEmptyImg} alt="Empty cart" />
    <Link to="/" className="button button--black">
      <span>Повернутися назад</span>
    </Link>
  </div>
);
