import { connect } from 'react-redux';

import { receiveLocation} from '../../actions/greeting_actions';
import { logout } from '../../actions/session_actions';
import Greeting from './greeting';

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    location: users[location],
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => ({
  receiveLocation: (location) => dispatch(receiveLocation(location)),
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
