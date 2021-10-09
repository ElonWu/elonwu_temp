import mockRequest from '../../mock';
import { Request } from '@elonwu/utils';

import {
  DEV_BASEURL,
  TEST_BASEURL,
  RELEASE_BASEURL,
} from '../../defaultSettings';

let BASEURL;

export const isDeveloping = NODE_ENV !== 'production';
export const isTesting =
  NODE_ENV === 'production' && WEBPACK_BUILD_TYPE === 'test';
export const isReleasing =
  NODE_ENV === 'production' && WEBPACK_BUILD_TYPE === 'release';

if (isDeveloping) {
  BASEURL = DEV_BASEURL;
  mockRequest();
} else if (isTesting) {
  BASEURL = TEST_BASEURL;
} else {
  BASEURL = RELEASE_BASEURL;
}

const handleResolve = (response) => {
  if (response?.data?.successful) {
    if (response?.data?.code === '309014') {
      message('你的操作正在审核中');
      return {};
    }

    return { data: response?.data?.data };
  }
  return { error: response };
};

const handleError = (axiosError) => {
  const response = axiosError?.response || axiosError;

  console.log({ response, axiosError });

  const error =
    response?.data?.desc ||
    response?.data?.msg ||
    response?.data?.message || // 优先使用后端响应信息;
    response?.statusText || // 或者 statusText;
    response?.status ||
    '未知错误信息';

  notification.error({
    message: '接口响应失败',
    description: `提示信息：${error}`,
  });

  // 获取身份信息失败，返回首页
  if (
    response?.request?.responseURL?.endsWith('/api/account/details') &&
    response?.status === 401
  ) {
    setTimeout(() => goBackToMainSite(), 2000);
  }

  return {
    ...axiosError,
    message: error,
  };
};

export const BaseApi = new Request(BASEURL, {
  onSuccess: handleResolve,
  onError: handleError,
});
