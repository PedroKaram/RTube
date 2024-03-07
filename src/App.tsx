import './App.css';
import { Navbar } from './components/Navbar.tsx';
import { AppShell, Flex, Button, useMantineColorScheme, useComputedColorScheme } from '@mantine/core';
import { FaSun, FaMoon } from 'react-icons/fa';
import React from 'react';

function App() {
  const {setColorScheme} = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light');

  const toggleColorScheme = () => {
    setColorScheme(computedColorScheme === 'dark' ? 'light' : 'dark');
  }

  return (
    <AppShell
      header={{height: 60}}
    >
      <AppShell.Header>
        <Flex justify="space-between" align="center" style={{padding: '10px 20px'}}>
          <div>RTube</div>
          <Button size='sm' variant='link' onClick={toggleColorScheme}>
            {computedColorScheme === 'dark' ? <FaSun /> : <FaMoon />}
          </Button>
        </Flex>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <Navbar />
      </AppShell.Navbar>
    </AppShell>
  );
}

export default App;
