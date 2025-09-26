import Buses from '../buses/Buses'
import Navbar from '../navbar/Navbar'
function Userhome() {
    return(
        <>  
            <Navbar />
            <div data-bs-spy="scroll" data-bs-target="#navbar-example2"  data-bs-smooth-scroll="true" className="scrollspy-example " >
                <div id='scrollspyHeading1'>
                    <Buses />
                </div>
            </div>
        </>
    )
}
export default Userhome