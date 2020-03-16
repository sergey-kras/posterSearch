import React from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { FormattedMessage } from 'react-intl';
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
                    <FormattedMessage id='emptyContent.text'/>
                </p>
                <Button variant="contained" color="primary" onClick={tryAgain}>
                    <FormattedMessage id='emptyContent.try'/>
                </Button>
            </Paper>
        </div>
    );
}
