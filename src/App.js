import './App.css';
import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer'
import Card from './components/Card/card'


function App() {
  return (
  <>
    <div className='App'>
      <Header/>
      <div className="card-container">
        <Card
        title = 'Dubai'
        />
        <Card
         title = 'Burj Khalifa'
        />
        <Card
        title = 'Waterfall'
        />
      </div>
    </div>
  </>
  );
}

export default App;
