import SendableInputComponent from '../../components/SendableInputComponent';
import classes from './VideoPage.module.css';

interface Props {}

const VideoPage = (props: Props) => {
    return (
        <div className={classes.mainContent}>
            <SendableInputComponent title="Video Page" />
        </div>
    )
}

export default VideoPage;
