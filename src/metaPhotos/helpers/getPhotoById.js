
export const getPhotosById = async(id) => {
  const photosRaw =  await fetch(`http://34.207.85.125:3000/externalapi/photos/${id}`)
  return (
    photosRaw.json()
  )
}
