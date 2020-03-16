import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import './common.css';

export const TopBar = () => {
    return (
        <AppBar position="static">
            <div className="topBar">
                <Select value="rus" variant="outlined" classes={{
                    root: 'topBar__select'
                }}>
                    <MenuItem value="en">Enhlish</MenuItem>
                    <MenuItem value="rus">Русский</MenuItem>
                </Select>
            </div>
        </AppBar>
    );
};
