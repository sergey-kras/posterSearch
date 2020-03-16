import React, { ReactElement } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'
import Skeleton from '@material-ui/lab/Skeleton';
import { InfoTable } from '../infoTable';
import { serialiseData } from '../infoTable/utils';
import './common.css';

interface Props {
    data: any;
    isLoading: boolean;
    hasError?: boolean
}

export const DetailFilm = (props: Props) => {
    const { data, isLoading } = props;

    if(!data && !isLoading) return null;

    const tableData = data && serialiseData(data);

    return (
        <div className="detailFilm">
            <Paper className="detailFilm__content">
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                        {renderPoster(isLoading, data?.Poster as string)}
                    </Grid>
                    <Grid item xs={9} alignContent="flex-start">
                        <div className="detailFilm__header">
                            <h1 className="detailFilm__title">
                                {renderTitle(isLoading, data?.Title as string)}
                            </h1>
                        </div>

                        <p className="detailFilm__plot">
                            {renderPlot(isLoading, data?.Plot as string)}
                        </p>

                        <div className="detailFilm__table">
                            <InfoTable isLoading={isLoading} { ...tableData }/>
                        </div>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
};

const renderPoster = (isLoading: boolean, poster: string): ReactElement => {
    return isLoading
        ? <Skeleton variant="rect" animation={false} width='100%' height={300} />
        : <img className="detailFilm__poster" src={poster} alt=""/>
};

const renderTitle = (isLoading: boolean, title: string): ReactElement | string => {
    return isLoading
        ? <Skeleton variant="text" height={80} animation={false}/>
        : title
};

const renderPlot = (isLoading: boolean, plot: string): ReactElement | string => {
    return isLoading
        ? (
            <div>
                <Skeleton variant="text" height={30} animation={false}/>
                <Skeleton variant="text" height={30} animation={false}/>
                <Skeleton variant="text" height={30} animation={false}/>
                <Skeleton variant="text" height={30} width='75%' animation={false}/>
            </div>
        )
        : plot
};
