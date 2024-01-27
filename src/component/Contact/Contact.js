import { useState } from "react";
import { send } from 'emailjs-com';
import contact1 from "./Contact.jpg";
import "./Contact.css";

const Contact = () => {
  const [user_name, set_user_name] = useState('');
  const [user_phone, set_user_phone] = useState('');
  const [user_email, set_user_email] = useState('');
  const [subject, set_subject] = useState('');
  const [message, set_message] = useState('');

  const handleName = (e) => {
    set_user_name(e.target.value);
  }
  const handlePhone = (e) => {
    set_user_phone(e.target.value);
  }
  const handleEmail = (e) => {
    set_user_email(e.target.value);
  }
  const handleSubject = (e) => {
    set_subject(e.target.value);
  }
  const handleMessage = (e) => {
    set_message(e.target.value);
  }

  const sendMail = (e) => {
    e.preventDefault();
    send(
      'service_osc006n',
      'template_rcy1tau',
      { user_name, user_phone, user_email, subject, message },
      '6UfaCMa5ZDqRTPug4'
    )
      .then((response) => {
        console.log('Message send Successfully', response.status, response.text);
      })
      .catch((err) => {
        console.log('Failed', err);
      });

    set_user_name('');
    set_user_phone('');
    set_user_email('');
    set_subject('');
    set_message('');
  }
 

  // const from = useRef()
  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('service_osc006n', 'template_rcy1tau', form.current, 'Y6UfaCMa5ZDqRTPug4')
  //     .then((result) => {
  //         console.log(result.text);
  //     }, (error) => {
  //         console.log(error.text);
  //     });
  //     e.target.reset()
  // };
  // const [data, setData] = useState({
  //   fullname: "",
  //   phone: "",
  //   email: "",
  //   subject: "",
  //   message: "",})

  // const InputEvent = (event) => {
  //   const { name, value } = event.target

  //   setData((preVal) => {
  //     return {
  //       ...preVal,
  //       [name]: value,
  //     }
  //   })
  // }

  // const formSubmit = (event) => {
  //   event.preventDefault()
  //   alert(
  //     `My name is ${data.fullname}. 
	//     My phone number is ${data.phone}. 
	//     My email address is ${data.email}. 
	//     My Subject on  ${data.subject}. 
	//     Here is my message I want to say : ${data.message}. 
	//   `
  //   )
  // }
  return (
    <>  
      <section className='Contact' id='contact'>
        <div className='container top'>
          <div className='heading text-center'>
            <h4>CONTACT</h4>
            <h1>Contact With Me</h1>
          </div>

          <div className='content d_flex'>
            <div className='left'>
              <div className='box box_shodow'>
                <div className='img'>
                  <img src={contact1} alt='' />
                </div>
                <div className='details'>
                <h1>RIPAM KUNDU</h1>
                  <p><b>Software Engineer</b></p>
                  <p>Post Graduate || Software Developer || Programmer || Full Stack Developer || Developer || Fast Learner || Honesty || Dedication</p> <br />
                  <p><b>Phone :</b> +91 - 7477638690</p>
                  <p><b>Email :</b> ripamkundu530@gmail.com</p> <br />
                  <span>FIND WITH ME</span>
                  <div className='button f_flex'>
                    <button className='btn_shadow'>
                    <a href='https://www.facebook.com/rk.kundu26/'><i class='fab fa-facebook-f'></i></a>
                    </button>
                    <button className='btn_shadow'>
                        <a href='https://www.instagram.com/rk_ripam_kundu/'><i class='fab fa-instagram'></i></a>
                    </button>

                    <button className='btn_shadow'>
                        <a href='https://www.linkedin.com/in/rk-ripam-kundu/'><i class='fab fa-linkedin-in'></i></a>
                    </button>

                    <button className='btn_shadow'>
                    <a href='https://twitter.com/ripam_kundu'><i className='fab fa-twitter'></i></a>
                    </button>

                    <button className='btn_shadow'>
                        <a href="https://api.whatsapp.com/send?phone=917477638690&text=Hello Connection..!"><i className='fab fa-whatsapp'></i></a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          

            <div className='right box_shodow'>
              <form onSubmit={sendMail}>
                <div className='f_flex'>
                  <div className='input row'>
                    <span>YOUR NAME</span>
                    <input type='text' name='user_name' value={user_name} required placeholder="Enter your Name" onChange={handleName} />
                  </div>
                  <div className='input row'>
                    <span>PHONE NUMBER </span>
                    <input type='number' name='user_phone' value={user_phone}  required placeholder="Enter Your Phone Number" onChange={handlePhone} />
                  </div>
                </div>
                <div className='input'>
                  <span>EMAIL </span>
                  <input type='email' name='user_email' value={user_email} required placeholder="Enter your Email ID" onChange={handleEmail} />
                </div>
                <div className='input'>
                  <span>SUBJECT </span>
                  <input type='text' name='subject' value={subject}  required placeholder="Enter your Subject" onChange={handleSubject} />
                </div>
                <div className='input'>
                  <span>YOUR MESSAGE </span>
                  <textarea cols='30' rows='10' name='message' value={message} required placeholder="Enter your Massage" onChange={handleMessage}></textarea>
                </div>
                <button type="submit" className='btn_shadow'>
                  SEND MESSAGE <i className='fa fa-long-arrow-right'></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
