import React from 'react';

class TestSetState extends React.Component {
    constructor(props) {
        super(props);
        this._addValue = this._addValue.bind(this);
    }

    state = {
        value: 0,
    };

    render() {
        return (
            <div>
                <div>The Value: {this.state.value}</div>
                <button onClick={this._addValue}>add Value</button>
            </div>
        );
    }

    _addValue() {
        // 源码片段： 两次state集中到pendngStateQueue中批量更新
        // 而此时this.state.value仍然是0， 更新的是同一个键， 因此两次更新的结果是+1
        // var nextState = replace ? queue[0] : inst.state;
        // var dontMutate = true;
        // for (var index = 0; index < queue.length; index++) {
        //     var partial = queue[index];
        //     // partial.call nextState.value初始值为0， nextState.value第一次为1， 第二次为2
        //     // partialState.value根据上一次的nextState作为preState而不是this.state.value计算得出。
        //     // partial  第一次partialState中的this.state.value = 0; 结果state.value =1;
        //     // 第二次partialState中的this.state.value = 0; 结果state.value =1;
        //     // nextState.value初始值为0， nextState.value第一次为1，第二次为1。 因为Object.assign，对于同一个键，会被后面的值覆盖掉。
        //     // 而对于批量更新队列中的state.value，它根本还没改变，所以两次算出来的partialState.value值是一样的。
        //     // 即使nextState.value在第一次中变了，也会被第二次中的partialState.value盖掉。
        //     let partialState =
        //         typeof partial === 'function'
        //             ? partial.call(inst, nextState, props, context)
        //             : partial;
        //     if (partialState) {
        //         if (dontMutate) {
        //             dontMutate = false;
        //             nextState = Object.assign({}, nextState, partialState);
        //         } else {
        //             Object.assign(nextState, partialState);
        //         }
        //     }
        // }
        setTimeout(() => {
            this.setState({
                value: this.state.value + 1,
            });
            this.setState({
                value: this.state.value + 1,
            });
        });
    }
}
export default TestSetState;
