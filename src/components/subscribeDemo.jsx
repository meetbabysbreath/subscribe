import React,{Component} from 'react';
import {Button} from 'antd';
import pub from 'utils/pub.js';
export default class SubTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result : '1'
        }
        pub.subscribe('change',this.handleChange.bind(this));
    }
    componentWillUnmount() {
        pub.clear('change')
    }
    render () {
        let {result} = this.state;
        return (
            <div>
                <Button onClick={()=>{this.onSubScribe()}}>开始发布事件</Button>
                <Button onClick={()=>{this.offSubScribe()}}>清除发布事件</Button>
                <div>
                    result :{result}
                </div>
            </div>
        )
    }
    handleChange() {
        this.setState({
            result : '我订阅的事件变化啦'
        })
    }
    /**
     * 开始发布事件
     */
    onSubScribe() {
        pub.publish('change');
    }
    /**
     * 清除发布事件
     */
    offSubScribe() {
        pub.clear('change');
    }
}