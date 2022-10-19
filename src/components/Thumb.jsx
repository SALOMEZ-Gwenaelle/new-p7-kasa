import {Link} from "react-router-dom";

function Thumb(appartment) {
    const appart = appartment.appart;
    console.log(appart);
    return(
        <li className="thumbAppartment">
            <img src={appart.cover} alt="title" className="thumbAppartmentImage" />
            <Link to={'/Logement/'+ appart.id} className='thumbAppartmentLink'>
                {appart.title}
            </Link>
        </li>
    )
}

export default Thumb;