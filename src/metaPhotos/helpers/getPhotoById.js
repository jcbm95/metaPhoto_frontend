
export const getPhotosById = async(id) => {
  const photosRaw =  await fetch(`http://localhost:3001/externalapi/photos/${id}`)
  
  return (
    photosRaw.json()
  )
}
