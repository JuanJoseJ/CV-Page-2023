const URL = 'http://localhost:3001/api';

async function getData(){
    const response = await fetch(URL+'/getData', {
        method:'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response.ok) {
        return response.json();
    } else {
        throw response.text();
    }
};

const api = {getData};

export default api;