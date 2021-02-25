import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const persons = [
    {name:'Minhaj', job: 'false', food: 'mango'},
    {name:'Joynul', job: 'true', food: 'Tea'},
    {name:'Ab:Shukkur', job: 'true', food: 'Unknown'},
    {name:'Alina', job: 'HouseWife', food: 'Something'}
  ];

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
        <Counter></Counter>
        <Users></Users>
        {/* <ul>
        {
          persons.map(person=><ul><li>{person}</li></ul>)
        }
        {
          products.map(product => <li>{product.name}</li> )
        }
        </ul> */}
        {
          products.map(pd => <Product product={pd}></Product>)
        }
        {
          persons.map(per => <Person person={per}></Person>)
        }
      </header>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const handler = () => setCount(count + 1);
  return (
    <div>
      <h1>Count:{count} </h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onMouseMove={handler}>Increase</button>
    </div>
  )
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() =>{
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data =>setUsers(data))
  }, [])
  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user =><li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

function Product(props) {
  const productStyle = {
    border: '1px solid gray',
    margin: '10px',
    padding: '10px',
    borderRadius: '10px'
    }
  const {name, price} = props.product;
  return (<div style={productStyle}>
    <h2>{name} </h2>
    <h1>{price}</h1>
    <button>Buy Now</button>
  </div>
  )
}

function Person(props){
  const personStyle ={ 
    border: '1px solid yellow', 
    margin: '10px', 
    padding: '10px',
    borderRadius: '10px'
  }
  const {name, job, food} =props.person;
  return (<div style={
      {border: '1px solid red', 
      boxShadow:'5px 5px 5px green', 
      borderRadius: '10px', 
      margin: '10px', 
      padding: '10px'}}>

    <h2 style={personStyle}>Name:{name} </h2>
    <h3>Job: {job}</h3>
    <h4>Food: {food}</h4>
  </div>
  )
}

export default App;
