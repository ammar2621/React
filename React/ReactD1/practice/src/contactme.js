import React from 'react';
import logo from './img/logo-ALTA-v2@2x.png'
import './main.css';

export function Contact() {
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-5 colForm d-flex align-items-center gambar-panjang">
                    <div className="alterra">
                            <img src={logo} width="247.99px" height="127.38" />
                    </div>
                    <div className="box-fit"></div>
                </div>
                <div className="col-md-7 ">
                    <div className="form-isi">
                        <h3>Contact Us</h3>
                        <form>
                            <div className="form-group">
                                <label for="FormControl">Full Name<span>*</span></label>
                                <input type="fullname" className="form-control2" id="FormControl" placeholder="   Your Full Name..." required />
                            </div>
                            <div className="form-group">
                                    <label for="FormControl">Email Address<span>*</span></label>
                                    <input type="email" className="form-control2" id="FormControl" placeholder="   example@domain.com" required />
                            </div>
                            <div className="form-group">
                                    <label for="FormControl">Phone Number<span>*</span></label>
                                    <input type="phone" className="form-control2" id="FormControl" placeholder="   08543890****" required />
                            </div>
                            <div className="form-group">
                                <label for="FormControl">Nationality</label>
                                <select className="form-control2 minimal" id="FormControl2" placeholder="Selected..." required>
                                <option>Selected...</option>
                                <option>Indonesian</option>
                                <option>Malaysian</option>
                                <option>Singaporean</option>
                                <option>Australian</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label for="form-control">Message</label>
                                <br />
                                <textarea className="form-controlarea" id="exampleFormControlTextarea1" rows="10"></textarea>
                            </div>
                            <br />
                            <div className="button-submit">
                                <button type="button" onclick="window.location.href= 'index.html'" class="btn btn-submit">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Contact;
