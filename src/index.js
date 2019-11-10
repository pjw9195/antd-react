import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import {render} from 'react-dom'
import { createBrowserHistory } from 'history';
// import {Provider} from 'react-redux'
import App from './App'
// import createStore from './store'
import * as serviceWorker from './serviceWorker'

// export const reduxStore = createStore()
export const history = createBrowserHistory()

render(
    <BrowserRouter>
      {/*<Provider store={} history={history}>*/}
        <App/>
      {/*</Provider>*/}
    </BrowserRouter>,
    document.getElementById('root')
)

serviceWorker.unregister()