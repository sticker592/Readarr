import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { removeFromBlacklist } from 'Store/Actions/blacklistActions';
import createAuthorSelector from 'Store/Selectors/createAuthorSelector';
import BlacklistRow from './BlacklistRow';

function createMapStateToProps() {
  return createSelector(
    createAuthorSelector(),
    (author) => {
      return {
        author
      };
    }
  );
}

function createMapDispatchToProps(dispatch, props) {
  return {
    onRemovePress() {
      dispatch(removeFromBlacklist({ id: props.id }));
    }
  };
}

export default connect(createMapStateToProps, createMapDispatchToProps)(BlacklistRow);
