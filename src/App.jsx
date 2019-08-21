import React from 'react';
import { Provider } from 'mobx-react';
import { Router } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';

import history from './common/history';
import stores from './stores';
import routes from './routes';

moment.locale('zh-cn');

const App = () => (
  <ConfigProvider locale={zhCN} getPopupContainer={triggerNode => triggerNode.parentNode}>
    <Router history={history}>
      <Provider {...stores}>{routes}</Provider>
    </Router>
  </ConfigProvider>
);

export default App;
