import React, { Component, ReactElement } from 'react';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import { search as makeSearchByApi } from '../../../api';
import { Search } from '../../components/search';
import { DetailFilm } from '../../components/detailFilm';
import {SearchResponse} from "../../types";

const MocCurrentFilm = {
    Title: 'V for Vendetta',
    Year: '2005',
    Rated: 'R',
    Released: '17 Mar 2006',
    Runtime: '132 min',
    Genre: 'Action, Drama, Sci-Fi, Thriller',
    Director: 'James McTeigue',
    Writer: 'Lilly Wachowski (screenplay), Lana Wachowski (screenplay), David Lloyd (graphic novel art)',
    Actors: 'Natalie Portman, Hugo Weaving, Stephen Rea, Stephen Fry',
    Plot: 'Tells the story of Evey Hammond and her unlikely but instrumental part in bringing down the fascist government that has taken control of a futuristic Great Britain. Saved from a life-and-death situation by a man in a Guy Fawkes mask who calls himself V, she learns a general summary of V\'s past and, after a time, decides to help him bring down those who committed the atrocities that led to Britain being in the shape that it is in.',
    Language: 'English',
    Country: 'USA, UK, Germany',
    Awards: '7 wins & 27 nominations.',
    Poster: 'https://m.media-amazon.com/images/M/MV5BOTI5ODc3NzExNV5BMl5BanBnXkFtZTcwNzYxNzQzMw@@._V1_SX300.jpg',
    Ratings: [
        {
            Source: 'Internet Movie Database',
            Value: '8.2/10'
        },
        {
            Source: 'Rotten Tomatoes',
            Value: '73%'
        },
        {
            Source: 'Metacritic',
            Value: '62/100'
        }
    ],
    Metascore: '62',
    imdbRating: '8.2',
    imdbVotes: '981,704',
    imdbID: 'tt0434409',
    Type: 'movie',
    DVD: '01 Aug 2006',
    BoxOffice: '$70,500,000',
    Production: 'Warner Bros. Pictures',
    Website: 'N/A',
    Response: 'True'
};

export class MainPage extends Component {
    search = (searchString: string) => {
        return makeSearchByApi(searchString);
    };

    render(): ReactElement {
        return (
            <Container maxWidth="md">
                <Grid
                    container
                    direction="column"
                    justify="flex-start"
                    alignItems="center">
                    <Search onChangeSearchString={this.search}/>
                    <DetailFilm
                        isLoading={true}
                        data={MocCurrentFilm}/>
                </Grid>
            </Container>
        );
    }
}
