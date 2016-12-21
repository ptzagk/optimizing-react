import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './components/App';
import data from './data.json';

ReactDOM.render(
  <AppContainer>
    <App characters={data} />
  </AppContainer>,
  document.getElementById('app-container')
);

// Hot module reloading
if (module.hot) {
  module.hot.accept('./components/App', () => {
    ReactDOM.render(
      <AppContainer>
        <App characters={data} />
      </AppContainer>,
      document.getElementById('app-container')
    );
  });
}
