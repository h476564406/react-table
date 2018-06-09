import React, { PureComponent, Component } from 'react';

export default class Tr extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            edit: false,
        };
    }

    handleBlur = e => {
        const value = e.target.value;
        this.setState({ edit: false });
        const { onChange, data: { item_id } } = this.props;
        onChange && onChange(item_id, value);
    };

    handleClick = () => {
        this.setState({ edit: true });
    };

    render() {
        // 5 次
        // 因为 App 组件的整个 state 改变了，所有的组件都会重新渲染一次，最后对比出需要真实 DOM 的操作。
        // 把 Table 组件和 Tr 继承的 Component 改成 PureComponent ，那么， Tr 组件每次更新都会进行一次 shallowEqual 比较
        // 如果当前组件的第一层引用没有发生改变，render方法就不会触发
        // 2. 虽然第一层数据没变，但引用变了，就会造成虚拟 DOM 计算的浪费。
        // 3. 第一层数据改变，但引用没变，会造成不渲染，所以需要很小心的操作数据。
        // shallowEqual(prevState, nextState);
        // console.log(2);
        // console.log(this.props);
        const data = this.props.data;
        const { edit } = this.state;

        return (
            <div className="tr">
                <div className="cell">
                    <div className="cell__child-container">
                        <div>{data.item_id}</div>
                    </div>
                </div>
                <div className="cell">
                    <div className="cell__child-container">{data.bro_uvpv}</div>
                </div>
                <div className="cell cell--money cell--center">
                    <div className="cell__child-container">
                        {data.stock_num}
                    </div>
                </div>
                <div className="cell">
                    <div className="cell__child-container">
                        {edit ? (
                            <input
                                onBlur={this.handleBlur}
                                defaultValue={data.sold_num}
                            />
                        ) : (
                            data.sold_num
                        )}
                    </div>
                </div>
                <div className="cell">
                    <div className="cell__child-container">
                        <span onClick={this.handleClick}>修改</span>
                    </div>
                </div>
            </div>
        );
    }
}
