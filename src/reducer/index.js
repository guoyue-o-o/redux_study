/**
 * 这个文件专门创建reducer函数的，专门处理发送过来的action
 * 
 */

// 初始化state
const initState = {
    count: 0
}

// 接收， 做处理，将值返回给store
const reducer = (state = initState, action) => {
    console.log('================reducer=================== ', state, action);
    switch (action.type) {
        case 'add_action':
            return {
                count: state.count + 1
            }
        default:
            return state;
    }
}

module.exports = {
    reducer
}
