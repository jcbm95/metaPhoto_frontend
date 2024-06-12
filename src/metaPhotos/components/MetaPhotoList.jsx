/* eslint-disable react/prop-types */

import { useEffect, useState } from 'react';
import {  MetaPhotoCard } from '.';
import { getAllPhotos, getPhotosPagination } from '../helpers';

export const MetaPhotoList = ({ publisher }) => {
    const [photos, setPhotos] = useState([]);
    const [limit, setLimit] = useState(25);
    const [offset, setOffset] = useState(0);
    // const heroes = useMemo( () => getHeroesByPublisher( publisher ), [ publisher ]);
    useEffect(() => {
        const fetchPhotos = async () => {
            const allPhotos = await getAllPhotos(publisher);
            setPhotos(allPhotos);
        };

        fetchPhotos();
    }, [publisher]);
    console.log(photos);
    const onchangeDropdownLimit = async(e) => {
        console.log(e.target.value)
        const limitPhotos = await getPhotosPagination(e.target.value, offset);
        setLimit(e.target.value);
        setPhotos(limitPhotos);
    }
    const onchangeDropdownOffset =async (e) => {
        console.log(e.target.value)
        const offsetPhotos = await getPhotosPagination(limit, e.target.value);
        setOffset(e.target.value);
        setPhotos(offsetPhotos);
    }
    return (
        <>
        <h4>Filtrar cuantos elementos</h4>
        <select className="form-select" onChange={onchangeDropdownLimit}>
            <option value="10">10</option>
            <option value="25" selected>25</option>
            <option value="50">50</option>
            <option value="100">100</option>
        </select>
        <h4>offset</h4>
        <select className="form-select" onChange={onchangeDropdownOffset}>
            <option value="0" selected >0</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
        </select>
        <hr />
        <div className="row rows-cols-1 row-cols-md-3 g-3">
            {
                photos.map( photo => (
                    <MetaPhotoCard 
                        key={ photo.id } 
                        { ...photo }
                    />
                ))
            }
        </div>
        </>
    )
}
