import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Header from './Header';
import SportsListings from './SportsListings';
import SearchAthletes from './SearchAthletes';
import About from './About';
import Footer from './Footer';
import NotFound from './NotFound';

import '../css/App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="main-content">
          <Router>
            <Header />
            <div>
              <Switch>
                <Route path="/" exact component={SportsListings} />

                <ProtectedRoute
                  exact
                  path="/searchathletes"
                  component={SearchAthletes}
                />

                {/* <Route path="/searchathletes" exact component={SearchAthletes} /> */}
                <Route path="/about" exact component={About} />
                <Route path="*" component={NotFound} />
              </Switch>
            </div>
          </Router>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
