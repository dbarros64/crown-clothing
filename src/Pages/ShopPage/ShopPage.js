import React from 'react';
import { Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectIsCollectionFetching, selectIsCollectionsLoaded } from '../../Redux/Shop/shop.selectors';

import CollectionsOverview from '../../Components/CollectionsOverview/CollectionsOverview'
import CollectionPage from '../CollectionPage/CollectionPage';
import WithSpinner from '../../Components/WithSpinner/WithSpinner';

import { fetchCollectionsStartAsync } from '../../Redux/Shop/shop.actions';


const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {


  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }




  render() {
    const { match, isCollectionFetching, isCollectionsLoaded } = this.props;

    return (
      <div className='shop-page'>
      <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={isCollectionFetching}{...props} /> } />
      <Route path={`${match.path}/:collectionId`} 
        render={(props) => <CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props} />}
      />
    </div>
    );
  }
};


const mapStateToProps = createStructuredSelector({
  isFetchingCollections: selectIsCollectionFetching,
  isCollectionsLoaded: selectIsCollectionsLoaded
});

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})



export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);