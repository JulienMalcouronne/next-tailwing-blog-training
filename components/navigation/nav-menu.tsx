'use client';
import Link from 'next/link';
import React from 'react';
import PaddingContainer from '../layout/padding-container';
import { ILink } from '../../models/client/links.model';
import FestivalCard from '../cards/festival-cards/festival-card';
import CardContainer from '../cards/cards-container/card-container';
import { Festival } from '@/models/client/festival.model';

const NavMenu = ({
  onAppStateChange,
  links,
  app,
}: {
  onAppStateChange: Function;
  links: ILink[];
  app: string;
}) => {
  const appSwitch: string = app == 'blog' ? 'festivout' : 'blog';
  const festivals: Festival[] = [
    {
      id: 1,
      title: 'festiv',
      description: 'coucou',
      imageUrl:
        'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      tags: ['music', 'festival', 'techno'],
    },
    {
      id: 2,
      title: 'festiv',
      description: 'coucou',
      imageUrl:
        'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      tags: ['music', 'festival', 'techno'],
    },
    {
      id: 3,
      title: 'festiv',
      description: 'coucou',
      imageUrl:
        'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      tags: ['music', 'festival', 'techno'],
    },
    {
      id: 4,
      title: 'festiv',
      description: 'coucou',
      imageUrl:
        'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      tags: ['music', 'festival', 'techno'],
    },
    {
      id: 5,
      title: 'festiv',
      description: 'coucou',
      imageUrl:
        'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      tags: ['music', 'festival', 'techno'],
    },
  ];
  return (
    <div>
      <div className="border-b sticky top-0 left-0 right-0 bg-white bg-opacity-50 backdrop-blur-md">
        <PaddingContainer>
          <div className="py-5 flex items-center justify-between">
            <Link className="font-bold text-lg" href="/">
              Explorer
            </Link>
            <nav>
              <ul className="flex items-center gap-4 text-neutral-600">
                {links?.map((link: ILink, index: number) => (
                  <li key={index}>
                    <Link href={link.link}>{link.name}</Link>
                  </li>
                ))}
                <li
                  className="cursor-pointer"
                  onClick={() => onAppStateChange(appSwitch)}
                >
                  {' '}
                  Reach {appSwitch}
                </li>
              </ul>
            </nav>
          </div>
        </PaddingContainer>
      </div>
      <CardContainer>
        {festivals.map((f: Festival, i: number) => (
          <FestivalCard key={i} festival={f} />
        ))}
      </CardContainer>
    </div>
  );
};
export default NavMenu;
