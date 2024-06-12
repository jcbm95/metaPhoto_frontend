

export const GetPhotosSearch = async( photoTitle = '', albumTitle = '', email = '' ) => {
    let photosRaw;
    if ( photoTitle.length === 0 && albumTitle.length === 0 && email.length === 0 ) photosRaw =  await fetch(`http://34.207.85.125:3000/externalapi/photos/`);
    else if( photoTitle.length > 0 && albumTitle.length === 0 && email.length === 0 ) {
        photosRaw =  await fetch(`http://34.207.85.125:3000/externalapi/photos?title=${photoTitle}`)
    } else if( photoTitle.length === 0 && albumTitle.length > 0 && email.length === 0 ) {
        photosRaw =  await fetch(`http://34.207.85.125:3000/externalapi/photos?album.title=${albumTitle}`)
    } else if( photoTitle.length === 0 && albumTitle.length === 0 && email.length > 0 ) {
        photosRaw =  await fetch(`http://34.207.85.125:3000/externalapi/photos?album.user.email=${email}`)
    } else if( photoTitle.length > 0 && albumTitle.length > 0 && email.length === 0 ) {
        photosRaw =  await fetch(`http://34.207.85.125:3000/externalapi/photos?title=${photoTitle}&album.title=${albumTitle}`)
    } else if( photoTitle.length > 0 && albumTitle.length === 0 && email.length > 0 ) {
        photosRaw =  await fetch(`http://34.207.85.125:3000/externalapi/photos?title=${photoTitle}&album.user.email=${email}`)
    } else if( photoTitle.length === 0 && albumTitle.length > 0 && email.length > 0 ) {
        photosRaw =  await fetch(`http://34.207.85.125:3000/externalapi/photos?album.title=${albumTitle}&album.user.email=${email}`)
    } else if( photoTitle.length > 0 && albumTitle.length > 0 && email.length > 0 ) {
        photosRaw =  await fetch(`http://34.207.85.125:3000/externalapi/photos?title=${photoTitle}&album.title=${albumTitle}&album.user.email=${email}`)
    }
    const photosJson = await photosRaw.json();
    return photosJson;

}


