import {createApp} from 'mantra-core';
import initContext from './configs/context';

// modules
import coreModule from './modules/core';
import mModule from './modules/marketing';
import usersModule from './modules/users';
import questionModule from './modules/questions';
import dashboardModule from './modules/dashboard';
import arithmeticModule from './modules/arithmetic';
import additionsModule from './modules/additions';

// initilize context
const context = initContext();

// create app
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(mModule);
app.loadModule(usersModule);
app.loadModule(questionModule);
app.loadModule(dashboardModule);
app.loadModule(arithmeticModule);
app.loadModule(additionsModule);
app.init();