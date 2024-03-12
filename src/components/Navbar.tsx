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

interface NavbarLinkProps {
  icon: typeof IconHome2;
  label: string;
  path: string;
  active?: boolean;
  onClick?(): void;
}

function NavbarLink({ icon: Icon, label, path, active, onClick }: NavbarLinkProps) {
  return (
    <Anchor href={path}>
      <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton onClick={onClick} className={classes.link} data-active={active || undefined}>
        <Icon style={{ width: rem(24), height: rem(45), color: "#c0c0c0" }} stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
    </Anchor>
  );
}

const mockdata = [
  { icon: IconVideo, label: 'Video', path: '/' },
  { icon: IconVolume, label: 'Audio Only', path: '/AudioOnly' },
  { icon: IconHistory, label: 'History', path: '/History' },
  { icon: IconUser, label: 'Account', path: '/Account' },
  { icon: IconSettings, label: 'Settings', path: '/Settings' },
];

export function Navbar() {
  const [active, setActive] = useState(2);

  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      path={link.path}
      active={index === active}
      onClick={() => setActive(index)}
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