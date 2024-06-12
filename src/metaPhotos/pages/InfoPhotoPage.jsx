import { useLayoutEffect,useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import {  getPhotosById } from '../helpers';


export const InfoPhotoPage = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const [photosInfo, setPhotosInfo] = useState([]);

  useLayoutEffect(() => {
    const fetchPhotos = async () => {
        const allPhotos = await getPhotosById(id);
        setPhotosInfo(allPhotos);
    };
    fetchPhotos();
}, []);
  const onNavigateBack = () => {
    navigate(-1);
  }

  if ( !photosInfo ) {
    return <Navigate to="/photo" />
  }
  return (
    <div className="row mt-5">
      <div className="col-4">
        <img 
          src={ photosInfo.url } 
          alt={ photosInfo.id }
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>

      <div className="col-8">
        <h3>{ photosInfo.title }</h3>
       { (photosInfo.album) &&(

        <ul className="list-group list-group-flush">
          <li className="list-group-item"> <b>Album :</b> { photosInfo.album.title } </li>
          <li className="list-group-item"> <b>User:</b> { photosInfo.album.user.username } </li>
          <li className="list-group-item"> <b>Email:</b> {  photosInfo.album.user.email } </li>
        </ul>

        )}
        <h5 className="mt-3"> Company </h5>
        { (photosInfo.album) &&(
        <div>

            <p><b>Name:</b> { photosInfo.album.user.company.name }</p>
            <p><b>Catch Frase:</b> { photosInfo.album.user.company.catchPhrase}</p>
            <p><b>Bs:</b> { photosInfo.album.user.company.bs}</p>
            <h5 className="mt-3"> Address </h5>
            <p><b>City:</b> { photosInfo.album.user.address.city }</p>
            <p><b>Street:</b> { photosInfo.album.user.address.street }</p>
            <p><b>Suite:</b> { photosInfo.album.user.address.suite}</p>
            <p><b>Zip Code:</b> { photosInfo.album.user.address.zipcode}</p>
        </div>
)}
        <button 
          className="btn btn-outline-primary"
          onClick={ onNavigateBack }
        >
          Regresar
        </button>

      </div>

    </div>
  )
}
