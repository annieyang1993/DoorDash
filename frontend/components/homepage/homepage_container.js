import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import Homepage from './homepage';

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
)(Homepage);