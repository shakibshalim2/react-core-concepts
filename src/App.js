import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
const nayoks = ['anwar', 'jafor iqbal', 'salman', 'shakib'];
const products = [
{name:'photoshop', price: '$90.99'},
{name: 'illustrator', price: '$60.99'},
{name:'pdf reader', price:'$5.99'}

];




const nayokNames = nayoks.map(nayok => <li>{nayok}</li>)
console.log(nayokNames);
  return (
    <div className="App">
      <header className="App-header">
        <p>
         i am a react Person
        </p>
<Counter></Counter>
<Users></Users>
<ul>
  {
nayokNames

  }
  {

products.map(product => <li>{product.name}</li>)

  }


   
</ul>
       {
products.map(product => <Product product = {products}></Product>)

}
      </header>
    </div>
  );
}
function Counter() {
const [count, setCount] = useState(10);



  return(
<div>
<h1>count:{count}</h1>
<button onClick = {() => setCount(count-1)}>Decrease</button>
<button onClick = { () => setCount(count + 1)}>Increase</button>


</div>


  )


}




function Users() {
const [users, setUsers] = useState([])
useEffect(  () => {
fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(data => setUsers(data))
}, [])


return(
<div>
<h3>Dynamic User:{users.length}</h3>
<ul>
{
users.map(user => <li>{user.name}</li>)


}


</ul>


</div>







  )

  
}




function Product(props) {
const productStyle = {
border: '1px solid grey',
borderRadius: '5px',
backgroundColor : 'lightgrey',
height: '200px',
width: '200px',
float: 'left'

}

  return(

    <div style ={productStyle}>
<h3>{props.product[0].name} </h3>
<h5>{props.product[0].price}</h5>
<button>Buy Now</button>
</div>



  )


  
}


function Person(props) {
const personStyle = {
border:'2px solid red',
margin:'10px'

}
const {name, price} = props.product;


  return (
    <div style={personStyle}>
<h1>name: {props.name} <br/> naika: {props.naika}</h1>
<h1>name: sakib khan</h1>


    </div>


  )


}




export default App;
