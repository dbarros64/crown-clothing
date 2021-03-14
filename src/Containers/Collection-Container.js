import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectIsCollectionsLoaded } from '../Redux/Shop/shop.selectors';
import WithSpinner from '../Components/WithSpinner/WithSpinner';

import CollectionPage from '../Pages/Collection/Collection';


const mapStateToProps = createStructuredSelector({
    isLoading: (state) => !selectIsCollectionsLoaded(state)
});


const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage);


export default CollectionPageContainer;