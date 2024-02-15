import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [hil, set] = useState(true);
  const lang = () => {
    set(!hil);
  }
  const [inputKotak, setKosong] = useState('');
  const ClickNomor = (value) => {
    setKosong(inputKotak + value);
  };
  const hasil = () => {
    try {
      const result = eval(inputKotak);
      setKosong(result.toString());
    } catch (error) {
      setKosong('Error Bye Arr');
      setTimeout(() => {
        setKosong('');
      }, 1000);
    }
  }
  const removeText = () => {
    if (inputKotak.length > 0) {
      setKosong(prevValue => prevValue.slice(0, -1)); 
    }
  }
  const [text, setText] = useState('');
  useEffect(() => {
    const fullText = "Hallo Saya Asisten AI Kalkulator !";
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="container">
      <div className="con2">
        <input value={inputKotak} readOnly id="in" className="mtk" type="text" placeholder="Kalkulator Arr.." />
        <svg onClick={lang} className="exit" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
      </div>
      <div className="containerDua">
        <svg className="robot" xmlns="http://www.w3.org/2000/svg" fill="white" height="24" viewBox="0 -960 960 960" width="24"><path d="M160-360q-50 0-85-35t-35-85q0-50 35-85t85-35v-80q0-33 23.5-56.5T240-760h120q0-50 35-85t85-35q50 0 85 35t35 85h120q33 0 56.5 23.5T800-680v80q50 0 85 35t35 85q0 50-35 85t-85 35v160q0 33-23.5 56.5T720-120H240q-33 0-56.5-23.5T160-200v-160Zm200-80q25 0 42.5-17.5T420-500q0-25-17.5-42.5T360-560q-25 0-42.5 17.5T300-500q0 25 17.5 42.5T360-440Zm240 0q25 0 42.5-17.5T660-500q0-25-17.5-42.5T600-560q-25 0-42.5 17.5T540-500q0 25 17.5 42.5T600-440ZM320-280h320v-80H320v80Zm-80 80h480v-480H240v480Zm240-240Z"/></svg>
        <b>{text}</b>
      </div>
      {hil && (
        <div className="hil">
          <div className="t1">
           <button className="a" onClick={() => setKosong('')}>C</button>
           <button className="a" onClick={() => ClickNomor(' / ')}>/</button>
           <button className="a" onClick={() => ClickNomor(' % ')}>%</button>
           <button className="b" onClick={() => ClickNomor(' + ')}>+</button>
          </div>
          <div className="t2">
           <button className="a" onClick={() => ClickNomor('7')}>7</button>
           <button className="a" onClick={() => ClickNomor('8')}>8</button>
           <button className="a" onClick={() => ClickNomor('9')}>9</button>
           <button className="b" onClick={() => ClickNomor(' * ')}>X</button>
          </div>
          <div className="t3">
           <button className="a" onClick={() => ClickNomor('4')}>4</button>
           <button className="a" onClick={() => ClickNomor('5')}>5</button>
           <button className="a" onClick={() => ClickNomor('6')}>6</button>
           <button className="b" onClick={() => ClickNomor(' - ')}>-</button>
          </div>
          <div className="t4">
           <button className="a" onClick={() => ClickNomor('1')}>1</button>
           <button className="a" onClick={() => ClickNomor('2')}>2</button>
           <button className="a" onClick={() => ClickNomor('3')}>3</button>
            <button onClick={removeText} className="b">
             <svg xmlns="http://www.w3.org/2000/svg" height="10" viewBox="0 -960 960 960" width="10"><path d="M200-200v-560 560-1 1Zm0 80q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v334q-19-7-39-10.5t-41-3.5v-320H200v560h320q0 21 3.5 41t10.5 39H200Zm560 80-56-56 63-64H600v-80h167l-63-64 56-56 160 160L760-40ZM440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Z"/></svg>
            </button>
          </div>
          <div className="t5">
           <button className="t" onClick={() => ClickNomor('0')}>0</button>
           <button className="a" onClick={() => ClickNomor(' . ')}>.</button>
           <button className="b" onClick={hasil}>=</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App



