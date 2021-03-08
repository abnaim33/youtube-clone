import React from 'react'
import Header from './Component/Header/Header'
import Sidebar from './Component/Sidebar/Sidebar'
import './App.css'
import RecommendedVideos from './Component/RecommendedVideos/RecommendedVideos';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchPage from './Component/SearchPage/SearchPage';

function App() {
  return (
    <div className="App">

      {/* HAVE TO DEPLOY */}
      <Router>
        <Header></Header>
        <Switch>

          <Route path="/search/:searchTerm">
            <div className="sidebar_search">
              <Sidebar></Sidebar>
              <SearchPage />
            </div>
          </Route>
          <Route exact path="/">
            <div className="app_page">
              <Sidebar />
              <RecommendedVideos />
            </div>
          </Route>

        </Switch>
      </Router>


    </div>
  );
}

export default App;
