import Err from '../assets/error-404.jpg'

function NotFound(){
    return(
        <>
            <div className="container">
                <img src={Err} alt="Error" style={{width: "80%", marginLeft:"10%"}} />
            </div>
            
        </>
    )
}

export default NotFound