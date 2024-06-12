
export const getAllPhotos = async(publisher) => {
  const photosRaw =  await fetch('http://34.207.85.125:3000/externalapi/photos/')
  
  return (
    photosRaw.json()
  )
}
