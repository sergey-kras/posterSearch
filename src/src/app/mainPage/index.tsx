import React, { Component, ReactElement } from 'react';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import { Search } from '../../components/search';
import { DetailFilm } from '../../components/detailFilm';

export class MainPage extends Component{
    render(): ReactElement {
        return (
            <Container maxWidth="md">
                <Grid
                    container
                    direction="column"
                    justify="flex-start"
                    alignItems="center">
                    <Search/>
                    <DetailFilm/>
                </Grid>
            </Container>
        );
    }
}
