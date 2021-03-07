import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {selectCollections} from '../../Redux/Shop/shop.selectors';

import PreviewCollection from '../Preview-Collection/PreviewCollection';

import './collections-overview.styles.scss';


const CollectionsOverview = ({ collections }) => (
    <div className='collections-overview'>
         {collections.map(({ id, ...otherCollectionProps }) => (
            <PreviewCollection key={id} {...otherCollectionProps} />
        ))}
    </div>
);


const mapStateToProps = createStructuredSelector({
    collections: selectCollections
});


export default connect(mapStateToProps)(CollectionsOverview);

