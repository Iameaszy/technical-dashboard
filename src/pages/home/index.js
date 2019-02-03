import React from 'react';
import { connect } from 'react-redux';
import { HomeStyle } from './home.style';


export class Home extends React.Component {
  render() {
    return (
      <HomeStyle>
      home
      </HomeStyle>
    );
  }
}

const mapStatesToProps = states => ({});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStatesToProps,
  mapDispatchToProps)(Home);
