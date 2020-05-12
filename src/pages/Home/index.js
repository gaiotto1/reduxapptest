import React, { Component } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import api from '../../services/api';
import { formatPrice } from '../../util/format'

import { ProductList } from './styles';

export default class Home extends Component {
  state = {
    products: [],
  }

  async componentDidMount() {
    const response = await api.get('http://localhost:3333/products');

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price)
    }))

    this.setState({ products: data });
  }

  render() {
    const { products } = this.state;

    return (
      <ProductList>
        {products.map(product => (
           <li hey={product.id}>
            <img src={product.image} alt="tenis" />
            <strong>{product.title}</strong>
            <span>{product.priceFormatted}</span>

            <button type="button">
              <div>
                <MdAddShoppingCart size={16} color="#fff" /> 3
              </div>

              <span>ADICIONAR AO CARRINHO</span>
            </button>
          </li>
        ))}
      </ProductList>
    );
  }
}