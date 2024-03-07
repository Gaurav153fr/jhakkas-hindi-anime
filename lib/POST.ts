

 interface newep{
    series_name: string,
    ep_no: string,
    url: string,
    series_id: string
 }
export async function NewEpi( e:newep) {
   
  try {
    const result =await fetch(`/api/new-episode?seriesName=${e.series_name}&epNo=${e.ep_no}&url=${e.url}&seriesId=${e.series_id}`)
      console.log(result,"jhuhhjvhjv")
    return result
  } catch (error) {
    console.log(error)

    return error;
  }
}