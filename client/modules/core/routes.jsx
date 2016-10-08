import React from 'react';
import {mount} from 'react-mounter';

// Layouts
import MarketingLayout from './containers/MarketingLayout.js';

// registration
import NewUser from '../users/containers/NewUser.js';
import NewStudent from '../users/containers/NewStudent.js';
import LoginUser from '../users/containers/Login.js';
import LoginStudent from '../users/containers/LoginStudent.js';
import ResetPassword from '../users/containers/ResetPassword.js';
import Forgot from '../users/containers/forgot.js';

// challenges
import Challenges from '../challenges/containers/Challenges.js'
import NewChallenge from '../challenges/containers/NewChallenge.js'
import ChallengeShow from '../challenges/containers/ChallengeShow.js'
import EditChallenge from '../challenges/containers/EditChallenge.js';
import CreateStudent from '../challenges/containers/CreateStudent.js'


export default function(injectDeps, {FlowRouter}) {
  const MarketingLayoutCtx = injectDeps(MarketingLayout);

  // marketing
  FlowRouter.notFound = {
    action: function() {
      mount(MarketingLayoutCtx, {
        content: () => (<NotFound />)
      })
    }
  };

  // FlowRouter.route('/signup', {
  //   name: 'users.new',
  //   action() {
  //     mount(MarketingLayoutCtx, {
  //       content: () => (<NewUser />)
  //     });
  //   }
  // });

  FlowRouter.route('/', {
    name: 'students.new',
    action() {
      mount(MarketingLayoutCtx, {
        content: () => (<NewStudent />)
      });
    }
  });

  FlowRouter.route('/login', {
    name: 'users.new',
    action() {
      mount(MarketingLayoutCtx, {
        content: () => (<LoginUser />)
      });
    }
  });


  // FlowRouter.route('/student', {
  //   name: 'users.new',
  //   action() {
  //     mount(MarketingLayoutCtx, {
  //       content: () => (<LoginStudent />)
  //     });
  //   }
  // });

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
      mount(MarketingLayoutCtx, {
        content: () => (<ResetPassword />)
      });
    }
  });

    FlowRouter.route('/forgot', {
    name: 'forgot',
    action() {
      mount(MarketingLayoutCtx, {
        content: () => (<Forgot/>)
      })
    }
  });

  // FlowRouter.route('/thank_you', {
  //   name: 'loading',
  //   action() {
  //     mount(QuestionLayoutCtx, {
  //       content: () => (<ThankYou />)
  //     })
  //   }
  // });

// challenge shit
  FlowRouter.route('/challenges', {
    name: 'challenges.index',
    action() {
      mount(MarketingLayoutCtx, {
        content: () => (<Challenges />)
      })
    }
  });

  FlowRouter.route('/challenges/:challengeId', {
    name: 'challenge.show',
    action({challengeId}) {
      mount(MarketingLayoutCtx, {
        content: () => (<ChallengeShow challengeId={challengeId} />)
      });
    }
  });

  FlowRouter.route('/edit/:challengeId', {
    name: 'challenge.show',
    action({challengeId}) {
      mount(MarketingLayoutCtx, {
        content: () => (<EditChallenge challengeId={challengeId} />)
      });
    }
  });



  FlowRouter.route('/new/:studentId', {
    name: 'challenges.new',
    action({studentId}) {
      mount(MarketingLayoutCtx, {
        content: () => (<NewChallenge studentId={studentId} />)
      })
    }
  });

  FlowRouter.route('/students/new', {
    name: 'students.new',
    action() {
      mount(MarketingLayoutCtx, {
        content: () => (<CreateStudent />)
      })
    }
  });

}