import React from 'react'
import { Link } from 'react-router-dom'
import './hover.css'

const ServiceModel = ({ openn }) => {
    return (
        <div className={!openn?'main_model_div' : ''} >
            <div className={!openn ? 'sub_model_div' : '.sub_model_div2'}>
                <div className='info_div'>
                    <h3> Our Services </h3>
                    <div className='para_div'>
                        <p>
                            Leveraging cutting-edge technologies to build industry-leading digital products
                                
                        </p>

                    </div>
                </div>
                <div className='services_div'>
                    <h3>Services 
                        
                        
                    </h3>
                    <div className={!openn ? 'service_link_div' : '.service_link_div2'}>
                        <ul className='service_ul'>
                            <li>
                                <Link className='link'>
                                    Mobile Application 
                                    
                                    
                                </Link>
                                <p>iOS, Android and Wearable Apps
                                </p>
                            </li>
                            <li>
                                <Link className='link'>
                                  Game Developement
                                        
                                </Link>
                                <p>
                                  2D , 3D and isometric Games
                                            
                                </p>
                            </li>
                            <li>
                                <Link className='link'>
                                    Blockchain Development
                                        
                                </Link>
                                <p>
                                Blockchain Dapp Development
                                </p>
                            </li>


                                        <li>
                                            <Link className='link'>Augmented Reality</Link>
                                            <p>Modern AR Appsx</p>
                                        </li>
                                        <li>
                                            <Link className='link'>Business Intelligence</Link>
                                            <p>Bl , Analytics and Big data</p>
                                        </li>
                        </ul>
                        <ul className='service_ul2'>

                            <li>
                                <Link className='link'>Artificial Intelligence</Link>
                                <p>AI and Machine Learning</p>
                            </li>
                            <li>
                                <Link className='link'>Big Data</Link>
                                <p>Apps Integrated with Big Data</p>
                            </li>
                            <li>
                                <Link className='link'>Web Development</Link>
                                <p>Robust Web Development</p>
                            </li>
                            <li>
                                <Link className='link'>MVP Development</Link>
                                <p>MVP for startups</p>
                            </li>
                            <li>
                                <Link className='link'>Share Point</Link>
                                <p>Microsoft SharePoint Development Services</p>
                            </li>
                        </ul>
                    </div>

                </div>
                <div className={!openn ? 'work_div' : 'work_div2'}>
                    <h3>How we work</h3>
                    <ul className='work_ul'>
                        <li>
                            <h5>Discovery</h5>
                            <p>Exploring project requirements</p>
                        </li>
                        <li>
                            <h5>Design</h5>
                            <p>Intuitive and engaging designs</p>
                        </li>
                        <li>
                            <h5>Development</h5>
                            <p>Agile development processes</p>
                        </li>
                        <li>
                            <h5>Testing</h5>
                            <p>Incremental testing and QA</p>
                        </li>

                            <li>
                                <h5>Deployment</h5>
                                <p>Full-function product delivery</p>
                            </li>
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default ServiceModel;