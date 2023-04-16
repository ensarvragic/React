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
        about = 'Dubai je najgusci i najnaseljeniji grad u Ujedinjenim emiratima'
        price = '799$'
        />
        <Card
         title = 'Burj Khalifa'
         about = 'Burj Khalifa je neboder u dubai-u i najveca zgrada na svetu'
         price = '45.21$'
        />
        <Card
        title = 'Waterfall'
        about = 'Dubai waterfalls se nalaze na vestackom jezeru burj khalifa od 12 hektara'
        price = 'free to see'
        />
      </div>
    </div>
  </>
  );
}

export default App;
