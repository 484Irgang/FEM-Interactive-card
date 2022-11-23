import { useState,useEffect } from 'react'
import Cards from './components/cards'
import Form from './components/form'
import Confirmed from './components/confirmed'
import './App.css'

function App() {
  const [cardNum, setCardNum] = useState("0000 0000 0000 0000");
  const [cardName, setCardName] = useState("Example j Simpson");
  const [cardMonth, setCardMonth] = useState("00");
  const [cardYear, setCardYear] = useState("00");
  const [cardCvc, setCardCvc] = useState("123");
  const [toggle, setToggle] = useState(false);

  const dadosCard = [setCardName,setCardNum,setCardMonth,setCardYear,setCardCvc];

  function preencherCard(dados){
    for(var i=0;i<dados.length;i++){
      dadosCard[i](dados[i].value);
    }
  }
  useEffect(() => {
    document.querySelector('.form').style.display = toggle ? "none" : "block";
    document.querySelector('.confirmed').style.display = toggle ? "flex" : "none";
  },[toggle]);

  return (
    <div className="App">
      <Cards cardnum={cardNum} cardname={cardName} carddate={[cardMonth,cardYear]} cardcvc={cardCvc}/>
      <Form liberar={setToggle} preenchercard={preencherCard}/>
      <Confirmed></Confirmed>
    </div>
  )
}

export default App
