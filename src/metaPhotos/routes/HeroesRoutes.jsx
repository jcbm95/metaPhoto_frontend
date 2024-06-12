import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../../ui';
import { DcPage, HeroPage, MarvelPage, PhotoPage, SearchPage, InfoPhotoPage, SearchPhotoPage } from '../pages';

export const HeroesRoutes = () => {
  return (
    <>
        <Navbar />

        <div className="container">
            <Routes>
                <Route path="marvel" element={<MarvelPage />} />
                <Route path="photo" element={<PhotoPage />} />
                <Route path="photo/:id" element={<InfoPhotoPage />} />
                <Route path="dc" element={<DcPage />} />
                
                <Route path="search" element={<SearchPage />} />
                <Route path="searchPhoto" element={<SearchPhotoPage />} />
                <Route path="hero/:id" element={<HeroPage />} />
                                

                <Route path="/" element={<Navigate to="/marvel" />} />

            </Routes>
        </div>


    </>
  )
}
