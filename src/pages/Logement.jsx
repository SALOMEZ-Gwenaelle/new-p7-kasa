import React, { useEffect, useState } from 'react';
import Carousel from './../components/Carousel';
import { useParams } from 'react-router-dom';
import appartments from '../datas/logements.json'
import Dropdown from '../components/Dropdown';

import Tags from '../components/Tags'
import Rating from '../components/Rating';
import Host from '../components/Host';

function Logement() {
    const { id } = useParams(); /* on récupère le paramètre récupéré dans l'URL */
    const [logementData, setlogementData] = useState({});  // on définit une fonction setLogementData qui rempliras la variable logementData qui représente un l'état de notre composant
    const [error, setError] = useState(null);

       
    useEffect(()=>{
        try {
            const logementData = appartments.find(object => object.id === id);  // on récupère les logements dans le json
            setlogementData(logementData);  // on met les informations du logement dans le state
        } catch (error) {
            setError(error);
        }
    }, [id]);

    if (error) {    // en, cas d'erreur du fetch du JSON
        return <span>Une erreur est apparue. Désolé pour la gêne occasionnée.</span>
    }
    
    console.log(logementData.host);
    if(Object.keys(logementData).length > 0){ // Sécurité: si notre objet n'est pas vide (il l'est au premier rendu, car le state logementData est vide), alors on affiche les infos disponibles
        return (
            <div className="logement">
                <Carousel appartId={id} />
                <div className='logementHeader'>
                    <div className='logementHeaderIntro'>
                        <h1>
                            {logementData.title}
                        </h1>
                        <span className='logementLocation'>
                            {logementData.location}
                        </span>
                        {logementData.tags.length > 0 ? <Tags tags={logementData.tags} /> : ''}
                        
                    </div>
                    <div className='logementHost'>
                        
                    {logementData.rating.length > 0 ? <Rating rating={logementData.rating} /> : ''}
                            
                        
                        
                    {Object.keys(logementData.host).length > 0 ? <Host host={logementData.host} /> : ''}
                            
                        
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
    } else {
        return <></>
    }
}




export default Logement