import React from 'react'
import '../App.css';


const Fold2=()=> {

 
    return (
<div>
   <div className="page8_container" id="Waitinglist">
        <div className="page8_container_text">
          <div className="title">Book A Demo Now</div>
        </div>
        <div className="page8_text_container">
          <div className="card_container">
            <div className="email_container">
              <div>
                <div className="full_width" style={styles.marginBottom}>
                  <div className="input_container">
                    <div className="input_label">Name <span className="compulsory_icon">*</span>
                    </div>
                    <input type="text" className="input_style" name="name" placeholder="Ex. John Doe" value="" id='000' />
                  </div>
                </div>
                <div className="full_width" style={styles.marginBottom}>
                  <div className="input_container">
                    <div className="input_label">Email <span className="compulsory_icon">*</span> </div>
                    <input type="email" className="input_style" name="email" placeholder="Ex. mail@website.com" value="" id='001' />
                  </div>
                </div>
                <div className="full_width" style={styles.marginBottom}>
                  <div className="input_container">
                    <div className="input_label">Company Name <span className="compulsory_icon">*</span> </div>
                    <input type="text" className="input_style" name="company name" placeholder="Ex. XYZ PVT LTD" value="" id='002' />
                  </div>
                </div>
                <div className="full_width" style={styles.marginBottom}>
                  <div className="input_container">
                    <div className="input_label">Your title <span className="compulsory_icon">*</span> </div>
                    <input type="text" className="input_style" name="designation" placeholder="Ex. Operational Head" value="    " id='003'  />
                  </div>
                </div>
                <a href="#Waitinglist" className="button_container_style">
                  <div>
                    <span className="text_button">Book Demo</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <img src="https://voosh.in/static/media/book_now_bg.e9f9294653918137cd78.webp" className="waiting_list" />
      </div>
</div>



    )
  
}

const styles = {
  marginBottom:{
    marginBottom:5
  }
}

export default Fold2;