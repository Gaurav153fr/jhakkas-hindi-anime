

 interface newep{
    series_name: string,
    ep_no: string,
    url: string,
    series_id: string
 }
export async function NewEpi( e:newep) {
   
  try {
    const result =await fetch(`/api/new-episode?seriesName=${e.series_name}&epNo=${e.ep_no}&url=${e.url}&seriesId=${e.series_id}`)
      //console.log(result,"jhuhhjvhjv")
    return result
  } catch (error) {
    console.log(error)

    return error;
  }
}


export const EditEpisodeById =async(seriesId:string,episodeId:string,newUrl:string)=> {

  try {
    const response = await fetch(`/api/episodes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Specify the content type if sending JSON data
      },
      body: JSON.stringify({ seriesId: seriesId,episodeId:episodeId,newUrl:newUrl }),
    });
    if (response.ok) {
      alert('post request succefull' )
    console.log(Promise.resolve(response).then(res=>{return res.json()}),"yahi hai response")
     
      // Handle success as needed
    } else {
      console.error('Post request failed!');
      // Handle error response
    }
  // try {
  //     const result = await sql`SELECT * FROM episode where series_id=${seriesId};`;
  //     console.log(result.rows)
  //     return result.rows;
   } catch (error) {
      console.error('Error fetching episode by ID:', error);
      throw error;
   }
}



export const EditSeriesById =async(id:string,name:string,slug:string,url:string,story:string)=> {

  try {
    const response = await fetch(`/api/series`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json', // Specify the content type if sending JSON data
      },
      body: JSON.stringify({id:id, name: name,slug:slug,url:url,story:story }),
    });
    if (response.ok) {
      alert('post request succefull' )
    console.log(Promise.resolve(response).then(res=>{return res.json()}),"yahi hai response")
     
     return response
    } else {
      console.error('Post request failed!',response);
      // Handle error response
    }
  
   } catch (error) {
      console.error('Error fetching episode by ID:', error);
      throw error;
   }
}
