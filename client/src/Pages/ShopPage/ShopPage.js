import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';


import CollectionsOverviewContainer from '../../Components/CollectionsOverview/CollectionsOverview.container';
import CollectionsPageContainer from '../CollectionPage/CollectionPage.container';

import { fetchCollectionsStart} from '../../Redux/Shop/shop.actions';




class ShopPage extends React.Component {


  componentDidMount() {
    const { fetchCollectionsStart } = this.props;
    fetchCollectionsStart();
  }




  render() {
    const { match } = this.props;

    return (
      <div className='shop-page'>
      <Route exact path={`${match.path}`} 
      component={CollectionsOverviewContainer}/>
      <Route path={`${match.path}/:collectionId`} 
        component={CollectionsPageContainer}
      />
    </div>
    );
  }
};


const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})



export default connect(null, mapDispatchToProps)(ShopPage);