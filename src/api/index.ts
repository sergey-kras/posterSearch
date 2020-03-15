import axios, { AxiosResponse } from 'axios';
import { SearchResponse } from '../src/types';

const http = axios.create({
    baseURL: 'http://www.omdbapi.com/?apikey=1977b733',
    timeout: 1000,
});

export function search(searchString: string): Promise<SearchResponse> {
    return http({
        method: 'get',
        params: {
            s: searchString,
        }
    })
        .then((response: AxiosResponse) => response.data)
        .catch((error) => { return false });
}

export function searchFilm(filmId: string): Promise<SearchResponse> {
    return http({
        method: 'get',
        params: {
            i: filmId,
        }
    })
        .then((response: AxiosResponse) => response.data)
        .catch((error) => { return false });
}
