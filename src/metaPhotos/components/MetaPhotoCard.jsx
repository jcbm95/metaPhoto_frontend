/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const CharactersByHero = ({ alter_ego, characters}) => {
    return ( alter_ego === characters )
     ? <></>
     : <p>{ characters }</p>;
}


export const MetaPhotoCard = ({ 
    id,
    title,
    url,
    thumbnailUrl,
}) => {


    return (
        <div className="col animate__animated animate__fadeIn">
            <div className="card">

                <div className="row no-gutters">
                    
                <div className="col-4">
                        <img src={ thumbnailUrl } className="card-img" alt={ id } />
                    </div>

                    <div className="col-8">

                        <div className="card-body">

                            <h5 className="card-title">{ title }</h5>
                            {/* <p className="card-text">{ alter_ego }</p> */}
                            {/* <CharactersByHero characters={ characters } alter_ego={ alter_ego } />

                            <p className="card-text">
                                <small className="text-muted">{ first_appearance }</small>
                            </p> */}

                            <Link to={`/photo/${ id }`}>
                                Más..
                            </Link>

                            
                        </div>

                    </div>


                </div>

            </div>
        </div>
    )
}
