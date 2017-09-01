import React from 'react';
import ReactDOM from 'react-dom';

// import 'antd-mobile/lib/button/style/index.css';
// import Button from 'antd-mobile/lib/button';

import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router';

import App from './components/App';
import Menulearn from './components/menulearn';
import Menucommunity from './components/menucommunity';
import Menumessage from './components/menumessage';
import Menume from './components/menume';
import OtherNav from './components/otherNav';
import Setting from './components/setting/setting';
import OtherMessage from './components/message/othermessage';
import SendMessage from './components/message/sendmessage';
import Specialpractice from './components/test/specialpractice';
import Wrong from './components/test/wrongpractice';
import Question from './components/test/question';
import Lesson from './components/test/lesson';
import Company from './components/test/company';
import Special from './components/test/special';
import Testcalendar from './components/test/testcalendar';
import Addtest from './components/test/addtest/addtest';
import Notdone from './components/design/notdone';
import Me from './components/menume/me';

import './index.less';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Menulearn} />
      <Route path="s2" component={Menucommunity} />
      <Route path="s3" component={Menumessage} />
      <Route path="s4" component={Menume} />
    </Route>
    <Route path="/other" component={OtherNav}>
      <Route path="message" component={OtherMessage} />
      <Route path="setting" component={Setting} />
      <Route path="specialpractice" component={Specialpractice} />
      <Route path="wrongpractice" component={Wrong} />
      <Route path="question" component={Question} />
      <Route path="lesson" component={Lesson} />
      <Route path="company" component={Company} />
      <Route path="special" component={Special} />
      <Route path="testcalendar" component={Testcalendar} />
      <Route path="addtest" component={Addtest} />
      <Route path="notdone" component={Notdone} />
      <Route path="me" component={Me} />
    </Route>
    <Route path="/sendmessage" component={SendMessage} />
  </Router>
, document.getElementById('example'));
