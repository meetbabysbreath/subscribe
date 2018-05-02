import React,{Component} from 'react';
import {Button} from 'antd';
import pub from 'utils/pub.js';
export default class SubTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result : '1'
        }
        pub.subscribe('change',this.test1.bind(this))
    }
    componentWillUnmount() {

    }
    render () {
        let {result} = this.state;
        return (
            <div>
                <Button onClick={()=>{this.onSubScribe()}}>开始发布事件</Button>
                <Button onClick={()=>{this.offSubScribe()}}>取消发布事件</Button>
                <div>
                    result :{result}
                </div>
            </div>
        )
    }
    test1() {
        this.setState({
            result : '我订阅的事件变化啦lalal'
        })
    }
    /**
     * 开始发布事件
     */
    onSubScribe() {
        pub.public('change');
    }
    /**
     * 开始发布事件
     */
    offSubScribe() {

    }
}