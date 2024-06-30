import { getToken } from "./getToken";

export async function getSearch(query, offset,limit=10) {
  await  getToken();
  const token = localStorage.getItem("token");
  let res = await fetch(
    `https://api.spotify.com/v1/search?q=${query}&type=album%2Ctrack&market=IN&limit=${limit}&offset=${offset}&include_external=audio`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  if (res.ok) {
    let data = await res.json();
    return [data.tracks.items,data.tracks.total];
  }
}
