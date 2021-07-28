/**
 * 
 */
import { createStore } from 'redux';
// 引入创建好的store
import { reducer } from '../reducer';

// 构建store
const store = createStore(reducer);

export default store;