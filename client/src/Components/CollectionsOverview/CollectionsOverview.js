import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../CollectionPreview/CollectionPreview';
import { selectCollectionsForPreview } from '../../Redux/Shop/shop.selectors';

import './CollectionsOverview.styles.scss';

const CollectionsOverview = ({ collections }) => (
    <div className='collections-overview'>
         {collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})


export default connect(mapStateToProps)(CollectionsOverview);