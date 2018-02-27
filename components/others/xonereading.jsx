import React from 'react';
import  '../../template/reading.css';
export default class Xonereading extends React.Component {
  render() {
   	 return (
   	 	<div>
   	 		<div className="reading_list">
   	 			<div className="reading_item_text">
   	 				<p className="reading_text_tag">- STORY -</p>
   	 				<p className="reading_text_title"><a  href="#">没有赏味期限，只有来日方长</a></p>
   	 				<p className="reading_text_author">文／周源远</p>
   	 				<div className="reading_text_cover_img"><img src={require("../../public/img/1.reading.jpg")} /></div>
   	 				<p className="reading_text_content_short ">爱一个人的时候，才会学会理解和包容。愿意为对方削去身上的棱角，然后打磨成圆。</p>
   	 				<p className="reading_date">2017/7/31</p>
   	 			</div>
   	 			<div className="reading_item_text">
   	 				<p className="reading_text_tag">- STORY -</p>
   	 				<p className="reading_text_title"><a  href="#">没有赏味期限，只有来日方长</a></p>
   	 				<p className="reading_text_author">文／周源远</p>
   	 				<div className="reading_text_cover_img"><img src={require("../../public/img/1.reading.jpg")} /></div>
   	 				<p className="reading_text_content_short ">爱一个人的时候，才会学会理解和包容。愿意为对方削去身上的棱角，然后打磨成圆。</p>
   	 				<p className="reading_date">2017/7/31</p>
   	 			</div>
   	 		</div>
   	 	</div>
   	 )
  }
}
