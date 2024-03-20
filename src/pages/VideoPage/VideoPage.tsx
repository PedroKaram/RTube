import SendableInputComponent from '../../components/SendableInputComponent';
import classes from './VideoPage.module.css';

interface Props {}

const VideoPage = (props: Props) => {
    return (
        <div className={classes.mainContent}>
            <h1>Video Page</h1>
            <SendableInputComponent />
        </div>
    )
}

export default VideoPage;
