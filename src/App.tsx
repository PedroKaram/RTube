import './App.css';
import { Navbar, mockdata } from './components/Navbar';
import { AppShell, Flex, Button, useMantineColorScheme, useComputedColorScheme } from '@mantine/core';
import { FaSun, FaMoon } from 'react-icons/fa';
import React from 'react';
// import { Outlet, Route, Routes } from 'react-router';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

function App() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light');

  const toggleColorScheme = () => {
    setColorScheme(computedColorScheme === 'dark' ? 'light' : 'dark');
  }

  const routes = mockdata.map((data, index) => (
    <Route key={index} path={data.path} element={data.element} />
  ));

  return (
    <AppShell
      header={{ height: 60 }}
    >
      <AppShell.Header>
        <Flex justify="space-between" align="center" style={{ padding: '10px 20px' }}>
          <div>RTube</div>
          <Button size='sm' variant='link' onClick={toggleColorScheme}>
            {computedColorScheme === 'dark' ? <FaSun /> : <FaMoon />}
          </Button>
        </Flex>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <Navbar />
      </AppShell.Navbar>
      <AppShell.Main style={{ marginLeft: '100px' }}>
        <Flex style={{ padding: '20px 20px' }}>
          <Routes>
            {mockdata.map((data, index) => (
              <Route key={index} path={data.path} element={data.element} />
            ))}
          </Routes>
        </Flex>
      </AppShell.Main>
    </AppShell>

  );
}

export default App;
