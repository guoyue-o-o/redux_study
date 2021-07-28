/**
 * 这个文件专门创建reducer函数的，专门处理发送过来的action
 * 
 */

// 初始化state
const initState = {
    value: '默认值'
}

const reducer = (state = initState, action) => {
    console.log('================reducer=================== ', state, action);
    switch (action.type) {
        case 'send_type':
            return {
                ...state,
                ...action
            }
            break;
        default:
            return state;
    }
}

module.exports = {
    reducer
}
