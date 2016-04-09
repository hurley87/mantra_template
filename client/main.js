import {createApp} from 'mantra-core';
import initContext from './configs/context';

// modules
import coreModule from './modules/core';
import mModule from './modules/marketing';
import itemsModule from './modules/items';
import usersModule from './modules/users';
import dashboardModule from './modules/dashboard';

// initilize context
const context = initContext();

// create app
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(mModule);
app.loadModule(itemsModule);
app.loadModule(usersModule);
app.loadModule(dashboardModule);
app.init();