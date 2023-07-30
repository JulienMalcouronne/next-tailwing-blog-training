'use client';
import React, { useState } from 'react';
import NavMenu from './nav-menu';
import { ILink } from '@/models/client/links.model';
import { GetStaticProps } from 'next';

const Navigation = () => {
  const [appState, setAppState] = useState('blog');

  const handleAppState = (params: string): void => {
    setAppState(params);
  };
  interface ILinkWrapper {
    [key: string]: ILink[];
  }

  const links: ILinkWrapper = {
    festivout: [
      { name: 'Festivals', link: '/festivals' },
      { name: 'settings', link: '/festivout' },
    ],
    blog: [
      { name: 'Cities', link: '/cities' },
      { name: 'Experiences', link: '/experiences' },
    ],
  };

  return (
    <NavMenu
      app={appState}
      links={links[appState]}
      onAppStateChange={handleAppState}
    />
  );
};
export default Navigation;
