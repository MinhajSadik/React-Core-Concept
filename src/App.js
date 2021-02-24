import logo from './logo.svg';
import './App.css';

function App() {
  const personName = ['Minhaj Sadik', 'Joynul Hussain', 'Iqra Aziz', 'Anika Akter', 'Isheta'];
  const foods = ['Tea', 'Tea', 'orange', 'mango', 'Fruits']

  const products = [
    {name: 'PhotoShop', price:'$80.80'},
    {name: 'illustrator', price:'$809.8' },
    {name: 'LightStrom', price:'$809.80'}

  ]

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>I Create A React Apps</p>
        <Product name={products[0].name} price={products[0].price}></Product>
        <Product name={products[1].name} price={products[1].price}></Product>
        <Product name={products[2].name} price={products[2].price}></Product>
        

        <Person name= {personName[0]} food= {foods[0]} Job='Programming' ></Person>
        <Person name= {personName[1]} food= {foods[1]} Job='Shop'></Person>
        <Person name= {personName[2]} food= {foods[2]} Job='Student'></Person>
        <Person name= {personName[3]} food= {foods[3]} Job='Student'></Person>
        <Person name= {personName[4]} food= {foods[4]} Job='Student'></Person>
      </header>
    </div>
  );
}

function Product(props) {
  const productStyle = { border: '1px solid gray', margin: '10px', padding: '10px', borderRadius: '10px'}
  return (<div style={productStyle}>
    <h2>{props.name} </h2>
    <h1>{props.price}</h1>
    <button>Buy Now</button>
  </div>
  )
}

function Person(props){
  const personStyle ={ border: '1px solid yellow', margin: '10px', padding: '10px',borderRadius: '10px'}
  return (
    <div style={{border: '1px solid red', boxShadow:'5px 5px 5px green', borderRadius: '10px', margin: '10px', padding: '10px'}}>
    <h2 style={personStyle}>Name: {props.name} </h2>
    <h3>Job: {props.Job}</h3>
    <h4>Food: {props.food}</h4>
  </div>
  )
}

export default App;
