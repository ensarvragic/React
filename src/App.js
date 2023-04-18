import React from 'react';
import './App.css';
import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer';
import Card from './components/Card/card';

const cardData = [
  {
    id: 1,
    title: 'Dubai',
    about: 'Dubai je najgusci i najnaseljeniji grad u Ujedinjenim emiratima',
    price: '799$',
  },
  {
    id: 2,
    title: 'Burj Khalifa',
    about: 'Burj Khalifa je neboder u dubai-u i najveca zgrada na svetu',
    price: '45.21$',
  },
  {
    id: 3,
    title: 'Waterfall',
    about: 'Dubai waterfalls se nalaze na vestackom jezeru burj khalifa od 12 hektara',
    price: 'free to see',
  },
];


function App() {
  return (
    <div className='App'>
      <Header/>
      <div className="card-container">
      {cardData.map((card) => (
      <Card
        key={card.id}
        title={card.title}
        about={card.about}
        price={card.price}
      />
     ))}
      </div>
    </div>
  );
}

export default App;
