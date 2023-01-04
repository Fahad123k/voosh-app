import React, { useState,useEffect } from 'react';
import '../App.css';
import Logged from './logged';



const Fold2 = () => {

  const [Registration, setRegistration] = useState({
    name: "",
    email: "",
    password: "",
    companyName: "",
    designation: "",
  })

  const [logged, setlogged] = useState(false)
 let isSigned= localStorage.getItem('email')  // const [record, setrecord] = useState([]);

  const handdleInput = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    // console.log(name, value);

    setRegistration({ ...Registration, [name]: value });

    
  }

  useEffect(()=>{

    if(localStorage.getItem('email')){
      setlogged(true)
    }

  },[logged])

  // useEffect(() => {
  // //  console.log("logged",logged)
  // window.localStorage.setItem("email",JSON.stringify(Registration.email));
  // }, [logged])

  



  const handleSubmit = (e) => {
    e.preventDefault();
    // const email= e.target.email;
    const newRecord = { ...Registration, id: new Date().getTime().toString() }
    setlogged(true)
    console.log(newRecord.email)
    localStorage.setItem('email', newRecord.email);
    // setrecord([...record, newRecord])
    
    localStorage.setItem('name',newRecord.name)
    localStorage.setItem('email',newRecord.email)
    localStorage.setItem('password',newRecord.password)
    localStorage.setItem('companyName',newRecord.companyName)
    localStorage.setItem('designation',newRecord.designation)

    
    console.log(newRecord)

    setRegistration({
      name: "",
      email: "",
      password: "",
      companyName: "",
      designation: "",
    })

  }

  const handleLogout=()=>{
    localStorage.clear()
  }





  return (

    <>



    {
      logged ? <Logged/>: ""
    }

  
    
      
   

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