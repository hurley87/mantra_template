import {createApp} from 'mantra-core';
import initContext from './configs/context';

// modules
import coreModule from './modules/core';
import mModule from './modules/marketing';
import usersModule from './modules/users';
import questionModule from './modules/questions';
import challengesModule from './modules/challenges';

// initilize context
const context = initContext();

// create app
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(mModule);
app.loadModule(usersModule);
app.loadModule(challengesModule);
app.init();