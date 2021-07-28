/**
 * 这是一个action的构建函数
 * @returns 
 * 
 */
const sendAction = () => {
    // 需要返回action对象
    return {
        type: 'send_type', // 必须包含type属性
        value: '我是一个action'
    }
}

module.exports = {
    sendAction
}