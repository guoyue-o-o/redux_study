import React from 'react';
import { connect } from 'react-redux';


class ComA extends React.Component {

    hanndClick() {
        console.log('================this.props=================== ',this.props);
        // 发送action
        this.props.sendAction()
    }
    
    render() {
        return (
            <button onClick={() => this.hanndClick()}>
                +
            </button>
        )
    }
}


/**
 * 函数要有一个返回值，返回值是一个对象
 * @param dispatch
 */
const mapDispatchToProps = (dispatch) => {
    return {
        sendAction: () => {
            // 利用dispatch 发送一个action
            // 传递action对象，定义一个type属性
            dispatch({
                type: 'add_action'
            })
        }
    }

}

// A是发送方，第二个参数
export default connect(null, mapDispatchToProps)(ComA)