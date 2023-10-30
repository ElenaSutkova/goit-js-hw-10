const BASE_URL = 'https://api.thecatapi.com/v1';
const API_KEY = 'live_i98dpWNl6ldhro6f1w2pvQnOa8CCFGXSICCV2SKVihTxBMnlieEVLDCQAGLtspVN';

export function fetchBreeds() {
    return fetch(
        `${BASE_URL}/breeds?api_key=${API_KEY}`
    ).then((resp) => {
        if (!resp.ok) {
            throw new Error(resp.statusText || resp.status);
        }
        return resp.json()
    })
};

export function fetchCatByBreed(breedId) {
    return fetch(
        `${BASE_URL}/images/search?breed_ids=${breedId}&api_key=${API_KEY}`
    ).then((resp) => {
        if (!resp.ok) {
            throw new Error(resp.statusText || resp.status)
        }
        return resp.json()
    })
}