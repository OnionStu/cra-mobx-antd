import { createBrowserHistory } from 'history';
import paths from './paths';

export default createBrowserHistory({ basename: paths.base });
