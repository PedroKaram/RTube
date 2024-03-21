import React from 'react';
import classes from './AudioOnlyPage.module.css'
import SendableInputComponent from '../../components/SendableInputComponent';

interface Props {}

const AudioOnlyPage = (props: Props) => {
    return (
        <div className={classes.mainContent}>
            <SendableInputComponent title="Audio Only Page" />
        </div>
    )
}

export default AudioOnlyPage;