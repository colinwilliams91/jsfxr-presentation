import logo from './logo.svg';
import './App.css';


function App() {
  /* External Cloudinary `click.wav` URL Hosting */
  const clickCloudinaryUrl = 'https://res.cloudinary.com/dbdyc4klu/video/upload/v1694301930/click_rqnmgv.wav';
  /* Web Audio API Object */
  const clickAudio = new Audio(clickCloudinaryUrl);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h5>Type your message here!</h5>
        <input onChange={() => clickAudio.play()}></input>
      </header>
    </div>
  );
}

export default App;
