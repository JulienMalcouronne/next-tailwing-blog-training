'use client';
import Link from 'next/link';
import React from 'react';
import PaddingContainer from '../layout/padding-container';
import { ILink } from '../../models/client/links.model';

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

  return (
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
  );
};
export default NavMenu;
