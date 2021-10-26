import React, { useMemo } from 'react';

import { Menu } from '@elonwu/web-menu';
import { useMediaQuery } from '@elonwu/hooks';

const Global = ({ children }) => {
  const [isMobile, isTable, isPC] = useMediaQuery();

  const layout = useMemo(() => {
    return isMobile
      ? {
          gridTemplateRows: '88px 1fr',
          gridTemplateAreas: `'navbar' 'content'`,
        }
      : {
          gridTemplateColumns: '256px 1fr',
          gridTemplateRows: '88px 1fr',
          gridTemplateAreas: `'logo navbar' 'menu content'`,
        };
  }, [isMobile]);

  return (
    <div
      className="Global"
      style={Object.assign(
        {
          display: 'grid',
          width: '100vw',
          height: '100vh',
          placeContent: 'stretch',
          placeItems: 'stretch',
        },
        layout,
      )}
    >
      {isMobile ? (
        <>
          <NavBar />
          <Content>{children}</Content>

          {/* <Menubar /> */}
        </>
      ) : (
        <>
          <Logo />
          <NavBar />
          <Menubar />
          <Content>{children}</Content>
        </>
      )}
    </div>
  );
};

const Logo = () => {
  return (
    <div
      style={{
        gridArea: 'logo',
        background: '#f6f5f4',
      }}
    >
      logo
    </div>
  );
};

const NavBar = () => {
  return (
    <div
      style={{
        gridArea: 'navbar',
        boxShadow: `rgb(201 201 201 / 25%) 4px 5px 12px 1px`,
        position: 'relative',
        zIndex: 20,
      }}
    >
      navbar
    </div>
  );
};

const Menubar = () => {
  return (
    <div style={{ gridArea: 'menu' }}>
      <Menu
        mode="vertical"
        popover
        data={[
          {
            key: 'page1',
            name: '页面1',
            subMenus: [
              { key: 'page2', name: '页面2' },
              { key: 'page3', name: '页面3' },
            ],
          },
          {
            key: 'page4',
            name: '页面4',
            subMenus: [
              { key: 'page5', name: '页面5' },
              { key: 'page6', name: '页面6' },
            ],
          },
        ]}
      />
    </div>
  );
};

const Content = ({ children }) => {
  return (
    <main
      style={{
        gridArea: 'content',
        overflow: 'auto',
        background: '#f5f5f5',
      }}
    >
      {children}
    </main>
  );
};

export default Global;
