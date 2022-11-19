import { useState } from 'react';
import './style.css'

function Form(){
const [inputNum, setInputNum] = useState();
function preencherCampoNum(e){
    const countNum = e.target.value.split('');
    if(countNum.length >= 4  && countNum.length <= 8){
        console.log('ok')
    }
    console.log(countNum);
}
    return(
        <div className='form'>
            <form>
                <p>cardholder name</p>
                <input type="text" id="name" placeholder='e.g. Jane Aplessed'/>
                <p>card number</p>
                <input type="text" id="number" value={inputNum} onChange={(e) => preencherCampoNum(e)} placeholder='e.g. 1234 5678 9123 0000'/>
                <div className='box-date-cvc'>
                    <div className='date-exp'>
                        <p>exp. date (mm/yy)</p>
                        <input type="text" className='date-month' placeholder='MM'/>
                        <input type="text" className='date-year' placeholder='YY'/>
                    </div>
                    <div className='box-cvc'>
                        <p>cvc</p>
                        <input type="text" id="cvc" placeholder='e.g. 123'/>
                    </div>
                </div>
                <button>Confirm</button>
            </form>    
        </div>
    )
}

export default Form;