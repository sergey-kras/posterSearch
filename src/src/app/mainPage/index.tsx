import React, { Component, ReactElement } from 'react';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import { search as makeSearchByApi, searchFilm } from '../../../api';
import { Search } from '../../components/search';
import { DetailFilm } from '../../components/detailFilm';
import { SearchObject } from '../../types';
import { EmptyContent } from '../../components/emptyContent';

export class MainPage extends Component {
    state = {
        isLoading: false,
        film: null,
        hasError: false,
        currentPreset: {}
    };

    search = (searchString: string) => {
        return makeSearchByApi(searchString);
    };

    searchFullInfoByFilm = async (preset: SearchObject) => {
        this.setState({
            isLoading: true,
            film: null,
            hasError: false,
            currentPreset: preset
        });

        const result = await searchFilm(preset.imdbID);
        if(result) {
            this.setState({ film: result, isLoading: false });
        } else {
            this.setState({ hasError: true });
        }
    };

    render(): ReactElement {
        const { isLoading, film, hasError, currentPreset } = this.state;
        return (
            <Container maxWidth="md">
                <Grid
                    container
                    direction="column"
                    justify="flex-start"
                    alignItems="center">
                    <Search onChangeSearchString={this.search} onChangeFilm={this.searchFullInfoByFilm}/>
                    { hasError ?
                        <EmptyContent tryAgain={() => this.searchFullInfoByFilm(currentPreset as SearchObject)}/>
                            : <DetailFilm
                            isLoading={isLoading}
                            data={film}/>

                    }
                </Grid>
            </Container>
        );
    }
}
