import PMBody from '../components/body/pm_body';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  console.log('pmbody');
  console.log(state);
  return {
    teamList:state.teamList,
    curTeam:state.curTeam

  }

}

// add\delete team should add a callback
// add\delete memeber should change the view?
const mapDispatchToProps = (dispatch) => {
return {

  }
}


const ShowBody = connect(
  mapStateToProps,
  mapDispatchToProps
)(PMBody)

export default ShowBody;
