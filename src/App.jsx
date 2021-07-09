import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from './globalStyle';
import { Wrapper, WrapperColumn } from './style';

import Header from './components/Header';
import Aside from './components/Aside';

import Dashboard from './pages/Dashboard';

const App = () => {
	return (
		<>
			<GlobalStyle />
			<Router>
				<Wrapper>
					<Header />
					<WrapperColumn>
						<Aside />
						<Switch>
							<Route path='/' exact>
								<Dashboard />
							</Route>
							<Route>
								<Dashboard />
							</Route>
						</Switch>
					</WrapperColumn>
				</Wrapper>
			</Router>
		</>
	);
};

export default App;
