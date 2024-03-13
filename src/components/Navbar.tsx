import { useState } from 'react';
import { Tooltip, UnstyledButton, Stack, Anchor, rem } from '@mantine/core';
import {
  IconHome2,
  IconUser,
  IconSettings,
  IconVideo,
  IconVolume,
  IconHistory,
} from '@tabler/icons-react';
import React from 'react';
import classes from './Navbar.module.css';
import VideoPage from '../pages/VideoPage/VideoPage';
import AudioOnlyPage from '../pages/AudioOnlyPage/AudioOnlyPage';
import HistoryPage from '../pages/HistoryPage/HistoryPage';
import AccountPage from '../pages/AccountPage/AccountPage';
import SettingsPage from '../pages/SettingsPage/SettingsPage';

interface NavbarLinkProps {
  icon: typeof IconHome2;
  label: string;
  path: string;
  active?: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  element: any;
}

function NavbarLink(props: NavbarLinkProps) {
  return (
    <Anchor href={props.path}>
      <Tooltip label={props.label} position="right" transitionProps={{ duration: 0 }}>
        <UnstyledButton onClick={(event) => props.onClick(event)} className={classes.link} data-active={props.active || undefined}>
          <props.icon style={{ width: rem(24), height: rem(45), color: "#c0c0c0" }} stroke={1.5} />
        </UnstyledButton>
      </Tooltip>
    </Anchor>
  );
}

export const mockdata = [
  { icon: IconVideo, label: 'Video', path: '/', element: <VideoPage /> },
  { icon: IconVolume, label: 'Audio Only', path: '/AudioOnly', element: <AudioOnlyPage /> },
  { icon: IconHistory, label: 'History', path: '/History', element: <HistoryPage /> },
  { icon: IconUser, label: 'Account', path: '/Account', element: <AccountPage /> },
  { icon: IconSettings, label: 'Settings', path: '/Settings', element: <SettingsPage /> },
];

export function Navbar() {
  const [active, setActive] = useState(0);

  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      path={link.path}
      active={index === active}
      onClick={() => setActive(index)}
      element={link.element}
    />
  ));

 

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Stack className={classes.stacks} justify="center" gap={0}>
          {links}
        </Stack>
      </div>
      
    </nav>
  );
}