import React, { Component, ReactElement } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'
import { InfoTable } from '../infoTable';
import { serialiseData } from '../infoTable/utils';
import './common.css';

interface Props {
    // дописать интерфейс даты
    data: any;
}

export const DetailFilm = (props: Props) => {
    const { data } = props;
    const tableData = serialiseData(data);

    return (
        <div className="detailFilm">
            <Paper className="detailFilm__content">
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                        <img className="detailFilm__poster" src={data.Poster} alt=""/>
                    </Grid>
                    <Grid item xs={9} alignContent="flex-start">
                        <div className="detailFilm__header">
                            <h1 className="detailFilm__title">
                                {data.Title}
                            </h1>
                        </div>

                        <p className="detailFilm__plot">
                            {data.Plot}
                        </p>

                        <div className="detailFilm__table">
                            <InfoTable { ...tableData }/>
                        </div>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}
