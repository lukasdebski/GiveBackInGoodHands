import React from 'react';

const HomeContactUs = () => {

    const handleSubmit = event => {
        event.preventDefault();
        alert('You have submitted the form.')
    }

    return (
        <>
            <section className="contact">
                <div className="contact__box">
                    <p className='contact__title'>Skontaktuj się z nami</p>
                    <div className="contact__decoration"></div>
                    <form className="contact__form" onSubmit={handleSubmit}>
                        <div className="contact__inputs">
                            <label className='contact__label'>
                                <p className='contact__text'>Wpisz swoje imię</p>
                                <input className='contact__el el--in' type="text" name='name' placeholder='imię'/>
                            </label>
                            <label className='contact__label'>
                                <p className='contact__text'>Wpisz swój e-mail</p>
                                <input className='contact__el el--in' type="text" name='email'
                                       placeholder='xzcv@zxc.zx'/>
                            </label>
                        </div>
                        <label className='contact__labelText'>
                            <p className='contact__text'>Wpisz swoją wiadomość</p>
                            <textarea className='contact__area' name="" id="" cols="42" rows="8"
                                      placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'></textarea>
                        </label>
                        <div className="contact__btn">
                            <button className='btn__sub' type="submit">Wyślij</button>
                        </div>
                    </form>
                </div>
                <footer className="footer">
                    <span className='footer__text'>CopyRight by CodersLab</span>
                    <div className="icons">
                        <span className="facebook"></span>
                        <span className="instagram"></span>
                    </div>
                </footer>
            </section>
        </>
    )
}

export default HomeContactUs;