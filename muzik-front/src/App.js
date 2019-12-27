import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { Col, Row } from 'react-bootstrap';

import HomePage from './pages/home/home';
import PlaylistPage from './pages/playlist/playlist';
import SigninPage from './pages/signin/signin';
import SignupPage from './pages/signin/signup';
import UploadPage from './pages/upload/upload';

import NavBar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import { bindActionCreators } from '../../../../Library/Caches/typescript/3.6/node_modules/redux';



function App() {
  return (
    <Router>
      <div>
        <Row className="app-main-row">
          <Col xs={2} className="app-nav-col">
            <NavBar />
          </Col>
          <Col fluid={"true"} className="app-main-col">
            <Header />
            <Route exact path="/" component={SigninPage} />
            <Route path="/signup" component={SignupPage} />
            <Route path="/home" component={HomePage} />
            <Route path="/moods/:moodid" render={(props) => <PlaylistPage mood={true} {...props}/>} />
            <Route path="/playlists/:playlistid" component={PlaylistPage} />
            <Route path="/admin/add-music" component={UploadPage} />
          </Col>
        </Row>

        <Row className="app-footer-row">
          <Footer />
        </Row>
      </div>
    </Router>
  );
}

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  
})



export default App;
