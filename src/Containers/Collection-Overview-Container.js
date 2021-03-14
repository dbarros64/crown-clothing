import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsCollectionsFetching } from '../Redux/Shop/shop.selectors';
import WithSpinner from '../Components/WithSpinner/WithSpinner';
import CollectionsOverview from '../Components/Collections-Overview/Collections-Overview';


const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionsFetching
});


const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview);


export default CollectionsOverviewContainer;


connect(mapStateToProps)(WithSpinner(CollectionsOverview));