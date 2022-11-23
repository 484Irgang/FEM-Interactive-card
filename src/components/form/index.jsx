import { useState } from 'react';
import './style.css'

function Form(props){
const [inputNum, setInputNum] = useState();
const [inputNome, setInputNome] = useState();
const [inputMonth, setInputMonth] = useState();
const [inputYear, setInputYear] = useState();
const [inputCvc, setInputCvc] = useState();


function preencherCampoNum(e){
    const countNum = e.target.value.split('');
    for(var i = 0; i < countNum.length; i++){
        if(countNum[i] == ' '){
            countNum.splice(i, 1);
        }
        else if(i >= 16){
            countNum.splice(i, 1);
        }
    }
    if(countNum.length > 4){
        countNum.splice(4, 0, ' ');
    }
    if(countNum.length > 9){
        countNum.splice(9, 0, ' ');
    }
    if(countNum.length > 14){
        countNum.splice(14, 0, ' ');
    }

    setInputNum(countNum.join(''));
}

function preencherCampoNome(e){
    const countNome = e.target.value.split('');
    for(var i = 0; i<countNome.length; i++){
        if(i >= 50){
            countNome.splice(i, 1);
        }
    }
    setInputNome(countNome.join(''));
}

function preencherCampoDate(e){
    const countDate = e.target.value.split('');
    for(var i = 0;i<countDate.length; i++){
        if(i >= 2){
            countDate.splice(i, 1);
        }
    }
    e.target.className === 'date-month' ? setInputMonth(countDate.join('')) : setInputYear(countDate.join('')); 
}

function preencherCvc(e){
    const countCvc = e.target.value.split('');
    for(var i=0;i<countCvc.length;i++){
        if(i >= 3){
            countCvc.splice(i, 1);
        }
    }

    setInputCvc(countCvc.join(''));
}

function handleClick(e){
    e.preventDefault();
    const nome = document.querySelector("#name");
    const number = document.querySelector("#number");
    const dateMonth = document.querySelector(".date-month");
    const dateYear = document.querySelector(".date-year");
    const cvc = document.querySelector("#cvc")

    const dados = [nome,number,dateMonth,dateYear,cvc];
    const h6 = document.querySelectorAll(".form h6");
    var validado = false;

    for(var i=0;i<dados.length;i++){
        if(dados[i].value == ''){
            dados[i].style.border = "0.5px solid #de4a4a";
            if(i == 2 || i == 3){
                h6[2].innerHTML = "Can't be blank";
            }
            else{
                h6[i].innerHTML = "Can't be blank";
            }
        }
        else{
            dados[i].style.border = "0.5px solid #dedede";
            h6[i].innerHTML = "";
            validado = true;
        }
    }

    const srcMatchName = dados[0].value.match(/^[A-Z]{1}[a-z]{1,}[ ]{1}[A-Za-z]{1,}/g);
    if(srcMatchName === null){
        dados[0].style.border = "0.5px solid #de4a4a";
        validado = false;
        if(dados[0].value != ''){
            h6[0].innerHTML = "Wrong format, put you correct name";
        }
    }

    const srcMatchNum = dados[1].value.match(/^[0-9]{4}[ ][0-9]{4}[ ][0-9]{4}[ ][0-9]{4}$/g);
    if(srcMatchNum === null){
        dados[1].style.border = "0.5px solid #de4a4a";
        validado = false;
        if(dados[1].value != ''){
            h6[1].innerHTML = "Wrong format, only numbers";
        }
    }

    for(var x=2; x<4; x++){
        const srcMatchDate = dados[x].value.match(/^[0-9]{2}$/g);
        if(srcMatchDate === null){
            dados[x].style.border = "0.5px solid #de4a4a";
            validado = false;
            if(dados[x].value != ''){
                h6[2].innerHTML = "Wrong format, only numbers";
            }
        }
    }

    const srcMatchCvc = dados[4].value.match(/^[0-9]{3}$/g);
    if(srcMatchCvc === null){
        dados[4].style.border = "0.5px solid #de4a4a";
        validado = false;
        if(dados[4].value != ''){
            h6[4].innerHTML = "Wrong format, only numbers";
        }
    }

    if(validado === true){
        props.liberar(true);
        props.preenchercard(dados);
    }
    
}

    return(
        <div className='form'>
            <form>
                <p>cardholder name</p>
                <input type="text" id="name" value={inputNome} onChange={(e) => {preencherCampoNome(e)}} placeholder='e.g. Jane Aplessed'/>
                <h6></h6>
                <p>card number</p>
                <input type="text" id="number" value={inputNum} onChange={(e) => preencherCampoNum(e)} placeholder='e.g. 1234 5678 9123 0000'/>
                <h6></h6>
                <div className='box-date-cvc'>
                    <div className='date-exp'>
                        <p>exp.date(mm/yy)</p>
                        <input type="text" value={inputMonth} onChange={(e) => preencherCampoDate(e)} className='date-month' placeholder='MM'/>
                        <input type="text" value={inputYear} onChange={(e) => preencherCampoDate(e)} className='date-year' placeholder='YY'/>
                        <h6></h6>
                    </div>
                    <div className='box-cvc'>
                        <p>cvc</p>
                        <input type="text" value={inputCvc} onChange={(e) => preencherCvc(e)} id="cvc" placeholder='e.g. 123'/>
                        <h6 style={{display:"none"}}></h6>
                        <h6></h6>
                    </div>
                </div>
                <button onClick={(e) => handleClick(e)}>Confirm</button>
            </form>    
        </div>
    )
}

export default Form;