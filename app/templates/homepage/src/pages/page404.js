import React from 'react';
import { useHistory } from 'react-router';

import { Card, Button, Title, Text } from '@elonwu/web';

import img404 from '@/assets/404.png';

const Page404 = () => {
  const history = useHistory();

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'grid',
        padding: 24,
        backgroundColor: '#404a60',
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'grid',
          placeContent: 'center',
          backgroundImage: `url(${img404})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          backgroundPosition: 'center center',
        }}
      >
        <Card
          style={{
            textAlign: 'center',
            display: 'grid',
            gap: 24,
            placeContent: 'space-between center',
            placeItems: 'center',
            padding: '24px 48px',
            background: '#f5f5f588',
            backDropFilter: 'blue(4px)',
          }}
        >
          <Title style={{ color: '#384258', fontWeight: 600, fontSize: 28 }}>
            Page Not Found.
          </Title>

          <Button onClick={() => history.replace('/')} block type="outline">
            Go Back
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default Page404;
