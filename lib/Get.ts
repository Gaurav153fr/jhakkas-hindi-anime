import { sql } from "@vercel/postgres";
export async function GetAllSeries() {
  try {
    const response = await sql`SELECT * FROM series;`;
    if (!response || !response) {
      throw new Error(`Failed to fetch series`);
    }
    const data = response;
    //  console.log('Series data:', data.rows,"hfdhfhfhffffffffffff");
    return data.rows;
  } catch (error) {
    console.error("Error fetching series:", error);
    throw error;
  }
}

export async function getSeriesByQuery(searchTerm: string) {
  try {
    const response = await sql`
            SELECT * FROM series
            WHERE name ILIKE ${"%" + searchTerm + "%"};
        `;

    if (!response) {
      throw new Error(`Failed to fetch series`);
    }

    return response.rows;
  } catch (error: any) {
    console.error("Error fetching series:", error);
    throw new Error("Error fetching series: " + error.message);
  }
}

export const GetEpisodeById = async (id: string) => {
  try {
    const result = await sql`SELECT * FROM episode where series_id=${id};`;
    //console.log(result.rows)
    return result.rows;
  } catch (error) {
    console.error("Error fetching episode by ID:", error);
    throw error;
  }
};

export async function GetUrl(id: number, ep_no: number) {
  const idS = id.toString();
  const epS = ep_no.toString();
  try {
    const result =
      await sql`SELECT url FROM episode where series_id=${idS} and ep_no=${epS};`;
      console.log(result.rows[0].url);
      
    return result.rows[0].url;
  } catch (error) {
    console.error("Error fetching URL:", error);
    throw error;
  }
}

interface NewEpisode {
  series_name: string;
  ep_no: string;
  url: string;
  series_id: string;
}

// Define a function to fetch row data by ID
export async function fetchRowById(id: string): Promise<Row | null> {
  try {
    // Construct the API URL with the provided ID
    const url = `/api/series?id=${id}`;

    // Fetch the data from the API
    const response = await fetch(url, { cache: "force-cache" });

    // Check if the response is successful
    if (!response.ok) {
      throw new Error("Failed to fetch row data");
    }

    // Parse the JSON response
    const data = await response.json();

    // Return the first row from the response (assuming the API returns an array of rows)
    return data.rows && data.rows.length > 0 ? data.rows[0] : null;
  } catch (error) {
    console.error("Error fetching row data:", error);
    return null; // Return null in case of an error
  }
}

export async function GetSlugById(id: number) {
  try {
    const response = await sql`SELECT slug FROM series where id=${id};`;
    if (!response || !response) {
      throw new Error(`Failed to fetch series`);
    }
    const data = response;
    //  console.log('Series data:', data.rows,"hfdhfhfhffffffffffff");
    return data.rows[0].slug;
  } catch (error) {
    console.error("Error fetching series:", error);
    throw error;
  }
}
