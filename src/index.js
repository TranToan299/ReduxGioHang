import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// setup Redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from './redux/reducers/RootReducer';

import BaiTapGioHangReduc from './Pages/BaiTapGioHangReduc';


const store = createStore(rootReducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>

    <BaiTapGioHangReduc />

  </Provider>

);

