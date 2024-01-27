import React, { useState } from "react"
import { send } from 'emailjs-com';

const Card = (props) => {
  const [modal, setModal] = useState(false)
  const [user_name, set_user_name] = useState('');
  const [user_email, set_user_email] = useState('');
  const [website, set_website] = useState('');
  const [message, set_message] = useState('');

  const handleName = (e) => {
    set_user_name(e.target.value);
  }
  const handleEmail = (e) => {
    set_user_email(e.target.value);
  }
  const handlewebsite = (e) => {
    set_website(e.target.value);
  }
  const handleMessage = (e) => {
    set_message(e.target.value);
  }

  const sendMail = (e) => {
    e.preventDefault();
    send(
      'service_osc006n',
      'template_bwa0z5r',
      { user_name, user_email, website, message },
      '6UfaCMa5ZDqRTPug4'
    )
      .then((response) => {
        console.log('Message send Successfully', response.status, response.text);
      })
      .catch((err) => {
        console.log('Failed', err);
      });

    set_user_name('');
    set_user_email('');
    set_website('');
    set_message('');
  }

  const toggleModal = () => {
    setModal(!modal)
  }

  if (modal) {
    document.body.classList.add("active-modal")
  } else {
    document.body.classList.remove("active-modal")
  }
  return (
    <>
      <div className='box btn_shadow '>
        <div className='img'>
          <img src={props.image} alt='' onClick={toggleModal} />
        </div>
        <div className='category d_flex'>
          <span onClick={toggleModal}>{props.date}</span>
          {/*<label>
            <i className='far fa-heart'></i> {props.date}
          </label>*/}
        </div>
        <div className='title'>
          <h2 onClick={toggleModal}>{props.title_one}</h2>
          <a href='#popup' className='arrow' onClick={toggleModal}>
            <i class='fas fa-arrow-right'></i>
          </a>
        </div>
      </div>

      {/* Popup box */}
      {modal && (
        <div className='modal modal-blog'>
          <div onClick={toggleModal} className='overlay'></div>
          <div className='modal-content'>
            <div className='modal-img left'>
              <img src={props.image} alt='' />
            </div>
            <div className='modal-text right'>
              <span>{props.date}</span>
              <h1>{props.title_one}</h1>
              <p>{props.desc_one}</p>

              <h1>{props.title_two}</h1>
              <p>{props.desc_two}</p>

              <h1>{props.title_three}</h1>
              <p>{props.desc_three}</p>

              <button className='close-modal btn_shadow' onClick={toggleModal}>
                <i class='fas fa-times'></i>
              </button>

              {/*---------Leave Message----------  */}
              <div className='contact mtop'>
                <h1>Leave a Reply</h1>

                <form className='blog_contact d_flex' onSubmit={sendMail}>
                  <div className='left'>
                    <input type='text' name='user_name' value={user_name} required placeholder="Enter your Name" onChange={handleName} />
                    <input type='email' name='user_email' value={user_email} required placeholder="Enter your Email ID" onChange={handleEmail} />
                    <input type='text' name='website' value={website}  required placeholder="Enter your Website" onChange={handlewebsite} />
                    <button type="submit" className='btn_shadow'>SUBMIT NOW</button>
                  </div>
                  <div className='right'>
                    <textarea cols='30' rows='12' name='message' value={message} required placeholder="Enter your Massage" onChange={handleMessage}></textarea>
                  </div>
                </form>
              </div>
              {/*---------Leave Message----------  */}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Card
