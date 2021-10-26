import React, { useMemo, useState } from 'react';

import { Scroller } from '@elonwu/web-scroller';

const FullSection = ({ style = {}, ...props }) => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'grid',
        placeContent: 'center',
        ...style,
      }}
      {...props}
    />
  );
};

const Part1 = () => {
  return (
    <FullSection
      style={{
        background: '#444',
        color: '#fcfcfc',
      }}
    >
      Part1
    </FullSection>
  );
};
const Part2 = () => {
  return (
    <FullSection
      style={{
        color: '#444',
        background: '#fcfcfc',
      }}
    >
      Part2
    </FullSection>
  );
};
const Part3 = () => {
  return (
    <FullSection
      style={{
        background: '#444',
        color: '#fcfcfc',
      }}
    >
      Part3
    </FullSection>
  );
};
const Part4 = () => {
  return (
    <FullSection
      style={{
        color: '#444',
        background: '#fcfcfc',
      }}
    >
      Part4
    </FullSection>
  );
};
const Part5 = () => {
  return (
    <FullSection
      style={{
        background: '#444',
        color: '#fcfcfc',
      }}
    >
      Part5
    </FullSection>
  );
};

const Page1 = () => {
  const sections = useMemo(() => {
    return [
      { key: 'part1', title: 'part1', content: <Part1 /> },
      { key: 'part2', title: 'part2', content: <Part2 /> },
      { key: 'part3', title: 'part3', content: <Part3 /> },
      { key: 'part4', title: 'part4', content: <Part4 /> },
      { key: 'part5', title: 'part5', content: <Part5 /> },
    ];
  }, []);

  const [active, setActive] = useState(0);

  return (
    <Scroller
      targetIndex={active}
      direction="vertical"
      delay={50}
      style={{ width: '100vw', height: '100vh' }}
    >
      {sections.map((section, i) => {
        return (
          <Scroller.Item key={section.key} i={i}>
            {section?.content}
          </Scroller.Item>
        );
      })}
    </Scroller>
  );
};

export default Page1;
