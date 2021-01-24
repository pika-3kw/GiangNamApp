import React from 'react';
import ReactDOM from 'react-dom';

import moment from 'moment';

import App from './app/app';

/**
 * Config
 */
moment.locale('vi-VN');

ReactDOM.render(<App />, document.getElementById('root'));
