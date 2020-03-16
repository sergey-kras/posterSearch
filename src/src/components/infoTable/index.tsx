import React, { ReactElement } from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import './common.css';
import { needKeys } from './utils';

interface Ratings {
    Source: string;
    Value: string
}

export interface Props {
    isLoading?: boolean;
    Rated?: string;
    Released?: string;
    Runtime?: string;
    Genre?: string;
    Director?: string;
    Writer?: string;
    Actors?: string;
    Language?: string;
    Country?: string;
    Awards?: string;
    Ratings?: Ratings[];
    Metascore?: string;
    imdbRating?: string;
    imdbVotes?: string;
    Type?: string;
    DVD?: string;
    BoxOffice?: string;
    Production?: string;
}

export const InfoTable = (props: Props): ReactElement => {
    const result: ReactElement[] = [];

    if(props.isLoading) {
        return renderLoading();
    }

    needKeys.forEach((key) => {
        const value = props[key];

        if(!value) return;

        if(typeof value === 'string') {
            result.push(renderRow(key, value));
        }

        if(typeof value === 'object') {
            value.forEach((rate: Ratings) => {
                result.push(renderRow(rate.Source, rate.Value));
            });
        }
    });

    return <div className="infoTable">
        {result}
    </div>;
};

const renderRow = (key: string, value: string): ReactElement => {
    return (
        <div className="infoTable__row">
            <div className="infoTable__fieldName">
                {key}
            </div>
            <div className="infoTable__fieldValue">
                {value}
            </div>
        </div>
    );
};

const renderLoading = (): ReactElement => {
    const result = [];
    const skelet = <div className="infoTable__row">
        <Skeleton variant="text" width="100%" height={50} animation={false}/>
    </div>;

    for(let i = 0; i < 10; i++) {
        result.push(skelet);
    }

    return (
        <div className="infoTable">
            {result}
        </div>
    );
};
