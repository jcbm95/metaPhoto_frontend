
export const getAllPhotos = async(publisher) => {
  const photosRaw =  await fetch('http://localhost:3001/externalapi/photos/')
  
  return (
    photosRaw.json()
  )
}
