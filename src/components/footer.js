import React, {Component} from 'react'
import logo from './tmdb.png'

class Footer extends Component {
  render(){
    return (
       <div className="footer">
         <div className="line"></div>
         <div className='footDesc'>
            <img src={logo} />
            <p>Ketik judul film favorit Anda untuk mendapatkan informasi atau sekadar melihat film apa yang sedang populer sekarang. Aplikasi My Movie adalah salah satu proyek ReactJS saya. Data film berasal dari The Movie DB api. Saya harap Anda semua menikmatinya.</p>
         </div>
         <div className='footcopy'>
            <p>My Email: riswantonr2015@gmail.com</p>
         </div>
      </div>
    )
  }
}
export default Footer