import { useState } from 'react'
import Cards from './components/cards'
import Form from './components/form'
import './App.css'

function App() {
  const [cardNum, setCardNum] = useState("0000 0000 0000 0000");
  const [cardName, setCardName] = useState("Example j Simpson");
  const [cardMonth, setCardMonth] = useState("00");
  const [cardYear, setCardYear] = useState("00");

  return (
    <div className="App">
      <Cards cardnum={cardNum} cardname={cardName} carddate={[cardMonth,cardYear]}/>
      <Form/>
    </div>
  )
}

export default App
