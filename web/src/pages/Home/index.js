import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom1.jpg?ts=1586961574&ims=326x"
          alt="Sneakers"
        />
        <strong>Confortable sneaker</strong>
        <span>R$129,00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADD TO CART</span>
        </button>
      </li>
    </ProductList>
  );
}
