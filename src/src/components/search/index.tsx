import React, { Component, ReactElement, ChangeEvent } from 'react';
import TextField from '@material-ui/core/TextField'
import Card from '@material-ui/core/Card'
import { FormattedMessage } from 'react-intl';
import Autocomplete from '@material-ui/lab/Autocomplete';
import _ from 'lodash';
import './common.css';
import { SearchObject, SearchResponse} from '../../types';

interface Props {
    onChangeSearchString: (searchString: string) => Promise<SearchResponse>;
    onChangeFilm: (film: SearchObject) => void;
}

interface State {
    isLoading: boolean;
    alertText: string | ReactElement;
    films: SearchObject[];
}

export class Search extends Component<Props, State>{
    state = {
        isLoading: false,
        alertText: <FormattedMessage id='search.hello'/>,
        films: []
    };

    sendSearchString = _.debounce(async (value) => {
        const { onChangeSearchString } = this.props;
        const result = await onChangeSearchString(value);
        if (result.Search) {
            this.setState({
                films: result.Search,
                isLoading: false,
            });
        } else {
            this.setState({
                isLoading: false,
                alertText: <FormattedMessage id='search.noFound'/>
            });
        }
    }, 1000);

    onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e?.target?.value;
        this.setState({ isLoading: true, films: [] });
        value && this.sendSearchString(value);
    };

    render(): ReactElement {
        const { films, isLoading, alertText } = this.state;
        const { onChangeFilm } = this.props;

        return (
            <div className="search">
                <Card>
                    <Autocomplete
                        disableClearable
                        loading={isLoading}
                        options={films}
                        noOptionsText={alertText}
                        debug
                        // пофиксить params
                        renderInput={(params: any) => (
                            <div className="search__input">
                                <TextField
                                    {...params}
                                    label={<FormattedMessage id='search.placeholder'/>}
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
                                <div className="search__optionImage" style={{backgroundImage: `url(${option.Poster})`}}/>
                                {option.Title}
                            </div>
                        )}
                        onChange={(e: any, value: any) => onChangeFilm(value)}
                    />
                </Card>
            </div>
        );
    }
}
