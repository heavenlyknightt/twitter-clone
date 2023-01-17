import React from 'react';
import { Provider } from 'react-redux';
import GlobalStyles from './styles/GlobalStyles';
import Layout from './components/Layout';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Layout />

      <GlobalStyles />
    </Provider>
  );
}

export default App;
