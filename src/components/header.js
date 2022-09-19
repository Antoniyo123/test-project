import React, {Component, Fragment} from 'react'
import logo from './tmdb.png'

class Header extends Component {
  render(){
    return(
      <Fragment>
        <div className="header">
          <h1>My Movie Project</h1>
          <div className="header_logo">
            <img src={logo} />
            <p>Semua data Film berasal dari Movie DB</p>
          </div>
        </div>

      </Fragment>
    )
  }
}
export default Header


