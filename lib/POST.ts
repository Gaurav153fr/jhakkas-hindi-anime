import toast from "react-hot-toast";

interface newep {
  series_name: string;
  ep_no: string;
  url: string;
  series_id: string;
}
export async function NewEpi(e: newep) {
  try {
    const result = await fetch(
      `/api/new-episode?seriesName=${e.series_name}&epNo=${e.ep_no}&url=${e.url}&seriesId=${e.series_id}`
    );
    toast.success("New episode created successfully");

    //console.log(result,"jhuhhjvhjv")
    return result;
  } catch (error) {
    toast.error("Failed to create new episode");

    console.log(error);

    return error;
  }
}

export const EditEpisodeById = async (
  seriesId: string,
  episodeId: string,
  newUrl: string
) => {
  try {
    const response = await fetch(`/api/episodes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Specify the content type if sending JSON data
      },
      body: JSON.stringify({
        seriesId: seriesId,
        episodeId: episodeId,
        newUrl: newUrl,
      }),
    });
    if (response.ok) {
      toast.success("post request successfull");
      console.log(
        Promise.resolve(response).then((res) => {
          return res.json();
        }),
        "yahi hai response"
      );

    } else {
      toast.error("Post request failed");

      console.error("Post request failed!");
    }
   
  } catch (error) {
    toast.error("Post request failed");

    console.error("Error fetching episode by ID:", error);
    throw error;
  }
};

export const EditSeriesById = async (
  id: string,
  name: string,
  slug: string,
  url: string,
  story: string
) => {
  try {
    const response = await fetch(`/api/series`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json", // Specify the content type if sending JSON data
      },
      body: JSON.stringify({
        id: id,
        name: name,
        slug: slug,
        url: url,
        story: story,
      }),
    });
    if (response.ok) {
      toast.success("Post request Successful");

      console.log(
        Promise.resolve(response).then((res) => {
          return res.json();
        }),
        "yahi hai response"
      );

      return response;
    } else {
      console.error("Post request failed!", response);
      toast.error("Post request failed");
    }
  } catch (error) {
    console.error("Error fetching episode by ID:", error);
    throw error;
  }
};
