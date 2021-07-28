import React from 'react';
import store from '../../store';
import { sendAction } from '../../action';

export default class Home extends React.Component {
    state = {
        value: store.getState().value
    }

    handleClick() {
        // 接收action对象
        const action = sendAction()
        // 发送一个action
        store.dispatch(action)
    }

    // 当组件加载完毕的时候进行注册监听
    componentDidMount() {
        store.subscribe(() => {
            console.log('================subscribe=================== ', store.getState());
            this.setState({
                value: store.getState().value
            })
        })
    }

    render() {
        return (
            <div>
                <button onClick={() => this.handleClick()}>
                    点击我，发送一个action
                </button>
                <div>
                    {this.state.value}
                </div>
            </div>
        )
    }
}