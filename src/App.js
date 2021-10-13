import { Route, Switch } from 'react-router-dom';

import QuotePage from './pages/QuotePage';
import NewQuotePage from './pages/NewQuotePage';
import FavoritesPage from './pages/Favorites';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <QuotePage />
        </Route>
        <Route path="/new-quote">
          <NewQuotePage />
        </Route>
        {/* <Route path="/favorites">
          <FavoritesPage />
        </Route> */}
      </Switch>
    </Layout>
  );
}

export default App;
