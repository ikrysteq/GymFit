import { ListMasterPage } from './list-master/list-master';
import { SearchPage } from './search/search';
import { SettingsPage } from './settings/settings';
// import { TabsPage } from './tabs/tabs';
import { HomePage } from './home/home';
import { TutorialPage } from './tutorial/tutorial';

// The page the user lands on after opening the app and without a session
export const FirstRunPage = TutorialPage;

// The main page the user will see as they use the app over a long period of time.
// Change this if not using tabs
export const MainPage = HomePage; 
// export const MainPage = TabsPage; // * super

// The initial root pages for our tabs (remove if not using tabs)
// export const Tab1Root = ListMasterPage; // * super
// export const Tab2Root = SearchPage; // * super
// export const Tab3Root = SettingsPage; // * super
