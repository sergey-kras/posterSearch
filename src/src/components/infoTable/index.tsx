import React, { ReactElement } from 'react';
import './common.css';

interface Ratings {
    Source: string;
    Value: string
}

export interface Props {
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

    const tableEntries = Object.entries(props);
    for (const [key, value] of tableEntries) {
        if(typeof value === 'string') {
            result.push(renderRow(key, value));
        } else {
            value.forEach((rate: Ratings) => {
                result.push(renderRow(rate.Source, rate.Value));
            });
        }
    };

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
