import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import Mock, { Random } from 'mockjs';

const mockRequest = () => {
  const mock = new MockAdapter(axios, {
    onNoMatch: 'passthrough',
    delayResponse: 1000,
  });

  mock.onGet('/api/project/dashboard/project/tzlytw').reply(200, {
    code: '0',
    data: {
      iconUrl: 'https://test-gms.bb.game/src/assets/logo.697994be.png',
      name: '天之炼狱',
      desc: '天之炼狱',
    },
    desc: 'Success',
    successful: true,
    timestamp: '2021-06-21 14:25:05.619',
  });
};

export default mockRequest;
