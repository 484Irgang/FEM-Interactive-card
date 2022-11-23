import "./style.css"

function Confirmed(){
    return(
        <div className="confirmed">
            <div className="icone"></div>
            <h2>Thank you!</h2>
            <p>We've added your card details</p>
            <button onClick={() => window.location.reload()}>Continue</button>
        </div>
    )
}

export default Confirmed;