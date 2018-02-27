import React from 'react';
import "../../template/base.css";
import {connect} from 'react-redux';
import $ from "jQuery";
class Xmdetail extends React.Component{
    constructor(props){
        super(props)
        this.state={
        	obj:{} 	
        }
    }
	render(){
		return (
            <div className="music_detail">
                <div className="text-detail">
	                <div style={{position:'relative',clear:'both',height:'356px',}}>
	                <div style={{position:'absolute',left:'-186px',top:'-134px',width:'490px',height:'490px',borderRadius:'245px 245px 245px 0px',boxShadow:'0 0 20px 5px rgba(230,230,230,0.6)'}}>
	                    &nbsp;</div>
	                <div style={{position:'absolute',left:'-168px',top:'-116px',width:'454px',height:'454px',borderRadius:'227px 227px 227px 226px',backgroundImage:"url("+this.state.obj.img1+")",backgroundSize:'cover', overflow:'hidden'}}>
	                    &nbsp;</div>
	                <div style={{position:'absolute',left:'23px',top:'75px',width:'72px',height:'72px'}} id="music-play-btn" className="music-detail-status">
	                    <img src="http://image.wufazhuce.com/music-detail-play.png" style={{width:"100%"}} className="play-btn one-image-exclude"/>
	                    <img src="http://image.wufazhuce.com/music-detail-pause.png" style={{width:"100%",display:'none'}} className="pause-btn one-image-exclude"/>
	                </div>
	                <div style={{display:'none'}} id="popupXiamiMusic-placeholder"></div>
            	</div>
        	</div>
	        <div className="text-music-info">
	            <div>{this.state.obj.text1}</div>
	            <div>{this.state.obj.text1_en}</div>
	            <div>{this.state.obj.author}</div>
	        </div>
	        <div className="text-title" style={{marginTop:'30px',textAlign:'center'}}>{this.state.obj.text2}</div>
	        <div className="text-simple-author">文／{this.state.obj.author}</div>
        <div className="text-content" dangerouslySetInnerHTML={{ __html: this.state.obj.content }}></div>
	    <p className="page-sparate-title">作者</p>
	    <hr className="sort-separate-line"/>
	    <table className="page-table">
        	<tbody>
	            <tr>
	                <td style={{width: "50px"}}>
	                    <img className="one-image-exclude avater" src="http://image.wufazhuce.com/Flenoszs07hezZZsvn44LZzsfhX0" alt={this.state.obj.author}/>
	                </td>
	                <td>
	                    <div className="page-title">{this.state.obj.author}
	                        <span style={{fontSize: '10px'}}>&nbsp;</span>
	                    </div>
	                    <div className="page-summary" >“年粤日”公众号作者。</div>
	                </td>
	            </tr>
        	</tbody>
    	</table>
	    <p className="page-sparate-title">评论内容</p>
	    <hr className="sort-separate-line"/>
	    <table className="page-table">
        	<tbody>
            	<tr>
	                <td style={{width: "20px"}}>
	                    <img className="one-image-exclude avater-small" src="http://image.wufazhuce.com/FuD8SLVAZ79Yoxx6uak8tmNCNtCJ?imageView2/1/w/80/h/80/q/75"
	                        alt="谈谈想和这个世界８８"/>
	                </td>
	                <td>
	                    <div className="comment-user-info">
	                        <ul>
	                            <li>谈谈想和这个世界８８</li>
	                            <li>2017-08-20 22:04:20</li>
	                        </ul>
	                    </div>
	                    <div className="comment-content">会有一个早已删了 却不会忘的号码 永远不会再打 再见，一个音乐。
	                    </div>
	                </td>
	            </tr>
	            <tr>
	                <td colSpan="2">
	                    <div className="separate-line"></div>
	                </td>
	            </tr>
	            <tr>
	                <td style={{width: '20px'}}>
	                    <img className="one-image-exclude avater-small" src="http://tp4.sinaimg.cn/1411949411/180/22846961249/0" alt="依然11-05"/>
	                </td>
	                <td>
	                    <div className="comment-user-info">
	                        <ul>
	                            <li>依然11-05</li>
	                            <li>2017-08-21 18:28:38</li>
	                        </ul>
	                    </div>
	                    <div className="comment-content">越长大越发现人的渺小和无奈，我们唯一能做好的就是用好的心念善待经历的一切，毕竟一生太短，路还很长。</div>
	                </td>
	            </tr>
	            <tr>
	                <td colSpan="2">
	                    <div className="separate-line"></div>
	                </td>
	            </tr>
	            <tr>
	                <td style={{width: '20px'}}>
	                    <img className="one-image-exclude avater-small" src="http://image.wufazhuce.com/Fufr6JBrXmJr1wqAXVoZ3qtItlSK?imageView2/1/w/80/h/80/q/75"
	                        alt="Drummer"/>
	                </td>
	                <td>
	                    <div className="comment-user-info">
	                        <ul>
	                            <li>Drummer</li>
	                            <li>2017-08-29 18:29:45</li>
	                        </ul>
	                    </div>
	                    <div className="comment-content">今天你已算责任完成 赎了上世的罪 贺你 全身的退</div>
	                </td>
	            </tr>
	            <tr>
	                <td colSpan="2">
	                    <div className="separate-line"></div>
	                </td>
	            </tr>
        	</tbody>
    	</table>
	    <div className="download">
		    <a href="http://m.wufazhuce.com/download"  className="ui-link">
		        <img alt="「ONE · 一个」" className="one-image-exclude logo-img" src="http://image.wufazhuce.com/app_download.png"/>
		    </a>
		    <p className="download-text">下载「一个」APP</p>
		</div>
    </div>
    
        )
	}
	componentDidMount(){
        var _this=this;
    		$.ajax({
    			url:"http://localhost:3000/getMusicDetail",
    			type:"post",
    			dataType:"json",
    			data:{
    				id:_this.props.music_id
    			},
    			success(data){					
					_this.setState({
						obj:data[0],
					})
				
				},
				error(){
					console.log('error');
				}
    		})
   	}
}
export default connect((state)=>{
	console.log(state)
	return state
},(dispatch,props)=>{
	return {
		
	}
})(Xmdetail);