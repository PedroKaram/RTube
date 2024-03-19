import InputComponent from '../../components/InputComponent'
import classes from './VideoPage.module.css';

interface Props {}

const VideoPage = (props: Props) => {
    return (
        <div className={classes.mainContent}>
          <h1>Video Page</h1>
            <InputComponent />
        </div>
    )
}

export default VideoPage;
