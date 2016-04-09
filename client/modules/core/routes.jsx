import React from 'react';
import {mount} from 'react-mounter';

import Layout from './components/MainLayout.jsx';
import InnerLayout from './components/InnerLayout.jsx';
import DashboardLayout from './components/DashboardLayout.jsx'
import Homepage from '../marketing/containers/Homepage.js'
import About from '../marketing/components/about.jsx'
import NewUser from '../users/containers/NewUser.js'
import Home from '../dashboard/components/home.jsx'
import Settings from '../dashboard/containers/settings.js'
import Upgrade from '../dashboard/components/upgrade.jsx'
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

  FlowRouter.route('/home', {
    name: 'dashboard.home',
    action() {
      mount(DashboardLayoutCtx, {
        content: () => (<Home />)
      })
    }
  });

  FlowRouter.route('/settings', {
    name: 'dashboard.settings',
    action() {
      mount(DashboardLayoutCtx, {
        content: () => (<Settings />)
      })
    }
  });

  FlowRouter.route('/upgrade', {
    name: 'dashboard.upgrade',
    action() {
      mount(DashboardLayoutCtx, {
        content: () => (<Upgrade />)
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

  FlowRouter.route('/test_questions', {
    name: 'questions:new_question',
    action() {
      mount(DashboardLayoutCtx, {
        content: () => (<NewQuestion operatorSign='+' min='6' max ='9' />)
      })
    }
  });
}