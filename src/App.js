import React, { Component } from 'react';
import Perf from 'react-addons-perf';
import './App.css';
import { datasets, dataGenerate } from './data';
import Table from './components/Table';

window.Perf = Perf;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: datasets,
        };
    }
    // 然而如果这个回调函数作为一个属性值传入低阶组件，这些组件可能会进行额外的重新渲染。
    // 我们通常建议在构造函数中绑定或使用属性初始化器语法来避免这类性能问题。
    // 函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
    add = () => {
        console.log(this);
        // data.push 并没有改变 data 的引用，
        const { data } = this.state;
        data.push(dataGenerate());
        this.setState({
            data: [...data],
        });
    };

    delete = () => {
        // data.pop 并没有改变 data 的引用，
        const { data } = this.state;
        data.pop();
        // 用concat或者 [...data]
        this.setState({
            data: [...data],
        });
    };

    onChange = (item_id, sold_num) => {
        const { data } = this.state;
        //  data.map返回新数组， 改变了data的引用
        this.setState({
            data: data.map(i => {
                if (i.item_id === item_id) {
                    i.sold_num = sold_num * 2;
                }
                return i;
            }),
        });
    };

    render() {
        console.log(0);
        const { data } = this.state;
        return (
            <div className="App">
                <Table onChange={this.onChange} data={data} />
                <button onClick={this.add}>add</button>
                <button onClick={this.delete}>delete</button>
            </div>
        );
    }
}

export default App;
