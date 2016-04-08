import React from 'react';
import {mount} from 'react-mounter';

import Layout from './components/MainLayout.jsx';
import InnerLayout from './components/InnerLayout.jsx';
import ItemList from '../items/components/ItemList.jsx';
import Homepage from '../marketing/containers/Homepage.js'
import About from '../marketing/components/about.jsx'
import NewUser from '../users/containers/NewUser.js'

export default function(injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(Layout);
  const InnerLayoutCtx = injectDeps(InnerLayout);

  FlowRouter.route('/', {
    name: 'marketing.homgepage',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<NewUser />)
      })
    }
  });

  FlowRouter.route('/about', {
    name: 'marketing.about',
    action() {
      mount(InnerLayoutCtx, {
        content: () => (<About />)
      })
    }
  });

  FlowRouter.route('/register', {
    name: 'users.new',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<NewUser />)
      });
    }
  });
}