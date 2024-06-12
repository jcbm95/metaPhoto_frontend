
export const getPhotosPagination = async(limit= '', offSet = '') => {


    let request = '';
    console.log(limit, offSet)
    request = `http://34.207.85.125:3000/externalapi/photos?limit=${limit}&offset=${offSet}`
    console.log(request)
    const photosRaw =  await fetch(request)
    
    return (
      photosRaw.json()
    )
  }
  