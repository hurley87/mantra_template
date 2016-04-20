import React from 'react';
import {mount} from 'react-mounter';

// Layouts
import Layout from './components/MainLayout.jsx';
import InnerLayout from './components/InnerLayout.jsx';
import DashboardLayout from './containers/dashboardlayout.js';
import QuestionLayout from './containers/QuestionLayout.js';

// marketing
import Homepage from '../marketing/containers/Homepage.js';
import About from '../marketing/components/about.jsx';
import NotFound from '../marketing/components/notfound.jsx';

// registration
import NewUser from '../users/containers/NewUser.js';
import LoginUser from '../users/containers/Login.js';
import Settings from '../dashboard/containers/settings.js';

// questions
import AddIndex from '../arithmetic/containers/add_index.js';


export default function(injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(Layout);
  const InnerLayoutCtx = injectDeps(InnerLayout);
  const DashboardLayoutCtx = injectDeps(DashboardLayout);
  const QuestionLayoutCtx = injectDeps(QuestionLayout);

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
    name: 'questions:add_index',
    action() {
      mount(QuestionLayoutCtx, {
        content: () => (<AddIndex />)
      })
    }
  });

  FlowRouter.route('/test_addition', {
    name: 'questions:new_question',
    action() {
      mount(QuestionLayoutCtx, {
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