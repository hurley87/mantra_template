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
import Settings from '../dashboard/containers/settings.js';
import ResetPassword from '../users/containers/ResetPassword.js';
import Forgot from '../users/containers/forgot.js';
import Tracker from '../users/containers/Tracker.js';
import AnswerView from '../users/containers/AnswerView.js';

// exercises
import AddIndex from '../arithmetic/containers/AddIndex.js';
import SubIndex from '../arithmetic/containers/SubIndex.js';
import MultiIndex from '../arithmetic/containers/MultiIndex.js';
import CountingIndex from '../arithmetic/containers/CountingIndex.js';
import DivIndex from '../arithmetic/containers/DivIndex.js';
import NewQuestion from '../questions/containers/new_question.js';
import CountingView from '../questions/containers/CountingView.js';
import ComingSoon from '../arithmetic/components/ComingSoon.jsx';
import ProfileList from '../dashboard/containers/ProfileList.js';

//video
import VideoLesson from '../arithmetic/containers/VideoLesson.js';

// challenges
import Challenges from '../challenges/components/Challenges.jsx'
import NewChallenge from '../challenges/containers/NewChallenge.js'
import ChallengeShow from '../challenges/containers/ChallengeShow.js'
import EditChallenge from '../challenges/containers/EditChallenge.js';

// store
import StoreFront from '../store/containers/store.js';
import ThankYou from '../store/components/thank_you.jsx';
import Help from '../dashboard/containers/help.js';

// loading
import Loading from '../store/components/loading.jsx';

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

  FlowRouter.route('/students', {
    name: 'users.new',
    action() {
      mount(QuestionLayoutCtx, {
        content: () => (<ProfileList />)
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
        content: () => (<MultiIndex />)
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
        content: () => (<DivIndex />)
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

  FlowRouter.route('/counting', {
    name: 'questions:CountingIndex',
    action() {
      mount(QuestionLayoutCtx, {
        content: () => (<CountingIndex />)
      })
    }
  });

  FlowRouter.route('/counting/:questionId', {
    name: 'questions:new_question',
    action({questionId}) {
      mount(MainLayoutCtx, {
        content: () => (<CountingView questionId={questionId}/>)
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

    FlowRouter.route('/loading', {
    name: 'loading',
    action() {
      mount(QuestionLayoutCtx, {
        content: () => (<Loading />)
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

    FlowRouter.route('/video', {
    name: 'video.lesson',
    action() {
      mount(QuestionLayoutCtx, {
        content: () => (<VideoLesson />)
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

  FlowRouter.route('/new', {
    name: 'challenges.new',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<NewChallenge />)
      })
    }
  });

}