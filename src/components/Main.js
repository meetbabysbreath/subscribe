require('normalize.css/normalize.css');
require('styles/App.css');
import React from 'react';
import SubScribeDemo from './subscribeDemo';//测试观察者模式
class AppComponent extends React.Component {
  render() {
    return (
      <SubScribeDemo/>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
