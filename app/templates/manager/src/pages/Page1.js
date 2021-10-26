import React, { useCallback, useMemo } from 'react';

import { Carousel } from '@elonwu/web-carousel';
import { Card } from '@elonwu/web-card';
import { useMediaQuery } from '@elonwu/hooks';

const Page1 = () => {
  const [isMobile, isTable, isPC] = useMediaQuery();

  const items = useMemo(
    () =>
      [1, 2, 3, 4, 5, 6, 7].map((i) => (
        <Card
          key={i}
          style={
            isMobile
              ? {
                  width: '50vw',
                  height: 120,
                  position: 'relative',
                }
              : {
                  width: 400,
                  height: 240,
                  position: 'relative',
                }
          }
        >
          sdajsdjasd
        </Card>
      )),
    [isMobile],
  );

  const stylize = useCallback(({ offset, absOffset }) => {
    return {
      opacity: absOffset > 1 ? 0 : 1,
      background: absOffset === 0 ? 'blue' : 'lightblue',
      transform: `translateX(${offset * 80}%) translateY(${offset * -50}%) `,
    };
  }, []);

  const containerStyle = useMemo(() => {
    return isMobile
      ? {
          width: '100%',
          height: 200,
          borderRadius: 16,
          background: '#fcfcfc',
        }
      : {
          width: 800,
          height: 480,
          borderRadius: 16,
          background: '#fcfcfc',
        };
  }, [isMobile]);

  return (
    <div
      style={{
        display: 'grid',
        padding: 16,
        paddingBottom: 2000,
      }}
    >
      <Carousel
        items={items}
        stylize={stylize}
        delay={3000}
        style={containerStyle}
      />
    </div>
  );
};

export default Page1;
