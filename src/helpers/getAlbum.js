import { getToken } from "./getToken";

export async function getAlbum(id) {
  await  getToken();
  const token = localStorage.getItem("token");
  let res = await fetch(
    `https://api.spotify.com/v1/albums/${id}`,
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
