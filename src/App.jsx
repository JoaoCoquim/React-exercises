import './App.css';
import User from './components/User/User'
import users from './assets/users.json'
import Product from './components/Product/Product'
import product from './assets/product.json'
import Button from './components/Button/Button'
import ListaDiogo from './components/ListaDiogo/ListaDiogo'
import Dado from './components/Dado/Dado'
import idcards from './assets/id-cards.json'
import IdCard from './components/IdCard/IdCard'
import Greetings from './components/Greetings/Greetings'
import Random from './components/Random/Random'
import BoxColor from './components/BoxColor/BoxColor'
import CreditCard from './components/CreditCard/CreditCard'
import Rating from './components/Rating/Rating'

function App() {

  return (
    <>

      <div className="rating-container">
        <Rating>0</Rating>
        <Rating>1.4</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
      </div>

      {/* 
      <div className='credit-card-container'>
        <CreditCard
          type="./public/images/visa.png"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white"
        />

        <CreditCard
          type="./public/images/master-card.png"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />

        <CreditCard
          type="./public/images/visa.png"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2028}
          bank="ActivoBank"
          owner="João Coquim"
          bgColor="#ddbb55"
          color="white"
        />
      </div>
      
      <div className='App'>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </div>

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
