import React from "react";
import "../template/share.css";
import { HashRouter as Router, Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';
class Xbackmusic extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (<div className="vfooter">
			<span>上一篇</span>
			<Link to="/index/music">返回</Link>
			<span onClick={this.props.changeid}>下一篇</span>
		</div>
	)
  }
}
export default connect((state)=>{
	console.log(state)
	return state
},(dispatch,props)=>{
	return {
		changeid(){
			dispatch({
				type:"add_id"
			})
		}
	}
})(Xbackmusic);