import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../../assets/images/footer.png';

const Footer = () => {
    return (
        <footer
            style={{
                background: `url(${footer})`,
                backgroundSize: 'cover'
            }}
        className="p-10">
            <div className='footer'>
                <div>
                     
                    <span className="footer-title">Doctors protal</span>
                    <p>We provide the most full medical services.</p>
                </div>
                <div>
                <span className="footer-title">Services</span>
                    <Link to="/" className="link link-hover">Teeth Orthodontics</Link>
                    <Link to="/" className="link link-hover">Cosmetic Dentistry</Link>
                    <Link to="/" className="link link-hover">Teeth Cleaning</Link>
                    <Link to="/" className="link link-hover">Oral Surgery</Link>
                </div>
                <div>
                    <span className="footer-title">Contact Info</span>
                    <Link to="/" className="link link-hover">Dhaka, Bangladesh</Link>
                    <Link to="/" className="link link-hover">Email:topu15-3504@diu.edu.bd</Link>
                    <Link to="/" className="link link-hover">contact:01779703467</Link>
                </div>
            </div>
            <div className='text-center mt-32'>
                <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
            </div>
        </footer>
    );
};

export default Footer;