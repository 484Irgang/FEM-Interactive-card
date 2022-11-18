import './style.css'

function Form(){
    return(
        <div className='form'>
            <p>cardholder name</p>
            <input type="text" id="name"/>
            <p>card number</p>
            <input type="text" id="number"/>
            <div className='date-exp'>
                <p>exp. date (mm/yy)</p>
                <input type="text" className='date-month'/>
                <input type="text" className='date-year'/>
            </div>
            <span>cvc</span>
            <input type="text" id="cvc"/>
            <button>Confirm</button>
        </div>
    )
}

export default Form;