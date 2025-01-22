import React, {Component} from 'react';
import { NavLink, withRouter } from "react-router-dom";
// import ReactHtmlParser from 'react-html-parser';
import parse from 'html-react-parser';
import * as data from '../assets/data'

class Menubar extends Component{

	navigationHtml = () => {
		let html = [];
		data.topMenu.forEach((value, index) =>{
			const path = value[0];
			const label = value[1];

			html.push(
				<NavLink to={"/" + path}  activeClassName="active" key={index}>
					<li key={index} className="menu-item">
						<div>{parse(label)}</div>
					</li>
				</NavLink>
				)
			});
			return html;
	}

	render() {
    return (
      <ul className="menu-container">
					{this.navigationHtml()}
      </ul>
    );
  }
}

export default withRouter(Menubar);
