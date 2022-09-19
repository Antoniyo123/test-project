import React, {Component} from 'react'

class NoResult extends Component{
  clicked(){
    this.props.click()
  }
  render(){
    return (
      <div className='fallBack'>
        <h5>Oops, Hasil tidak ditemukan 😬</h5>
        <p>Tampilkan <button className="fallBack_btn" onClick={this.props.click}>film populer</button> again</p>
      </div>
    )
  }
}
export default NoResult