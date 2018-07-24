import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import OpenModal from './components/open-modal/open-modal';
import Modal from './components/modal/modal';

import { updateUrl }  from './actions/modalActions';
import store from './store';
import './customScroll.css';
import './index.css';
import './App.css';



class App extends Component {

  render() {
    return (
      <Provider store = { store }>
        <BrowserRouter>
          <Switch>
            <Route 
              path="*" 
              render={AddLinkToStore} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

const AddLinkToStore=(props)=>{
  let url = props.location.pathname + props.location.search + props.location.hash;
  url = url.substr(1);
  store.dispatch(updateUrl(url));
  return(<div>
    <OpenModal/>
    <Modal/>
  </div>)
}

export default App;
