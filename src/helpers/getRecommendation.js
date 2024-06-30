import { getToken } from "./getToken";

export async function getRecommendation(id) {
  await  getToken();
  const token = localStorage.getItem("token");
  let res = await fetch(
    `https://api.spotify.com/v1/recommendations?market=IN&&seed_tracks=${id}&limit=10`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  if (res.ok) {
    let data = await res.json();
    return data;
  }
}
