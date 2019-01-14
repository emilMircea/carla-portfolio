import React, {PureComponent, Component} from 'react'
import PropTypes from 'prop-types';
import Sidebar from '../components/sidebar/Sidebar';
import './layout.css'

class PageLayout extends Component {
  
  render() {
    return(
      <div className="grid-container">
        {this.props.children}
      </div>
    )
  }
  
}


export default PageLayout
