import React, { useState } from "react";
import { Input, Button } from "@mantine/core";
import classes from './SendableInputComponent.module.css';
import { IconBrandYoutubeFilled, IconDownload } from '@tabler/icons-react';

interface InputComponentProps {
  title: string;
}

const downloadIcon = <IconDownload />
const ytIcon = <IconBrandYoutubeFilled />;

const SendableInputComponent = (props: InputComponentProps) => {
    const [inputValue, setInputValue] = useState('');
    
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value);
    }

    const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
      event.preventDefault();

      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ inputData: inputValue })
        })

        if(response.ok) {
          console.log('Dados enviados com sucesso');
          console.log(response.json());
        } else {
          console.error('Erro ao enviar dados', response.statusText)
        }

      } catch (error) {
        console.error('Erro ao enviar dados', error);
      }
    };

    return (
      <>
        <h1>{props.title}</h1>
        <form onSubmit={handleSubmit}>
          <Input className={classes.input}
          value={inputValue}
          onChange={handleInputChange}
          variant="filled" size="lg" radius="xl" placeholder="Insert Video URL"
          leftSection={ytIcon} />

          <Button className={classes.button} type="submit" leftSection={downloadIcon} >Download</Button>
        </form>
      </>
    ); 
}

export default SendableInputComponent;
