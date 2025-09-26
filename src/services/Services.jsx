import { useInView } from 'react-intersection-observer';
import './Services.css'
import CountUp from 'react-countup'
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';

function Services(){
    const { ref, inView } = useInView({
        triggerOnce: false,   // triggers every time entry/ exit
        threshold: 0.2,      // 20% of div must be visible
    });
    return(
        <>
            <div className="servcontainer">
                <h3>Payanam Service's</h3>
                <div className="servcontent">
                        <div className="services" ref={ref}>
                            <i className="fa-solid fa-bus"></i>
                            <h5>{ inView && <CountUp start={0} end={20} duration={3} delay={0.1} />}+ buses </h5>
                        </div>
                        <div className="services">
                            <i className="fa-solid fa-route"></i>
                            <h5>{ inView && <CountUp start={0} end={12} duration={3} delay={0.1} />}+ bus routes</h5>
                        </div>
                        <div className="services">
                            <i className="fa-solid fa-headset"></i>
                            <h5> 24/7 Customer Support</h5>
                        </div>
                        <div className="services">
                            <i className="fa-solid fa-money-bill-trend-up"></i>
                            <h5>Instant Refund's</h5>
                        </div>
                        <div className="services">
                            <i className="fa-solid fa-money-bill-transfer"></i>
                            <h5>Secure Transaction</h5>
                        </div>
                        <div className="services">
                            <InsertEmoticonIcon style={{ color: "whitesmoke" , width: "70px", height: "50px", marginTop: "14px",position : "relative" }} />
                            <h5>{ inView && <CountUp start={0} end={1000} duration={10} delay={0.5} />}+ Happy Customers</h5>
                        </div>
                    
                </div>
            </div>
            
            
            
            {/*  <i className="fa-solid fa-comments"></i> reviews */}
        </>
    )
}

export default Services
