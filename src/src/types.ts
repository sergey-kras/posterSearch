export interface SearchObject {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}

export interface SearchResponse {
    Search?: SearchObject[];
    totalResults?: string;
    Response: boolean;
    Error?: boolean;
}
