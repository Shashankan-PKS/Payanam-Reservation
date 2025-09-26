import Accordion from '@mui/material/Accordion'
import './Faq.css'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Paper from '@mui/material/Paper'
import { useState } from 'react'

function Faq(){

    const [expand , setExpand] = useState(false) 

    const handleChange = (panel) => (event, isExpanded) => {
        setExpand( isExpanded ? panel : false);
    }

    return(
        <>
            <div className="faqcontainer">
                <h3>Payanam Online Bus Bookig FAQ's</h3>
                <div className="faqcontent">
                    <Accordion expanded={expand === 'panel1'} onChange={handleChange('panel1')} style={{backgroundColor : "whitesmoke" , borderRadius : "5px" , marginBottom : "10px"}} component={Paper} elevation={4}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} style={{ color : "rgb(59, 59, 159)"}} >
                            <Typography><strong>Q. How do you do Online bus reservation in Payanam?</strong></Typography>
                        </AccordionSummary>
                        <AccordionDetails style={{ backgroundColor : "white" , borderRadius : "5px"}}>
                            <strong>Ans: </strong>Booking a bus ticket online in India is easy with Payanam. Simply enter the Leaving from (Origin City) -- Going to (destination city) details along with the date you wish to travel in the bus search option on the site. Within seconds you will be given a list of available running buses for your route. Select the bus that best suits you, then just follow the bus ticket booking process by selecting your seat, providing passenger details and completing the payment process. Upon successful booking confirmation, you will receive an e-ticket over SMS/whatsapp and email.
                        </AccordionDetails>
                    </Accordion>

                    <Accordion expanded={expand === 'panel2'} onChange={handleChange('panel2')} style={{backgroundColor : "whitesmoke" , borderRadius : "5px" , marginBottom : "10px"}} component={Paper} elevation={4}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} style={{ color : "rgb(59, 59, 159)"}}>
                            <Typography><strong>Q. How to Sign Up Payanam?</strong></Typography>
                        </AccordionSummary>
                        <AccordionDetails style={{ backgroundColor : "white" , borderRadius : "5px"}}>
                            <strong>Ans: </strong>You can sign-up using your mobile number. Payanam offers a one-step sign-up & login process with just an OTP received on your mobile.
                        </AccordionDetails>
                    </Accordion>

                    <Accordion expanded={expand === 'panel3'} onChange={handleChange('panel3')} style={{backgroundColor : "whitesmoke" , borderRadius : "5px", marginBottom : "10px"}} component={Paper} elevation={4}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} style={{ color : "rgb(59, 59, 159)"}}>
                            <Typography><strong>Q. How do you do Online bus reservation in Payanam?</strong></Typography>
                        </AccordionSummary>
                        <AccordionDetails style={{ backgroundColor : "white" , borderRadius : "5px"}}>
                            <strong>Ans: </strong>No, you can book bus tickets as a guest user by providing required passenger details. However, we recommend you to create an account so that you get the latest information about bus availability, ticket details and other features which will help you book faster during future transactions.
                        </AccordionDetails>
                    </Accordion>

                    <Accordion expanded={expand === 'panel4'} onChange={handleChange('panel4')} style={{backgroundColor : "whitesmoke" , borderRadius : "5px", marginBottom : "10px"}} component={Paper} elevation={4}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} style={{ color : "rgb(59, 59, 159)"}}>
                            <Typography><strong>Q. Do I need to create an account to book bus tickets on Payanam?</strong></Typography>
                        </AccordionSummary>
                        <AccordionDetails style={{ backgroundColor : "white" , borderRadius : "5px"}}>
                            <strong>Ans: </strong> No, there are no additional charges for booking bus tickets online.
                        </AccordionDetails>
                    </Accordion>

                    <Accordion expanded={expand === 'panel5'} onChange={handleChange('panel5')} style={{backgroundColor : "whitesmoke" , borderRadius : "5px"}} component={Paper} elevation={4}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} style={{ color : "rgb(59, 59, 159)"}}>
                            <Typography><strong>Q. What documents should I carry while boarding the bus?</strong></Typography>
                        </AccordionSummary>
                        <AccordionDetails style={{ backgroundColor : "white" , borderRadius : "5px"}}>
                            <strong>Ans: </strong> You can carry one of the below ID Proofs while travelling: PAN Card, Aadhar Card Voter ID Card, Driving License, Student ID Card, Passport.
                        </AccordionDetails>
                    </Accordion>

                </div>
            </div>
        </>
    )
}

export default Faq

{/* <div className="accordion " id="accordionExample">
    <div className="accordion-item">
        <h2 className="accordion-header">
            <button className="accordion-button tx-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>Q. How do you do Online bus reservation in Payanam?</strong>
            </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse  collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body bg-body-secondary">
                <strong>Ans: </strong>Booking a bus ticket online in India is easy with Payanam. Simply enter the Leaving from (Origin City) -- Going to (destination city) details along with the date you wish to travel in the bus search option on the site. Within seconds you will be given a list of available running buses for your route. Select the bus that best suits you, then just follow the bus ticket booking process by selecting your seat, providing passenger details and completing the payment process. Upon successful booking confirmation, you will receive an e-ticket over SMS/whatsapp and email.
            </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            <strong>Q. How to Sign Up Payanam?</strong>
        </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body bg-body-secondary">
            <strong>Ans: </strong>You can sign-up using your mobile number. Payanam offers a one-step sign-up & login process with just an OTP received on your mobile.
        </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <strong>Q. Do I need to create an account to book bus tickets on Payanam?</strong>
        </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body bg-body-secondary">
            <strong>Ans: </strong>No, you can book bus tickets as a guest user by providing required passenger details. However, we recommend you to create an account so that you get the latest information about bus availability, ticket details and other features which will help you book faster during future transactions.
        </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
            <strong>Q. Will I have to pay extra money for online tickets booking?</strong>
        </button>
        </h2>
        <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body bg-body-secondary">
            <strong>Ans: </strong> No, there are no additional charges for booking bus tickets online.
        </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
            <strong>Q. What documents should I carry while boarding the bus?</strong>
        </button>
        </h2>
        <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body bg-body-secondary">
            <strong>Ans: </strong> You can carry one of the below ID Proofs while travelling: PAN Card, Aadhar Card Voter ID Card, Driving License, Student ID Card, Passport.
        </div>
        </div>
    </div>
</div> */}