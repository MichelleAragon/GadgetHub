import React from 'react';
import { NavLogoGH } from './NavLogoGH';
import { MenuGH } from './MenuGH';
import { SearchGH } from './SearchGH';

export const NavGadgetHub = () => {

  return (
    <>
        <header className="header">

            <nav className="nav">
                <NavLogoGH />
                
                <MenuGH />

                <SearchGH />
        
            </nav>

        </header>
    </>
  )
}
