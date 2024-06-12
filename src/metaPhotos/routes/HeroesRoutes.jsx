import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../../ui';
import {  PhotoPage, InfoPhotoPage, SearchPhotoPage } from '../pages';

export const HeroesRoutes = () => {
  return (
    <>
        <Navbar />

        <div className="container">
            <Routes>
                <Route path="photo" element={<PhotoPage />} />
                <Route path="photo/:id" element={<InfoPhotoPage />} />
                <Route path="searchPhoto" element={<SearchPhotoPage />} />
                              
                <Route path="/" element={<Navigate to="/photo" />} />

            </Routes>
        </div>


    </>
  )
}
