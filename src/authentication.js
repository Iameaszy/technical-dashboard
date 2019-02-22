import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {fetchUser} from './redux/action-creators/auth'

export default function(ComposedComponent) {
  class Authentication extends Component {
    static contextTypes = {
      router: PropTypes.object
    };

    componentDidMount(){
      this.props.fetchUser();
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.context.router.history.push("/signin");
      }
    }

    render() {
      if (this.props.authenticated) {
        return <ComposedComponent {...this.props} />;
      }
      return null;
      }
  }

  function mapStateToProps(state) {
    return { authenticated: state.auth.isAuthenticated };
  }

  function mapDispatchToProps(dispatch){
    return {
      fetchUser:()=>{dispatch(fetchUser())}
    }
  }

  return connect(mapStateToProps,mapDispatchToProps)(Authentication);
}