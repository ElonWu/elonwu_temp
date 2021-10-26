import React from 'react';
import ReactDOM from 'react-dom';

import Routers from '@/routes';
import './style.css';
import { MediaQueryProvider } from '@elonwu/hooks';

const App = () => (
  <MediaQueryProvider>
    <Routers />
  </MediaQueryProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
