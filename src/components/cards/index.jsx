import './style.css'

function Cards(props){
    return(
        <div className='box-cards'>
            <div className='card card-1'>
                <div className='card-logo'></div>
                <h2>{props.cardnum}</h2>
                <div className="card-desc">
                    <p>{props.cardname}</p>
                    <p>{props.carddate[0]+"/"+props.carddate[1]}</p>
                </div>
            </div>
            <div className='card card-2'>
                <p>{props.cardcvc}</p>
            </div>
        </div>
    )
}

export default Cards;