import logo from './logo.svg';
import './App.css';
// import { useEffect, useState } from 'react';

function App() {
  const friends = ['minhaj', 'Ahmed', 'Sadik', 'ANIKA', 'Isheta', 'Joynul'];
  const products = [
    {name:'Software E', price:'$10000', duration:'1 Month'},
    {name:'Website D', price: '$5000', duration:'Half Month'},
    {name:'Content W', price: '$2000', duration:'Some Days'},
    {name:'Markting D', price: '$2000', duration: 'Some Days'},
    {name: 'Free Learning', price: '$2000', duration: '6 Months'}


  ];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Clever Learner'z</p>
        <ul>
          {
            friends.map(friend => <li>{friend}</li>)
          }
        </ul>
          {
            products.map(pro => <Product product={pro}></Product>)
          }
        
      </header>
    </div>
  );
}

function Product(props){
  const {name, price} = props.product;
  const ProductStyles = {border: '1px solid gray', margin:'10px', padding: '10px', background: 'rgba(199,42,38,199)'}
  return (<div style={ProductStyles}>
    <h2>{name}</h2>
    <h3>{price}</h3>
    <h4>{props.product.duration}</h4>
    <button style={{background:'black', color:'white'}}>Order Now</button>
  </div>
  )
}

export default App;
