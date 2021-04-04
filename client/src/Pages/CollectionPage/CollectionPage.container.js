import { connect} from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionsLoaded } from '../../Redux/Shop/shop.selectors';
import WithSpinner from '../../Components/WithSpinner/WithSpinner';
import CollectionPage from './CollectionPage';


const mapStateToProps = createStructuredSelector({
    isLoading: (state) => !selectIsCollectionsLoaded(state)
});

const CollectionsPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage);


export default CollectionsPageContainer;

