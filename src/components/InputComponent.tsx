import { Input, Button } from "@mantine/core";
import classes from './InputComponent.module.css';
import { IconBrandYoutubeFilled, IconDownload } from '@tabler/icons-react';

interface InputComponentProps {}

const InputComponent = (props: InputComponentProps) => {
    return (
      <div>
        <Input className={classes.input} variant="filled" size="lg" radius="xl" placeholder="Input component"
        leftSection={<IconBrandYoutubeFilled size={25} />} />
        <Button className={classes.button} rightSection={<IconDownload size={14} />} >Download</Button>
      </div>
    ); 
}

export default InputComponent;
