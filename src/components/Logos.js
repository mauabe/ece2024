import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Logos extends Component {
  constructor(props) {
		super(props);
	  this.state = {
      pageView: '',
      logoPick: 'ece',
    }
    // console.log('%c PROPS at LOGOS constructor', 'color:black;background:orange;padding:6px;border:4px dashed yellow', this.props )
    //LOGOS should receive {logoPick, pageView} as PROPS
	}

  render(){
    const {logoPick} = this.props;

    return (
      <div className="logos">
        <Link to={'/'}>
          <img
            className="logo-image"
            src={logoPick}
            alt="UCLA ECE logo"
            title="UCLA Electrical and Computer Engineering 2022-2023"
          />
        </Link>
      </div>
    );
  }
}

export default Logos;
