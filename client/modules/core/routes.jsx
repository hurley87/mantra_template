import React from 'react';
import {mount} from 'react-mounter';

// Layouts
import Layout from './components/MainLayout.jsx';
import InnerLayout from './components/InnerLayout.jsx';
import DashboardLayout from './containers/dashboardlayout.js';
import QuestionLayout from './containers/QuestionLayout.js';
import MarketingLayout from './containers/MarketingLayout.js';

// marketing
import Homepage from '../marketing/containers/Homepage.js';
import NotFound from '../marketing/components/notfound.jsx';
import Header from '../marketing/components/header.jsx';
import Research from '../marketing/components/research.jsx';
import Philosophy from '../marketing/components/philosophy.jsx';
import Contact from '../marketing/components/contact.jsx';
import HowItWorks from '../marketing/components/howItWorks.jsx';
import About from '../marketing/components/about.jsx';
import Terms from '../marketing/components/terms.jsx';
import Privacy from '../marketing/components/privacy.jsx';
import Jobs from '../marketing/components/jobs.jsx';

// registration
import NewUser from '../users/containers/NewUser.js';
import NewStudent from '../users/containers/NewStudent.js';
import LoginUser from '../users/containers/Login.js';
import LoginStudent from '../users/containers/LoginStudent.js';
import ResetPassword from '../users/containers/ResetPassword.js';
import Forgot from '../users/containers/forgot.js';
import Tracker from '../users/containers/Tracker.js';
import AnswerView from '../users/containers/AnswerView.js';

// challenges
import Challenges from '../challenges/containers/Challenges.js'
import NewChallenge from '../challenges/containers/NewChallenge.js'
import ChallengeShow from '../challenges/containers/ChallengeShow.js'
import EditChallenge from '../challenges/containers/EditChallenge.js';
import CreateStudent from '../challenges/containers/CreateStudent.js'


export default function(injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(Layout);
  const InnerLayoutCtx = injectDeps(InnerLayout);
  const DashboardLayoutCtx = injectDeps(DashboardLayout);
  const QuestionLayoutCtx = injectDeps(QuestionLayout);
  const MarketingLayoutCtx = injectDeps(MarketingLayout);

  // marketing
  FlowRouter.route('/', {
    name: 'marketing.homgepage',
    action() {
      mount(MarketingLayoutCtx, {
        content: () => (<Homepage />)
      })
    }
  });

  FlowRouter.notFound = {
    action: function() {
      mount(MarketingLayoutCtx, {
        content: () => (<NotFound />)
      })
    }
  };

  FlowRouter.route('/exercises', {
    name: 'marketing.portfolio',
    action() {
      mount(InnerLayoutCtx, {
        content: () => (<Portfolio />)
      })
    }
  });

  FlowRouter.route('/lessons', {
    name: 'marketing.features',
    action() {
      mount(InnerLayoutCtx, {
        content: () => (<Features />)
      })
    }
  });


  FlowRouter.route('/signup', {
    name: 'users.new',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<NewUser />)
      });
    }
  });

  FlowRouter.route('/register', {
    name: 'students.new',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<NewStudent />)
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

  FlowRouter.route('/tracker', {
    name: 'tracker',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Tracker />)
      });
    }
  });

  FlowRouter.route('/tracker/:answerId', {
    name: 'AnswerView',
    action({answerId}) {
      mount(MainLayoutCtx, {
        content: () => (<AnswerView answerId={answerId} />)
      });
    }
  });


  FlowRouter.route('/student', {
    name: 'users.new',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<LoginStudent />)
      });
    }
  });

  // FlowRouter.route('/students', {
  //   name: 'users.new',
  //   action() {
  //     mount(QuestionLayoutCtx, {
  //       content: () => (<ProfileList />)
  //     });
  //   }
  // });

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

  FlowRouter.route('/blog', {
    name: 'marketing:blog',
    action() {
      mount(QuestionLayoutCtx, {
        content: () => (<ComingSoon />)
      })
    }
  });

  FlowRouter.route('/thank_you', {
    name: 'loading',
    action() {
      mount(QuestionLayoutCtx, {
        content: () => (<ThankYou />)
      })
    }
  });

    FlowRouter.route('/research', {
    name: 'marketing.research',
    action() {
      mount(MarketingLayoutCtx, {
        content: () => (<Research />)
      })
    }
  });

    FlowRouter.route('/philosophy', {
    name: 'marketing.philosophy',
    action() {
      mount(MarketingLayoutCtx, {
        content: () => (<Philosophy />)
      })
    }
  });

  FlowRouter.route('/help', {
    name: 'dashboard.help',
    action() {
      mount(DashboardLayoutCtx, {
        content: () => (<Help />)
      })
    }
  });

    FlowRouter.route('/contact', {
    name: 'marketing.contact',
    action() {
      mount(MarketingLayoutCtx, {
        content: () => (<Contact />)
      })
    }
  });

    FlowRouter.route('/how_it_works', {
    name: 'marketing.works',
    action() {
      mount(MarketingLayoutCtx, {
        content: () => (<HowItWorks />)
      })
    }
  });

    FlowRouter.route('/about', {
    name: 'marketing.about',
    action() {
      mount(MarketingLayoutCtx, {
        content: () => (<About />)
      })
    }
  });

  FlowRouter.route('/terms', {
    name: 'marketing.terms',
    action() {
      mount(MarketingLayoutCtx, {
        content: () => (<Terms />)
      })
    }
  });

    FlowRouter.route('/privacy', {
    name: 'marketing.privacy',
    action() {
      mount(MarketingLayoutCtx, {
        content: () => (<Privacy />)
      })
    }
  });

    FlowRouter.route('/jobs', {
    name: 'marketing.jobs',
    action() {
      mount(MarketingLayoutCtx, {
        content: () => (<Jobs />)
      })
    }
  });


// challenge shit
  FlowRouter.route('/challenges', {
    name: 'challenges.index',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Challenges />)
      })
    }
  });

  FlowRouter.route('/challenges/:challengeId', {
    name: 'challenge.show',
    action({challengeId}) {
      mount(MainLayoutCtx, {
        content: () => (<ChallengeShow challengeId={challengeId} />)
      });
    }
  });

  FlowRouter.route('/edit/:challengeId', {
    name: 'challenge.show',
    action({challengeId}) {
      mount(MainLayoutCtx, {
        content: () => (<EditChallenge challengeId={challengeId} />)
      });
    }
  });



  FlowRouter.route('/new/:studentId', {
    name: 'challenges.new',
    action({studentId}) {
      mount(MainLayoutCtx, {
        content: () => (<NewChallenge studentId={studentId} />)
      })
    }
  });

  FlowRouter.route('/students/new', {
    name: 'students.new',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<CreateStudent />)
      })
    }
  });

}