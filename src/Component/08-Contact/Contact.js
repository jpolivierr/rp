import React from 'react'
import './Contact.css'
import Button from '../../Util/Button/Button'
import SectionTitle from '../../Util/SectionTitle/SectionTitle'

 function Contact() {
    return (
        <div className='Contact'>
            <div className="C-bkg"></div>
            <div className="container">
                <div className="contact-box">
                <SectionTitle
                scstyle = 'Sc-title Sc-title-center Tcwhite' 
                color ='white'
                dw= ''
                number='06'
                subTitle='Contact'
                Title='CONTACT US'
                titleWidth ='100%'
               /> 
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores perspiciatis deleniti dignissimos!.</p>
                    <form action="">
                        <input type="text" className="fName" placeholder='First Name'/>
                        <input type="text" className="lName" placeholder='Last Name'/>
                        <input type="email" className="email" placeholder='Email'/>
                        <input type="text" className="message"  placeholder='Message'/>
                        
                    </form>

                    <Button type= 'submit' 
                                label='submit' 
                                color='white'
                                backcolor = 'var(--main-color)'
                                />
                </div>
            </div>
        </div>
    )
}
export default Contact