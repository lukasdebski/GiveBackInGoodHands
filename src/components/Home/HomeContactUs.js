import React, {useState} from 'react';
import Footer from "./Footer";

const HomeContactUs = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const handleName = e => {
        setName(e.target.value)
    }

    const handleEmail = e => {
        setEmail(e.target.value)
    }

    const handleMessage = e => {
        setMessage(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        alert('You have submitted the form.')
    }

    return (
        <>
            <section className="contact" id='contactUs'>
                <div className="contact__box">
                    <p className='contact__title'>Skontaktuj się z nami</p>
                    <div className="contact__decoration"></div>
                    <form className="contact__form" onSubmit={handleSubmit}>
                        <div className="contact__inputs">
                            <label className='contact__label'>
                                <p className='contact__text'>Wpisz swoje imię</p>
                                <input className='contact__el el--in' type="text" placeholder='imię' value={name} onChange={handleName}/>
                            </label>
                            <label className='contact__label'>
                                <p className='contact__text'>Wpisz swój e-mail</p>
                                <input className='contact__el el--in' type="text"
                                       placeholder='xzcv@zxc.zx' value={email} onChange={handleEmail}/>
                            </label>
                        </div>
                        <label className='contact__labelText'>
                            <p className='contact__text'>Wpisz swoją wiadomość</p>
                            <textarea className='contact__area'
                                      value={message}
                                      onChange={handleMessage}
                                      placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'></textarea>
                        </label>
                        <div className="contact__btn">
                            <button className='btn__sub' type="submit">Wyślij</button>
                        </div>
                    </form>
                    <Footer/>
                </div>
            </section>
        </>
    )
}

export default HomeContactUs;