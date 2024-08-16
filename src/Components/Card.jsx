import propTypes from 'prop-types'

const Card = ( props ) => {
    console.log(props)
   
function createFeatures( object ) { 
        const lists = object.cardData.features.map( ( feature, ind ) => (
            <p key={ind} className={( feature.isIncluded ) ? "" : "notIncluded"}><span className='span'>{( feature.isIncluded ) ? <i className='bx bx-check'></i> : <i className='bx bx-x'></i>}</span>{feature.text}</p>
        ) )
        return lists;
    }
    function btnHighLight( object ) {
        const btnClass = ( object.cardData.btn ) ? "btn btnHighLight" : "btn";
        return btnClass;
    }
    return (
        <>
            <div className='container'>
                <div className='Header'>
                    <h5 style={{ color: "grey",marginBottom:"0px" }}>{props.cardData.tittle}</h5>
                    <h1 style={{margin:"unset",fontSize:"2em"}}>{props.cardData.price}</h1>  
                </div>
                <hr className="custom-line" />
                <div className='footer'>
                    <div className="features" style={{display:"flex",flexDirection:"column",alignContent:"flex-start",alignItems:"flex-start",textAlign:"left"}}>
                        <p style={{fontWeight:"600",fontSize:"15px"}}>
                            {createFeatures( props )}
                        </p>
                    </div>
                    <button type='button' className={btnHighLight( props)}>BUTTON</button>
                </div>  
            </div>
        </>
    )
}
Card.propTypes = {
    cardData: propTypes.string.isRequired
}

export default Card
