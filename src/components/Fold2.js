import React, { useState } from 'react'
import '../App.css';


const Fold2 = () => {

  const [Registration, setRegistration] = useState({
    name: "",
    email: "",
    password: "",
    companyName: "",
    designation: "",
  })

  // const [record, setrecord] = useState([]);

  const handdleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);

    setRegistration({ ...Registration, [name]: value })

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // const name= e.target.name;
    const newRecord = { ...Registration, id: new Date().getTime().toString() }
    // setrecord([...record, newRecord])
    console.log(newRecord)

    setRegistration({
      name: "",
      email: "",
      password: "",
      companyName: "",
      designation: "",
    })

  }

  return (

    <>

      {/* <form action='' > */}
        <form action='' onSubmit={handleSubmit}>

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
                      <input type="text" className="input_style" name="name" placeholder="Ex. John Doe"
                        value={Registration.name}
                        onChange={handdleInput}
                        id='name'
                      />
                    </div>
                  </div>
                  <div className="full_width" style={styles.marginBottom}>
                    <div className="input_container">
                      <div className="input_label">Email <span className="compulsory_icon">*</span> </div>
                      <input type="email" className="input_style" name="email" placeholder="Ex. mail@website.com"
                        autoComplete='off'
                        value={Registration.email}
                        onChange={handdleInput}
                        id='email'
                      />
                    </div>
                  </div>
                  <div className="full_width" style={styles.marginBottom}>
                    <div className="input_container">
                      <div className="input_label">Password <span className="compulsory_icon">*</span> </div>
                      <input type="password" className="input_style" name="password" placeholder="*********"
                        autoComplete='off'
                        value={Registration.password}
                        onChange={handdleInput}
                        id='password'
                      />
                    </div>
                  </div>
                  <div className="full_width" style={styles.marginBottom}>
                    <div className="input_container">
                      <div className="input_label">Company Name <span className="compulsory_icon">*</span> </div>
                      <input type="text" className="input_style" name="companyName" placeholder="Ex. XYZ PVT LTD"
                        autoComplete='off'
                        value={Registration.companyName}
                        onChange={handdleInput}
                        id='companyName'
                      />
                    </div>
                  </div>
                  <div className="full_width" style={styles.marginBottom}>
                    <div className="input_container">
                      <div className="input_label">Your title <span className="compulsory_icon">*</span> </div>
                      <input type="text" className="input_style" name="designation" placeholder="Ex. Operational Head"
                        autoComplete='off'
                        value={Registration.designation}
                        onChange={handdleInput}
                        id='designation' />
                    </div>
                  </div>
                  <a href="#waitinglist" className="button_container_style" onClick={handleSubmit} id="bookDemo">
                    <div>
                      <span className="text_button">Book Demo</span>
                      {/* <button type='submit' className="text_button">Book Demo</button> */}
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <img src="https://voosh.in/static/media/book_now_bg.e9f9294653918137cd78.webp" className="waiting_list" />
        </div>
      </form>


    </>



  )

}



const styles = {
  marginBottom: {
    marginBottom: 5
  }
}

export default Fold2;