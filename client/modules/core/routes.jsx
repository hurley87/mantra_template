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
import Contact from '../marketing/components/contact.jsx';
import Features from '../marketing/components/features.jsx';

// registration
import NewUser from '../users/containers/NewUser.js';
import LoginUser from '../users/containers/Login.js';
import Settings from '../dashboard/containers/settings.js';
import ResetPassword from '../users/containers/ResetPassword.js';
import Forgot from '../users/containers/forgot.js';

// exercises
import AddIndex from '../arithmetic/containers/AddIndex.js';
import SubIndex from '../arithmetic/containers/SubIndex.js';
import MultiIndex from '../arithmetic/containers/MultiIndex.js';
import DivIndex from '../arithmetic/containers/DivIndex.js';
import NewQuestion from '../questions/containers/new_question.js';
import ComingSoon from '../arithmetic/components/ComingSoon.jsx';


// store
import StoreFront from '../store/containers/storefront.js';

export default function(injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(Layout);
  const InnerLayoutCtx = injectDeps(InnerLayout);
  const DashboardLayoutCtx = injectDeps(DashboardLayout);
  const QuestionLayoutCtx = injectDeps(QuestionLayout);

  // marketing
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

  FlowRouter.route('/features', {
    name: 'marketing.features',
    action() {
      mount(InnerLayoutCtx, {
        content: () => (<Features />)
      })
    }
  });

  FlowRouter.route('/contact', {
    name: 'marketing.contact',
    action() {
      mount(InnerLayoutCtx, {
        content: () => (<Contact />)
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

  FlowRouter.route('/reset', {
    name: 'reset',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<ResetPassword />)
      });
    }
  });

    FlowRouter.route('/forgot', {
    name: 'forgot',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Forgot/>)
      })
    }
  });

  // profile
  FlowRouter.route('/profile', {
    name: 'dashboard.settings',
    action() {
      mount(DashboardLayoutCtx, {
        content: () => (<Settings />)
      })
    }
  });


  // exercises
  FlowRouter.route('/addition', {
    name: 'questions:AddIndex',
    action() {
      mount(QuestionLayoutCtx, {
        content: () => (<AddIndex />)
      })
    }
  });

  FlowRouter.route('/addition/:questionId', {
    name: 'questions:new_question',
    action({questionId}) {
      mount(MainLayoutCtx, {
        content: () => (<NewQuestion back='/addition' header='Addition Exercises' questionId={questionId} />)
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

  FlowRouter.route('/subtraction/:questionId', {
    name: 'questions:new_question',
    action({questionId}) {
      mount(MainLayoutCtx, {
        content: () => (<NewQuestion questionId={questionId}/>)
      })
    }
  });

  FlowRouter.route('/multiplication', {
    name: 'questions:MultiIndex',
    action() {
      mount(QuestionLayoutCtx, {
        content: () => (<ComingSoon />)
      })
    }
  });

  FlowRouter.route('/multiplication/:questionId', {
    name: 'questions:new_question',
    action({questionId}) {
      mount(MainLayoutCtx, {
        content: () => (<NewQuestion questionId={questionId}/>)
      })
    }
  });

  FlowRouter.route('/division', {
    name: 'questions:DivIndex',
    action() {
      mount(QuestionLayoutCtx, {
        content: () => (<ComingSoon />)
      })
    }
  });

  FlowRouter.route('/division/:questionId', {
    name: 'questions:new_question',
    action({questionId}) {
      mount(MainLayoutCtx, {
        content: () => (<NewQuestion questionId={questionId}/>)
      })
    }
  });

  FlowRouter.route('/store', {
    name: 'store.front',
    action() {
      mount(DashboardLayoutCtx, {
        content: () => (<StoreFront />)
      })
    }
  });

  FlowRouter.route('/blog', {
    name: 'marketing:blog',
    action() {
      mount(QuestionLayoutCtx, {
        content: () => (<ComingSoon />)
      })
    }
  });

  FlowRouter.route('/lessons', {
    name: 'marketing:lessons',
    action() {
      mount(QuestionLayoutCtx, {
        content: () => (<ComingSoon />)
      })
    }
  });
}