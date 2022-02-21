import routes from './routes';
import './index.css';
import { Layout } from './components';

// eslint-disable-next-line require-jsdoc
function App() {
	return <Layout>{routes}</Layout>;
}

export default App;
