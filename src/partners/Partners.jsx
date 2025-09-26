import one from '../assets/OrangeTravels.jpg'
import two from '../assets/Dreamline.jpg'
import three from '../assets/Besttravels.jpg'
import four from '../assets/MeghanaTravels.jpg'
import five from '../assets/SrTravels.jpg'
import six from '../assets/RavinaTravels.jpg'
import './Partners.css'

function Partners(){
    return(
        <>
            <div className="partcontainer">
                <h3>Top Payanam Travel partner's</h3>
                <div className="partcontent">
                    <div className="partners">
                        <img src={one} alt="" />
                    </div>
                    <div className="partners">
                        <img src={two} alt="" />
                    </div>
                    <div className="partners">
                        <img src={three} alt="" />
                    </div>
                    <div className="partners">
                        <img src={four} alt="" />
                    </div>
                    <div className="partners">
                        <img src={five} alt="" />
                    </div>
                    <div className="partners">
                        <img src={six} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Partners