import React, {ChangeEvent} from 'react';
import AppBar from '@material-ui/core/AppBar'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import './common.css';
import { Langs } from '../../../localize/types';

interface Props {
    lang?: Langs,
    onChangeLang: (lang: string) => void;
}

export const TopBar = (props: Props) => {
    const { onChangeLang, lang } = props;
    return (
        <AppBar position="static">
            <div className="topBar">
                <Select
                    value={lang}
                    variant="outlined"
                    onChange={(e: ChangeEvent<{ value: any }>) => {
                        const lang = e?.target?.value;
                        typeof lang === 'string' && onChangeLang(lang);
                    }}
                    classes={{
                        root: 'topBar__select'
                    }}>
                    <MenuItem value="en">English</MenuItem>
                    <MenuItem value="ru">Русский</MenuItem>
                </Select>
            </div>
        </AppBar>
    );
};
