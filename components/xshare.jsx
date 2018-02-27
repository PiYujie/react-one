import React from "react";
import "../template/share.css";
class Xshare extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (<div className="vfooter">
			<span>上一篇</span>
			<a href="#/index/video">返回</a>
			<span>下一篇</span>
		</div>
	)
  }
}
export default Xshare;
