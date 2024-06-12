import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string'

import { useForm } from '../../hooks/useForm';
import { MetaPhotoCard } from '../components';
import { GetPhotosSearch } from '../helpers/getPhotosSearch';
import { useEffect, useState } from 'react';

export const SearchPhotoPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [photos, setPhotos] = useState([]);
  const { q = '' } = queryString.parse( location.search );
  const showSearch = (q.length === 0);
  
  const { photoTitle, albumTitle,email, onInputChange } = useForm({
    photoTitle: '',
    albumTitle: '',
    email: ''
  });
  useEffect(() => {
    GetPhotosSearch(photoTitle, albumTitle, email).then(setPhotos);
  }, []);
  const showError  = (q.length > 0) && photos.length === 0;
  const onSearchSubmit = (event) =>{
    event.preventDefault();
    // if ( searchText.trim().length <= 1 ) return;
    GetPhotosSearch(photoTitle, albumTitle, email).then(setPhotos);
    navigate(`?q=${ photoTitle }?q=${ albumTitle }?q=${ email }`);
  }
  return (
     <>
      <h1>Search</h1> 
      <hr />

      <div className="row">

          <div className="col-5">
            <h4>Searching</h4>
            <hr />
            <form onSubmit={ onSearchSubmit }>
              <input 
                type="text"
                placeholder="Search by photo tittle"
                className="form-control"
                name="photoTitle"
                autoComplete="off"
                value={ photoTitle }
                onChange={ onInputChange }
              />
              <input 
                type="text"
                placeholder="Search by album tittle"
                className="form-control"
                name="albumTitle"
                autoComplete="off"
                value={ albumTitle }
                onChange={ onInputChange }
              />
              <input 
                type="text"
                placeholder="Search by user mail"
                className="form-control"
                name="email"
                autoComplete="off"
                value={ email }
                onChange={ onInputChange }
              />

              <button className="btn btn-outline-primary mt-1">
                Search
              </button>
            </form>
          </div>

          <div className="col-7">
            <h4>Results</h4>
            <hr />

           {
              ( q === '' )
                ? <div className="alert alert-primary">Search for a photo</div>
                : ( photos.length === 0 ) 
                  && <div className="alert alert-danger">No photo with <b>{ q }</b></div>
            }
            
            <div className="alert alert-primary animate__animated animate__fadeIn" 
                style={{ display: showSearch ? '' : 'none' }}>
              Search for a photo
            </div>

            <div className="alert alert-danger animate__animated animate__fadeIn" 
                style={{ display: showError ? '' : 'none' }}>
              No photo with <b>{ q }</b>
            </div>


            {
              photos.map( photo => (
                <MetaPhotoCard key={ photo.id } {...photo } />
              ))
            }

          </div>
      </div>
   
    </>
  )
}
