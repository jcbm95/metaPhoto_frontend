
export const getPhotosPagination = async(limit= '', offSet = '') => {


    let request = '';
    console.log(limit, offSet)
    request = `http://localhost:3001/externalapi/photos?limit=${limit}&offset=${offSet}`
    console.log(request)
    const photosRaw =  await fetch(request)
    
    return (
      photosRaw.json()
    )
  }
  