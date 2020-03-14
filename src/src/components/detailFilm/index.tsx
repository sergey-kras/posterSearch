import React, { Component,ReactElement } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'
import './common.css';

interface Props {
    // дописать интерфейс даты
    data: any;
}

export class DetailFilm extends Component<Props> {
    render(): ReactElement {
        const { data } = this.props;

        return (
            <div className="detailFilm">
                <Paper className="detailFilm__content">
                    <Grid container spacing={3}>
                        <Grid item xs={4}>
                            <img className="detailFilm__poster" src={data.Poster} alt=""/>
                        </Grid>
                        <Grid item xs={8} alignContent="flex-start">
                            <div className="detailFilm__header">
                                <h1 className="detailFilm__title">
                                    {data.Title}
                                </h1>
                            </div>

                            <p className="detailFilm__plot">
                                {data.Plot}
                            </p>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        );
    }
}
