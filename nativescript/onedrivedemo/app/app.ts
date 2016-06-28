import * as applicationModule from 'application';
import * as navigationModule from './shared/navigation';

applicationModule.mainModule = navigationModule.loginPage();
applicationModule.start();
