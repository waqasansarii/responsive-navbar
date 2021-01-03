import React from 'react'
import { Link } from 'react-router-dom'
// import './hover.css'

const AboutModel = ({ open2, value }) => {
    // console.log(value)
    return (
        <div className={!open2 ? 'main_model_div' : ''}>
            <div className={!open2 ? 'sub_model_div' : '.sub_model_div2'}>
                <div className='info_div'>
                    <h3> About Us </h3>
                    <div className='para_div'>
                        <p>{value === 'about' || value === 3 ?
                            'A full-cycle software and mobile app development company with a world-class team of innovators.'
                            : 'Explore data-rich insights from our content experts and tech geeks, bringing interesting updates from across the globe.'

                        }</p>

                    </div>
                </div>
                <div className='services_div'>
                    <h3> Explore </h3>
                    <div className={!open2 ? 'service_link_div' : '.service_link_div2'}>
                        <ul className='service_ul'>
                            <li>
                                <Link className='link'>
                                    {value === 'about' || value === 3 ? 'Process' :
                                        'Blog'
                                    }
                                </Link>
                                <p>{value === 'about' || value === 3 ? 'Our Agile Process'
                                    : 'Stuff that Matters'
                                }
                                </p>
                            </li>
                            <li>
                                <Link className='link'>
                                    {value === 'about' || value === 3 ? 'Clients' : 'Press release'

                                    }
                                </Link>
                                <p>
                                    {value === 'about' || value === 3 ? 'Our Global Clientele'
                                        : 'From our media desk'

                                    }
                                </p>
                            </li>
                            {
                                value==='about' || value===3 ?
                                <li>
                                <Link className='link'>
                         Press Release

                                    
                                </Link>
                                <p>
                                     From our media desk
                                     
                                </p>
                            </li> : null

                                    }
                        </ul>
                        <ul className='service_ul2'>

                            <li>
                                <Link className='link'>{value === 'about' || value === 3 ? 'Careers' : 'News & Updates'}</Link>
                                <p>{value === 'about' ? 'Build your careers with us.' : 'Stay Informed about us'}</p>
                            </li>
                            <li>
                                <Link className='link'>{value === 'about' || value === 3 ? 'University' : 'Events'}</Link>
                                <p>{value === 'about' ? 'Learn and Grow' : 'Global tech events'}</p>
                            </li>
                            {value==='about' || value===3?
                            <li>
                                <Link className='link'>{value === 'about' || value === 3 ? 'Manifesto' : null}</Link>
                                <p>{value === 'about' || value === 3 ? 'Our Business Model' : null}</p>
                            </li>
                            : null
}

                        </ul>
                    </div>

                </div>
                {value === 'about' || value === 3 ?
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
                    :
                    null

                }

            </div>
        </div >
    )
}

export default AboutModel;