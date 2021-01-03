import React from 'react'
import { Link } from 'react-router-dom'
import './hover.css'

const AboutModel = ({ open2 }) => {
    // console.log(value)
    return (
        <div className={!open2 ? 'main_model_div' : ''}>
            <div className={!open2 ? 'sub_model_div' : '.sub_model_div2'}>
                <div className='info_div'>
                    <h3> About Us </h3>
                    <div className='para_div'>
                        <p>
                            'A full-cycle software and mobile app development company with a world-class team of innovators.'
                        </p>

                    </div>
                </div>
                <div className='services_div'>
                    <h3> Explore </h3>
                    <div className={!open2 ? 'service_link_div' : '.service_link_div2'}>
                        <ul className='service_ul'>
                            <li>
                                <Link className='link'>
                                   Process
                                </Link>
                                <p>Our Agile Process
                                </p>
                            </li>
                            <li>
                                <Link className='link'>
                                  Clients
                                </Link>
                                <p>
                                    Our Global Clientele
                                </p>
                            </li>
                                <li>
                                <Link className='link'>
                         Press Release
                                </Link>
                                <p>
                                     From our media desk
                                </p>
                            </li> 
                        </ul>
                        <ul className='service_ul2'>

                            <li>
                                <Link className='link'>Careers</Link>
                                <p>Build your careers with us.</p>
                            </li>
                            <li>
                                <Link className='link'>University</Link>
                                <p>Learn and Grow</p>
                            </li>
                            <li>
                                <Link className='link'>Manifesto</Link>
                                <p>Our Business Model</p>
                            </li>

                        </ul>
                    </div>

                </div>
                    <div className={!open2 ? 'work_div' : 'work_div2'}>
                        <div className='work_ul'>

                            <div className='about_div'>
                                <div className='year_div'>
                                    <h2 className='head'>12+ </h2>
                                    <p className='year_para'>Year</p>
                                </div>
                                <div className='employe_div'>
                                    <h2 className='head'>200+</h2>
                                    <p className='employe_para'>Employees</p>
                                </div>
                            </div>
                            <div className='about_div'>
                                <div className='year_div'>
                                    <h2 className='head'>600+ </h2>
                                    <p className='year_para'>Projects</p>
                                </div>
                                <div className='employe_div'>
                                    <h2 className='head'>550+</h2>
                                    <p className='employe_para'>Clients</p>
                                </div>

                            </div>
                        </div>
                    </div>

            </div>
        </div >
    )
}

export default AboutModel;