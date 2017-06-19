import Navigation from '../components/headers/pm_navigation';
import { connect } from 'react-redux';
import {CLICK_NAV }from '../actions';

const mapStateToProps = (state) => {
  return {
    hasLogined:state.hasLogined
  }

}

const mapDispatchToProps =(dispatch)=>{
  return {
    onNavClick:(key,userId)=>{
      dispatch(CLICK_NAV(key,userId))
    }
  }
}


const ShowNav = connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation)

export default ShowNav;
