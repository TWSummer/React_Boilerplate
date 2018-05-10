import HomePage from './home_page';
import { connect } from 'react-redux';
import { createItem } from '../../actions/item_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    errors: state.errors.item,
    items: state.entities.items
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return ({
    createItem: (formItem) => dispatch(createItem(formItem)),
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
