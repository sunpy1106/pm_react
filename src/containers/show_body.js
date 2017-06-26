import PMBody from '../components/body/pm_body';
import { connect } from 'react-redux';
import  *  as TeamActions from '../actions';
import { bindActionCreators } from 'redux';
const mapStateToProps = (state) => {
  console.log('pmbody');
  console.log(state);
  return {
    memberList:state.memberList
  }

}

// add\delete team should add a callback
// add\delete memeber should change the view?
const mapDispatchToProps = (dispatch) => {
return {
    actions:bindActionCreators(TeamActions,dispatch)
  }
}


const ShowBody = connect(
  mapStateToProps,
  mapDispatchToProps
)(PMBody)

export default ShowBody;
