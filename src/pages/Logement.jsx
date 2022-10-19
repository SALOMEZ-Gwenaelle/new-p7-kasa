import React, { useEffect, useState } from 'react';
import Carousel from './../components/Carousel';
import { useParams, Navigate } from 'react-router-dom';
import appartments from '../datas/logements.json'
import Dropdown from '../components/Dropdown';

import Tags from '../components/Tags'
import Rating from '../components/Rating';
import Host from '../components/Host';

function Logement() {
    const { id } = useParams(); /* on récupère le paramètre récupéré dans l'URL */
    const [logementData, setlogementData] = useState({});  // on définit une fonction setLogementData qui rempliras la variable logementData qui représente un l'état de notre composant
    const [loaded, setLoaded] = useState(false);    // jalon qui permet de savoir si on a trouvé dans l'API (ici le fichier JSON) l'appartement dont l'ID a été récupéré via l'URL

    useEffect(()=>{
        try {
            const logementData = appartments.find(object => object.id === id);  // on récupère les logements dans le json
            setlogementData(logementData);  // on met les informations du logement dans le state
            setLoaded(true);
        } catch (error) {
            return(
                <div>
                    {error}
                    <Navigate to="/erreur" />   {/* Redirige automatiquement vers la page d'erreur */}
                </div>
            )
        }
    }, [id]);

    if(loaded && logementData !== undefined) {
        return (
            <div className="logement">
                <Carousel pictures={logementData.pictures} />
                <div className='logementHeader'>
                    <div className='logementHeaderIntro'>
                        <h1 className='logementHeaderTitle'>
                            {logementData.title}
                        </h1>
                        <span className='logementHeaderLocation'>
                            {logementData.location}
                        </span>
                        {logementData.tags.length > 0 ? <Tags tags={logementData.tags} /> : ''}
                        
                    </div>
                    <div className='logementHeaderHost'>
                        {Object.keys(logementData.host).length > 0 ? <Host host={logementData.host} /> : ''}
                            
                        {logementData.rating.length > 0 ? <Rating rating={logementData.rating} /> : ''}
                    </div>
                </div>
                <div className='logementInfo'>
                    <div className='logementDescription'>
                        <Dropdown title='Description' content={logementData.description} />
                    </div>
                    <div className='logementEquipments'>
                        <Dropdown title='&Eacute;quipements' content={logementData.equipments} />
                    </div>
                </div>
    
    
            </div>
        )
    } else if(!loaded) {
        return(<div className="logement"><p>Chargement !</p></div>)
    } else {
        return(
            <div>
                <Navigate to="/erreur" />   {/* Redirige automatiquement vers la page d'erreur */}
            </div>
        )
    }
    
}




export default Logement