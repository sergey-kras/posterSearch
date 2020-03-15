import React, { Component, ReactElement, ChangeEvent } from 'react';
import TextField from '@material-ui/core/TextField'
import Card from '@material-ui/core/Card'
import Autocomplete from '@material-ui/lab/Autocomplete';
import { AxiosPromise } from 'axios';
import _ from 'lodash';
import './common.css';
import { SearchObject } from '../../types';

interface Props {
    onChangeSearchString: (searchString: string) => AxiosPromise<SearchObject[]>;
}

export class Search extends Component<Props>{
    state = {
        isLoading: false,
        hasError: false,
        films: []
    };

    sendSearchString = _.debounce(async (value) => {
        const { onChangeSearchString } = this.props;
        const result = await onChangeSearchString(value);
        if (result) {
            this.setState({ films: result });
        }
    }, 1000);

    onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e?.target?.value;
        this.sendSearchString(value);
    };

    render(): ReactElement {
        const { films } = this.state;

        return (
            <div className="search">
                <Card>
                    <Autocomplete
                        freeSolo
                        disableClearable
                        options={films}
                        // пофиксить params
                        renderInput={(params: any) => (
                            <div className="search__input">
                                <TextField
                                    {...params}
                                    label="Search"
                                    variant="filled"
                                    fullWidth
                                    onChange={this.onInputChange}
                                    InputProps={{ ...params.InputProps, type: 'search' }}
                                />
                            </div>
                        )}
                        getOptionLabel={(option) => option.Title}
                        renderOption={(option) => (
                            <div className="search__optionRow">
                                <img className="search__optionImage" src={option.Poster} alt=""/>
                                {option.Title}
                            </div>
                        )}
                        onChange={(e: any, value: any) => value.Title}
                    />
                </Card>
            </div>
        );
    }
}

// const Poster = 'https://m.media-amazon.com/images/M/MV5BOTI5ODc3NzExNV5BMl5BanBnXkFtZTcwNzYxNzQzMw@@._V1_SX300.jpg';

// const top100Films = [
//     { Title: 'The Shawshank Redemption', Poster },
//     { Title: 'The Godfather', Poster },
//     { Title: 'The Godfather: Part II', Poster },
//     { Title: 'The Dark Knight', Poster },
//     { Title: '12 Angry Men', Poster },
// ];
