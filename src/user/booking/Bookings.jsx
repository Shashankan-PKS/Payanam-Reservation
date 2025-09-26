import './Bookings.css'

import Navbar from '../navbar/Navbar.jsx'

function Bookings(){
    return(
        <>
            <Navbar />
            <div className="bookcontainer">
                <h3><i className="fa-solid fa-clock-rotate-left"></i>Booking History</h3>
                <div className="bookcontent">
                    <table class="table table-bordered table-striped table-hover ">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">From</th>
                                <th scope="col">Destination</th>
                                <th scope="col">Seats</th>
                                <th scope="col">Price</th>
                                <th scope="col">Date & Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Jason</td>
                                <td>Thanjavur</td>
                                <td>Bangalore</td>
                                <td>A1,A2</td>
                                <td>700</td>
                                <td>15-09-2025 & 00:10 AM</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jason</td>
                                <td>Thanjavur</td>
                                <td>Chennai</td>
                                <td>E3</td>
                                <td>700</td>
                                <td>21-09-2025 & 22:50 PM</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Jason</td>
                                <td>Chennai</td>
                                <td>Bangalore</td>
                                <td>F4</td>
                                <td>500</td>
                                <td>25-09-2025 & 23:25 PM</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            
        </>
    )
}

export default Bookings