import './App.css';
import User from './components/User/User.jsx'
import users from './assets/users.json'
import Product from './components/Product/Product.jsx'
import product from './assets/product.json'
import Button from './components/Button/Button.jsx'
import ListaDiogo from './components/ListaDiogo/ListaDiogo.jsx'
import Dado from './components/Dado/Dado.jsx'
import idcards from './assets/id-cards.json'
import IdCard from './components/IdCard/IdCard.jsx'
import Greetings from './components/Greetings/Greetings.jsx'
import Random from './components/Random/Random.jsx'
import BoxColor from './components/BoxColor/BoxColor.jsx'

function App() {

  return (
    <>
      <div className='App'>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </div>

      {/*
      <div className='App'>
        <Random min={1} max={6} />
        <Random min={1} max={100} />
      </div>

      <div className='App'>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
        <Greetings lang="pt">João</Greetings>
        <Greetings lang="es">Lorena</Greetings>
      </div>

      <div className='App'>
        {idcards.map((card) => (
          <IdCard key={card.id} idcard={card} />
        ))}
      </div>

      <div className='App'>
        <Dado />
        <Dado />
        <Dado />
        <Dado />
        <Dado />
        <Dado />
      </div>
    
      <div className='App'>
        <ListaDiogo estado={"Cool"} >
          <div>Diogo</div>
          <div>Diogo</div>
          <div>Diogo</div>
          <div>Diogo</div>
        </ListaDiogo>
      </div>

      <div className='App'>
        {users.map(user => <User key={user.id} user={user} />)}
      </div>

      <div className='Product'>
        <Product product={product} />
      </div>

      <div className='Button'>
        {users.map(user => <Button user={user} />)}
      </div> */}

    </>
  )
}

export default App;
