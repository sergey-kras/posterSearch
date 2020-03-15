import axios, { AxiosResponse } from 'axios';

const http = axios.create({
    baseURL: 'http://www.omdbapi.com/?apikey=1977b733',
    timeout: 1000,
});

export function search(searchString: string) {
    return http({
        method: 'get',
        params: {
            s: searchString,
        }
    })
        .then((response: AxiosResponse) => response.data.Search)
        .catch(() => false);
}
