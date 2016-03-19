import React from 'react';
import {mount} from 'react-mounter';

import Layout from './components/MainLayout.jsx';
import InnerLayout from './components/InnerLayout.jsx';
import ItemList from '../items/components/ItemList.jsx';

export default function(injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(Layout);

  FlowRouter.route('/', {
    name: 'items.list',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<ItemList />)
      })
    }
  })

  FlowRouter.route('/about', {
    name: 'marketing.about',
    action() {
      mount(InnerLayoutCtx, {
        content: () => (<About />)
      })
    }
  })
}