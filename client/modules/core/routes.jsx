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

// exercises
import AddIndex from '../arithmetic/containers/AddIndex.js';
import SubIndex from '../arithmetic/containers/SubIndex.js';
import MultiIndex from '../arithmetic/containers/MultiIndex.js';
import DivIndex from '../arithmetic/containers/DivIndex.js';
import NewQuestion from '../questions/containers/new_question.js';


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
    name: 'questions:AddIndex',
    action() {
      mount(QuestionLayoutCtx, {
        content: () => (<AddIndex />)
      })
    }
  });

  FlowRouter.route('/subtraction', {
    name: 'questions:SubIndex',
    action() {
      mount(QuestionLayoutCtx, {
        content: () => (<SubIndex />)
      })
    }
  });

  FlowRouter.route('/multiplication', {
    name: 'questions:MultiIndex',
    action() {
      mount(QuestionLayoutCtx, {
        content: () => (<MultiIndex />)
      })
    }
  });

  FlowRouter.route('/division', {
    name: 'questions:DivIndex',
    action() {
      mount(QuestionLayoutCtx, {
        content: () => (<DivIndex />)
      })
    }
  });

  FlowRouter.route('/question/:questionId', {
    name: 'questions:new_question',
    action({questionId}) {
      mount(QuestionLayoutCtx, {
        content: () => (<NewQuestion questionId={questionId} operatorSign='+' min='6' max ='9' />)
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