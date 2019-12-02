import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new EnzymeAdapter() });



it('App component renders without crashing', () => {

});

describe("Signin", () => {
  
})

describe("Profile page", () => {

  const setup = (props={}) => {
    const wrapper = shallow(<Profile {...props} />);
    return wrapper;
  };

  test("Profile page renders without crashing", () => {

  })

});

describe("Sidebar and Currently Playing", () => {

});

describe("AudioPlayer", () => {

})

describe("Playlist", () => {

})

describe("Song", () => {

})

describe("Search bar", () => {

})

describe("Redux", () => {

})