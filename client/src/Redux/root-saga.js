import { all, call } from 'redux-saga/effects';
import { shopSagas } from './Shop/shop.sagas';
import { userSagas } from './User/user.sagas';
import { cartSagas } from './Cart/cart.sagas';


export default function* rootSaga() {
    yield all([call(shopSagas), call(userSagas), call(cartSagas)]);
};