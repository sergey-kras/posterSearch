import React from 'react';
import TextField from '@material-ui/core/TextField'
import Card from '@material-ui/core/Card'
import Autocomplete from '@material-ui/lab/Autocomplete';
import './common.css';

export function Search() {
    return (
        <div className="search">
            <Card>
                <Autocomplete
                    freeSolo
                    disableClearable
                    options={top100Films}
                    // пофиксить params
                    renderInput={(params: any) => (
                        <div className="search__input">
                            <TextField
                                {...params}
                                label="Search"
                                variant="filled"
                                fullWidth
                                InputProps={{ ...params.InputProps, type: 'search' }}
                            />
                        </div>
                    )}
                    renderOption={(option) => (
                            <div className="search__optionRow">
                                <img className="search__optionImage" src={option.Poster} alt=""/>
                                {option.Title}
                            </div>
                        )
                    }
                    onChange={(e: any, value: any) => value.Title}
                />
            </Card>
        </div>
    );
}

const Poster = 'https://m.media-amazon.com/images/M/MV5BOTI5ODc3NzExNV5BMl5BanBnXkFtZTcwNzYxNzQzMw@@._V1_SX300.jpg';

const top100Films = [
    { Title: 'The Shawshank Redemption', Poster },
    { Title: 'The Godfather', Poster },
    { Title: 'The Godfather: Part II', Poster },
    { Title: 'The Dark Knight', Poster },
    { Title: '12 Angry Men', Poster },
];
