import SiderBar from '../components/body/pm_siderbar';

import { connect } from 'react-redux';
import {SHOW_TEAM} from '../actions';

const mapStateToProps = (state) => {
  console.log("siderbar containser");
  console.log(state);
  return {
    teams:state.teamList

  }

}

const mapDispatchToProps =(dispatch)=>{
  return {
    onMenuClick:(key)=>{
      dispatch(SHOW_TEAM(key))
    }
  }
}


const ShowSiderBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(SiderBar)

export default ShowSiderBar;
