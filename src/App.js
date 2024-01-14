import './App.css';
import {useState} from 'react';
import Button from './Button.js';
export default function App() {
  const [photo, setPhoto] = useState(0);
  function updatePhoto(direction){
    if(direction === 'left'){
      if(photo > 0){
      setPhoto(photo - 1);
      }else{setPhoto(images.length-1)
      };
    }else if(direction === 'right'){
      if(photo < images.length - 1){
        setPhoto(photo + 1);
      }else{
        setPhoto(0);
      }
    }
  }

  return (
    <div className="app-container">
      <header className="App-header">
        <h1>Image Carousel Project</h1>
      </header>
      <main>
          <Button direction="left" updatePhoto={() => updatePhoto('left')}/>
          <img src={images[photo]} alt=""></img>
          <Button direction="right" updatePhoto={() => updatePhoto("right")}/>        
      </main>
    </div>
  );
}

const images = [
  "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
];

