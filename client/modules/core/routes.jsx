import React from 'react';
import {mount} from 'react-mounter';

// Layouts
import MarketingLayout from './containers/MarketingLayout.js';
import Loading from './components/Loading.jsx';

// registration
import NewStudent from '../users/containers/NewStudent.js';
import LoginUser from '../users/containers/Login.js';
import ResetPassword from '../users/containers/ResetPassword.js';
import Forgot from '../users/containers/forgot.js';

// challenges
import Challenges from '../challenges/containers/Challenges.js'
import NewChallenge from '../challenges/containers/NewChallenge.js'
import ChallengeShow from '../challenges/containers/ChallengeShow.js'
import EditChallenge from '../challenges/containers/EditChallenge.js';
import CreateStudent from '../challenges/containers/CreateStudent.js'
import Students from '../challenges/containers/Students.js'
import StudentsShow from '../challenges/containers/StudentsShow.js'


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

  FlowRouter.route('/', {
    name: 'students.new',
    action() {
      Meteor.userId() ? FlowRouter.go('/students') : mount(MarketingLayoutCtx, { content: () => (<NewStudent />) });
    }
  });


  FlowRouter.route('/loading', {
    name: 'loading',
    action() {
      mount(MarketingLayoutCtx, {
        content: () => (<Loading />)
      });
    }
  });


  FlowRouter.route('/login', {
    name: 'users.new',
    action() {
      Meteor.userId() ? FlowRouter.go('/students') : mount(MarketingLayoutCtx, {content: () => (<LoginUser />) });
    }
  });

  FlowRouter.route('/logout', {
    name: 'users.new',
    action() {
      Meteor.logout(function(err){
        if(err) {
          FlowRouter.go('/');
        } else {
          FlowRouter.go('/');
        }
      });
      
    }
  });

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

  FlowRouter.route('/students', {
    name: 'students.list',
    action() {
      mount(MarketingLayoutCtx, {
        content: () => (<Students />)
      })
    }
  });

  FlowRouter.route('/students/:studentId', {
    name: 'students.show',
    action({studentId}) {
      mount(MarketingLayoutCtx, {
        content: () => (<StudentsShow studentId={studentId} />)
      })
    }
  });

  FlowRouter.route('/students/:studentId/addition', {
    name: 'students.show.addition',
    action({studentId}) {
      mount(MarketingLayoutCtx, {
        content: () => (<Challenges studentId={studentId} operator='+' />)
      })
    }
  });

  FlowRouter.route('/students/:studentId/subtraction', {
    name: 'students.show.subtraction',
    action({studentId}) {
      mount(MarketingLayoutCtx, {
        content: () => (<Challenges studentId={studentId} operator='-' />)
      })
    }
  });

  FlowRouter.route('/students/:studentId/multiplication', {
    name: 'students.show.multiplication',
    action({studentId}) {
      mount(MarketingLayoutCtx, {
        content: () => (<Challenges studentId={studentId} operator='x' />)
      })
    }
  });

  FlowRouter.route('/students/:studentId/division', {
    name: 'students.show.division',
    action({studentId}) {
      mount(MarketingLayoutCtx, {
        content: () => (<Challenges studentId={studentId} operator='/' />)
      })
    }
  });
}