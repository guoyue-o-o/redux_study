import React from 'react';
import { connect } from 'react-redux';


class ComB extends React.Component {
    render() {
        console.log('================ComB=================== ',this.props);
        return (
            <div>
                {this.props.count}
            </div>
        )
    }
}

const mapDispatchToProps = (state) => {
    console.log('================ComB=================== ', state);
    return state;
}


// B组件属于接收方， 需要实现connect 方法第一个参数
// 没有第二个参数，内部会自动维护一个dispatch方法
export default connect(mapDispatchToProps)(ComB)
