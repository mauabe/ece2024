import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";
import * as data from '../assets/data';
// import ReactHtmlParser from 'react-html-parser';
import parse from 'html-react-parser';

class Home extends Component{
  constructor(props) {
		super(props);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      currentPanel: data.panels[0].id
    };
  }

  handleClick = (panelId, e) => {
    // console.log("state before", this.state);
    this.setState({currentPanel: panelId});
    // console.log("state after", this.state);
  }

  panelContainer = (panel) => {
    // const panelActiveCheck = (this.state.currentPanel === panel.id){this.setState({panelActive:"active"})};
    let html = [];

    data.panels.map((panel) => {
      const activeClassName = this.state.currentPanel === panel.id ? "active" : null;
      const panelSelected = this.state.currentPanel === panel.id ? "showText" : "";

      html.push(
        <div 
          className={`panel ${panel.id} ${activeClassName}`} 
          data-active={activeClassName} 
          key={panel.id} 
          onClick={(e) => this.setState({currentPanel: panel.id})}
        >
          <div className="panelContent" >
            <div className="panelTop">
              <div className="panelTitle">{panel.title}</div>
              <div className="panelName">
                <span className="panelFirstName">{panel.firstName}</span> 
                <span className="panelLastName">{panel.lastName}</span>
              </div>
              <div className={`panelText ${panelSelected}`}>
                {parse(panel.text)}
                  <Link to={`/${panel.link}`} >
                    <div className="linkText">
                      {/* <span >&#x2B22;</span> */}
                      <span className='material-symbols-outlined'>arrow_forward</span>
                    </div>
                  </Link>
              </div>
            </div>
            <div className={` ${panel.id}`}>
              <div className={`panel-portrait`}></div>
            </div>   
          </div>
        </div>
        );
        return html;
      });
      return html;
      // console.log('html outside map panelContainer::', html);
  }

  render() {
    // const currentPanel = this.state.currentPanel;
    return(
      <div className="content-area home-image">
        <div className={`panel-content-area ${this.state.currentPanel}`}>
            {console.log('this.state.currentPanel inside render:',  this.state.currentPanel)}
            {this.panelContainer()}
        </div>
      </div>

    );
  };
};

export default withRouter(Home);
