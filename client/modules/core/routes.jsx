import React from 'react';
import {mount} from 'react-mounter';

import Layout from './components/MainLayout.jsx';
import InnerLayout from './components/InnerLayout.jsx';
import ItemList from '../items/components/ItemList.jsx';
import Homepage from '../marketing/components/homepage.jsx'

export default function(injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(Layout);

  FlowRouter.route('/', {
    name: 'marketing.homgepage',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Homepage />)
      })
    }
  })
}