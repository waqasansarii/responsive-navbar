import React, { useState } from 'react'
import PhoneIcon from '@material-ui/icons/Phone';
import HoverModel from '../unusedModels/onHoverModel'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ServiceModel from './models/sevicemodel'
import SolutionModel from './models/solution'
import AboutModel from './models/about'
import ResourcesModel from './models/resources'
// import HoverModel from './service/aboutModel'
const NavList = ({ hideFunc, showFunc, openList, hide ,aboutFunc,hideAbout}) => {
    // console.log(hide)
    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState(false)
    let [value, setValue] = useState('')
    const handleShoww = (e) => {
        setValue(e)
        setOpen(!open)
        // console.log(e)
    }
    const handleAbout = (e) => {
        setValue(e)
        setOpen2(!open2)
        // console.log(e)
        // console.log('run')
    }
    // console.log(value)
    // const show1 = (e) =>{
    //     // console.log('hello',e.target.value)
    //     setOpen(!false)
    //     setValue(e.target.value)
    // }
    

    return (
        <div className='main_navList_div'>
            {!openList ?

                <div className='navList_div'>
                    <ul className='navList_ul' >
                        <li
                          value='1' 
                          className='servicesss'
                           >Services
                           
                           <div className='model_div'>
                           <ServiceModel value={value}   />

                           </div> 
                        
                        </li>
                        <li  value='2'   className='solutions'  >Solutins
                        <div className='model_div2'>
                           <SolutionModel  />

                           </div>
                        </li>
                        <li>Work</li>
                        <li onMouseOver={aboutFunc} value='3'className='abouts' onMouseLeave={hideAbout} >About
                        <div className='model_div3'>
                           <AboutModel  />

                           </div>
                        </li>
                        <li onMouseOver={aboutFunc} value='4' className='resourcess' onMouseLeave={hideAbout}>Resources
                        <div className='model_div4'>
                           <ResourcesModel  />

                           </div>
                        </li>
                        <li>Contact</li>
                        <li className='cl_li'>
                            <PhoneIcon className='callIcon' />
                            <p> 866-978-2220</p>
                        </li>
                        <li>
                            <button className='estimate_btn'>ESTIMATE PROJECT</button>
                        </li>
                    </ul>
                </div>
                :

                <div className='div_list2'>
                    <div className='main_list2'>
                        <ul className='list_ul2'>
                            <li className='services' >
                                <p>Services</p>
                                <ExpandMoreIcon className='expand' name='2' onClick={() => handleShoww('services')} />
                            </li>
                            {open===true && value==='services' ?

                                <ul>
                                    {/* <HoverModel value={value} openn={open} /> */}
                                    <ServiceModel openn={open} />
                                </ul>
                                : null
                            }
                            <li className='solution'>
                                <p>Solutions</p>
                                <ExpandMoreIcon className='expand' onClick={() => handleShoww('solution')} />
                            </li>
                            {open ===true && value=='solution' ?
                                
                                <ul>
                                    <SolutionModel value={value} openn={open} />
                                </ul>
                                : null
                            }
                            <li className='work'>
                                <p>Work</p>
                            </li>
                            <li className='about'>
                                <p>About</p>
                                <ExpandMoreIcon className='expand' onClick={()=>handleAbout('about')} />
                            </li>
                            {open2 ===true && value=='about' ?
                                
                                <ul>
                                    <AboutModel value={value} open2={open2} />
                                </ul>
                                : null
                            }
                            <li className='resources'>
                                <p>Resource</p>
                                <ExpandMoreIcon className='expand' onClick={()=>handleAbout('resources')} />
                            </li>
                            {open2 ===true && value=='resources' ?
                                
                                <ul>
                                    <ResourcesModel value={value} open2={open2} />
                                </ul>
                                : null
                            }
                            <li className='contact'>
                                <p>Contact</p>
                            </li>
                        </ul>
                    </div>
                </div>
            }
        </div>
    )
}

export default NavList