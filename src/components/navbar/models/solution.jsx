import React from 'react'
import { Link } from 'react-router-dom'
import './hover.css'

const SolutionModel = ({ openn, value }) => {
    console.log(value)
    return (
        <div className={!openn?'main_model_div' : ''} >
            <div className={!openn ? 'sub_model_div' : '.sub_model_div2'}>
                <div className='info_div'>
                    <h3> Our Services </h3>
                    <div className='para_div'>
                        <p>
                             Customized digital solutions to help clients build their competitive edge.
                                
                        </p>

                    </div>
                </div>
                <div className='services_div'>
                    <h3>
                     Products 
                    </h3>
                    <div className={!openn ? 'service_link_div' : '.service_link_div2'}>
                        <ul className='service_ul'>
                            <li>
                                <Link className='link'>
                                        Cubix Happyforce
                                </Link>
                                <p>
                                      HR Solution
                                </p>
                            </li>
                            <li>
                                <Link className='link'>
                                    Cubix Shop
                                </Link>
                                <p>
                                        Marketplace Solution
                                </p>
                            </li>
                            <li>
                                <Link className='link'>
                                    On-Demand Delivery
                                </Link>
                                <p>
                                    On Demand Delivery solution 
                                </p>
                            </li>


                                        <li>
                                            <Link className='link'>Cubix Chain</Link>
                                            <p>Blockchain Solution</p>
                                        </li>
                                        <li>
                                            <Link className='link'>Cubix Insight Machine'</Link>
                                            <p>Machine Solution</p>
                                        </li>
                        </ul>
                        <ul className='service_ul2'>

                            <li>
                                <Link className='link'>Cubix Hero</Link>
                                <p>Powerfull RPG Solution</p>
                            </li>
                            <li>
                                <Link className='link'>Messenger</Link>
                                <p>Real-time messaging solution</p>
                            </li>
                            <li>
                                <Link className='link'>Chat Bot</Link>
                                <p>Smart Chatbot solution</p>
                            </li>
                            <li>
                                <Link className='link'>Social Platform</Link>
                                <p>Social-App building Platform</p>
                            </li>
                            <li>
                                <Link className='link'>Events Management</Link>
                                <p>Digital event management</p>
                            </li>
                        </ul>
                    </div>

                </div>
                <div className={!openn ? 'work_div' : 'work_div2'}>
                    <h3>Core services</h3>
                    <ul className='work_ul'>
                        <li>
                            <h5>Mobile Application</h5>
                            <p>iOS, Android and Wearable Apps</p>
                        </li>
                        <li>
                            <h5>Game Development</h5>
                            <p>2D, 3D and Isometric Games</p>
                        </li>
                        <li>
                            <h5>Blockchain Development</h5>
                            <p>Blockchain Dapp Development</p>
                        </li>
                        <li>
                            <h5>Augmented Reality</h5>
                            <p>Modern AR apps</p>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default SolutionModel;