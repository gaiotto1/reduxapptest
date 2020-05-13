import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { MdAddShoppingCart } from 'react-icons/md';
import api from '../../services/api';
import { formatPrice } from '../../util/format'

import * as CartActions from '../../store/modules/cart/actions';

import { ProductList } from './styles';

class Home extends Component {
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

  handleAddProduct = (product) => {
    const { dispatch } = this.props;

    dispatch(CartActions.addToCart(product));
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

            <button type="button" onClick={() => this.handleAddProduct(product)}>
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

/* const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch) */

// export default  connect(null, mapDispatchToProps)(Home);

export default  connect()(Home);
