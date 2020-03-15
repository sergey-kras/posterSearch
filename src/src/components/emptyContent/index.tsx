import React from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import './common.css';

interface Props {
    tryAgain: () => void;
}

export function EmptyContent(props: Props) {
    const { tryAgain } = props;
    return (
        <div className="emptyContent">
            <Paper className="emptyContent__content">
                <p>
                    An error occurred while requesting, try downloading the content again.
                </p>
                <Button variant="contained" color="primary" onClick={tryAgain}>
                    Try again
                </Button>
            </Paper>
        </div>
    );
}
