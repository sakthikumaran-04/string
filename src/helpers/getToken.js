const clientId = import.meta.env.VITE_CLIENT_ID;
const clientSecret = import.meta.env.VITE_CLIENT_SECRET;
const tokenEndpoint = import.meta.env.VITE_TOKEN_ENDPOINT;

const data = new URLSearchParams();
data.append('grant_type', 'client_credentials');
data.append('client_id', clientId);
data.append('client_secret', clientSecret);

export async function getToken(){

    const token = await fetch(tokenEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: data
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        localStorage.setItem("token",data.access_token)
    })
    .catch(error => {
        console.error('Error fetching access token:', error);
    });

    return token
}