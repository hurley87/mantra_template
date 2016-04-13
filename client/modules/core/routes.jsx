import React from 'react';
import {mount} from 'react-mounter';

import Layout from './components/MainLayout.jsx';
import InnerLayout from './components/InnerLayout.jsx';
import DashboardLayout from './containers/dashboardlayout.js';
import Homepage from '../marketing/containers/Homepage.js'
import About from '../marketing/components/about.jsx'
import NotFound from '../marketing/components/notfound.jsx'
import NewUser from '../users/containers/NewUser.js'
import LoginUser from '../users/containers/Login.js'
import Settings from '../dashboard/containers/settings.js'
import Addition from '../arithmetic/containers/addition.js'
import Subtraction from '../arithmetic/containers/subtraction.js'
import Multiplication from '../arithmetic/containers/multiplication.js'
import NewQuestion from '../questions/containers/new_question.js'


export default function(injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(Layout);
  const InnerLayoutCtx = injectDeps(InnerLayout);
  const DashboardLayoutCtx = injectDeps(DashboardLayout);

  FlowRouter.route('/', {
    name: 'marketing.homgepage',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Homepage />)
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

    FlowRouter.route('/login', {
    name: 'users.new',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<LoginUser />)
      });
    }
  });

  FlowRouter.route('/profile', {
    name: 'dashboard.settings',
    action() {
      mount(DashboardLayoutCtx, {
        content: () => (<Settings />)
      })
    }
  });

  FlowRouter.route('/addition', {
    name: 'arithmetic.addition',
    action() {
      mount(DashboardLayoutCtx, {
        content: () => (<Addition />)
      })
    }
  });

  FlowRouter.route('/subtraction', {
    name: 'arithmetic.subtraction',
    action() {
      mount(DashboardLayoutCtx, {
        content: () => (<Subtraction />)
      })
    }
  });

  FlowRouter.route('/multiplication', {
    name: 'arithmetic.multiplication',
    action() {
      mount(DashboardLayoutCtx, {
        content: () => (<Multiplication />)
      })
    }
  });

  FlowRouter.route('/test_question', {
    name: 'questions:new_question',
    action() {
      mount(DashboardLayoutCtx, {
        content: () => (<NewQuestion operatorSign='+' min='6' max ='9' />)
      })
    }
  });

  FlowRouter.notFound = {
    action() {
      mount(MainLayoutCtx, {
        content: () => (<NotFound />)
      });
    }
  };
}