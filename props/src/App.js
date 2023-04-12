
import './App.css';
import Profile from './Profile/Profile';

function App() {
  const firstname='Mouna'
  const lastname='Guezguez'
  const profession='Engineer'
  const alertMe =()=>{
alert(firstname+' '+lastname)
  }
  return (
    <div className="App-header">
      <Profile firstname={firstname} lastname={lastname} profession={profession} alertMe={alertMe}/>
      <img src='./avataar.jpg'alt='avataar.jpg'width='300px'height='300px'/>
    </div>
  );
}

export default App;
