import React from 'react'
import { Link } from 'react-router-dom'
// import './hover.css'

const HoverModel = ({ openn, value }) => {
    console.log(value)
    return (
        <div className={!openn?'main_model_div' : ''} >
            <div className={!openn ? 'sub_model_div' : '.sub_model_div2'}>
                <div className='info_div'>
                    <h3> Our Services </h3>
                    <div className='para_div'>
                        <p>{value === 'services' || value==='1'?
                            'Leveraging cutting-edge technologies to build industry-leading digital products'
                            : 'Customized digital solutions to help clients build their competitive edge.'
                                
                        }</p>

                    </div>
                </div>
                <div className='services_div'>
                    <h3>{value === 'services' || value===1 ? 'Services' : 'Products' 
                        
                        
                    }</h3>
                    <div className={!openn ? 'service_link_div' : '.service_link_div2'}>
                        <ul className='service_ul'>
                            <li>
                                <Link className='link'>
                                    {value === 'services' || value===1 ? 'Mobile Application' : 
                                        'Cubix Happyforce' 
                                    }
                                </Link>
                                <p>{value === 'services'|| value===1 ? 'iOS, Android and Wearable Apps'
                                    :  'HR Solution'
                                }
                                </p>
                            </li>
                            <li>
                                <Link className='link'>
                                    {value === 'services' || value===1? 'Game Developement' :  'Cubix Shop'
                                        
                                    }
                                </Link>
                                <p>
                                    {value === 'services' || value===1? '2D , 3D and isometric Games'
                                        :  'Marketplace Solution' 
                                            
                                    }
                                </p>
                            </li>
                            <li>
                                <Link className='link'>
                                    {value === 'services' || value===1? 'Blockchain Development' :  'On-Demand Delivery'
                                        
                                    }
                                </Link>
                                <p>
                                    {value === 'services' || value===1? 'Blockchain Dapp Development'
                                        :  'On Demand Delivery solution' 
                                    }
                                </p>
                            </li>


                                        <li>
                                            <Link className='link'>{value === 'services' || value===1? 'Augmented Reality' : 'Cubix Chain'}</Link>
                                            <p>{value === 'services' ? 'Modern AR Apps' : 'Blockchain Solution'}</p>
                                        </li>
                                        <li>
                                            <Link className='link'>{value === 'services' || value===1? 'Business Intelligence' : 'Cubix Insight Machine'}</Link>
                                            <p>{value === 'services' ? 'Bl , Analytics and Big data' : 'Machine Solution'}</p>
                                        </li>
                        </ul>
                        <ul className='service_ul2'>

                            <li>
                                <Link className='link'>{value === 'services' || value===1? 'Artificial Intelligence' : 'Cubix Hero'}</Link>
                                <p>{value === 'services' || value===1? 'AI and Machine Learning' : 'Powerfull RPG Solution'}</p>
                            </li>
                            <li>
                                <Link className='link'>{value === 'services' || value===1? 'Big Data' : 'Messenger'}</Link>
                                <p>{value === 'services' || value===1? 'Apps Integrated with Big Data' : 'Real-time messaging solution'}</p>
                            </li>
                            <li>
                                <Link className='link'>{value === 'services' || value===1? 'Web Development' : 'Chat Bot'}</Link>
                                <p>{value === 'services' || value===1? 'Robust Web Development' : 'Smart Chatbot solution'}</p>
                            </li>
                            <li>
                                <Link className='link'>{value === 'services' || value===1? 'MVP Development' : 'Social Platform'}</Link>
                                <p>{value === 'services' || value===1? 'MVP for startups' : 'Social-App building Platform'}</p>
                            </li>
                            <li>
                                <Link className='link'>{value === 'services' || value===1? 'Share Point' : 'Events Management'}</Link>
                                <p>{value === 'services' || value===1? 'Microsoft SharePoint Development Services' : 'Digital event management'}</p>
                            </li>
                        </ul>
                    </div>

                </div>
                <div className={!openn ? 'work_div' : 'work_div2'}>
                    <h3>{value === 'services' || value===1? 'How we work' : 'Core services'}</h3>
                    <ul className='work_ul'>
                        <li>
                            <h5>{value === 'services' || value===1? 'Discovery' : 'Mobile Application'}</h5>
                            <p>{value === 'services' || value===1? 'Exploring project requirements' : 'iOS, Android and Wearable Apps'}</p>
                        </li>
                        <li>
                            <h5>{value === 'services' || value===1? 'Design' : 'Game Development'}</h5>
                            <p>{value === 'services' || value===1? 'Intuitive and engaging designs' : '2D, 3D and Isometric Games'}</p>
                        </li>
                        <li>
                            <h5>{value === 'services' || value===1? 'Development' : 'Blockchain Development'}</h5>
                            <p>{value === 'services' || value===1? 'Agile development processes' : 'Blockchain Dapp Development'}</p>
                        </li>
                        <li>
                            <h5>{value === 'services' || value===1? 'Testing' : 'Augmented Reality'}</h5>
                            <p>{value === 'services' || value===1? 'Incremental testing and QA' : 'Modern AR apps'}</p>
                        </li>
                        {value === 'services' || value===1?

                            <li>
                                <h5>Deployment</h5>
                                <p>Full-function product delivery</p>
                            </li>
                            : null
                        }
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default HoverModel;