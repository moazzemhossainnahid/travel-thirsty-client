import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';
import Fade from 'react-reveal/Fade';
import { Bounce, Zoom } from 'react-reveal';
import Swing from 'react-reveal/Swing';

const ContactDetails = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_dml7lyi', 'template_na9m8go', form.current, 'wdT4zt6LdX8GyA82Y')
            .then((result) => {
                swal("Successfull", "You Send an Email!", "success");
                e.target.reset();
            }, (error) => {
                swal("OPPSS...", "Email not Send!", "error");
            });
    };

    return (

        <div class=" mx-auto py-16">
            <div class="lg:flex">
                <div class="xl:w-2/5 lg:w-2/5 bg-secondary py-16 xl:rounded-bl rounded-tl rounded-tr xl:rounded-tr-none">
                    <div class="xl:w-5/6 xl:px-0 px-8 mx-auto">
                        <h1 class="xl:text-4xl text-3xl pb-4 text-white font-bold"><Fade left>Get in touch</Fade></h1>
                        <p class="text-xl text-white pb-8 leading-relaxed font-normal lg:pr-4"><Bounce right>Got a question about us? Are you interested in partnering with us? Have some suggestions or just want to say Hi? Just contact us. We are here to asset you.</Bounce></p>
                        <div className="text-left">
                                <div class="flex pb-4 items-center">
                                    <div aria-label="phone icon" role="img">
                                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/contact_indigo-svg1.svg" alt="phone" />

                                    </div>
                                    <p class="pl-4 text-white text-base"><Swing>+1 (308) 321 321</Swing></p>
                                </div>
                                <div class="flex items-center">

                                    <div aria-label="email icon" role="img">
                                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/contact_indigo-svg2.svg" alt="email" />

                                    </div>
                                    <p class="pl-4 text-white text-base"><Swing>Info@imerntech.com</Swing></p>

                                </div>

                                <p class="text-lg text-white pt-10 tracking-wide">
                                    <Zoom top>
                                    545, Street 11, Block F
                                    <br />
                                    Banani, Dhaka, Bangladesh
                                    </Zoom>
                                </p>

                        </div>
                    </div>
                </div>
                <div class="xl:w-3/5 lg:w-3/5 bg-gray-200 dark:bg-gray-600 h-full pt-5 pb-5 xl:pr-5 xl:pl-0 rounded-tr rounded-br">
                    <form ref={form} onSubmit={sendEmail} id="contact" class="bg-white dark:bg-gray-800 text-left py-4 px-8 rounded-tr rounded-br">
                        <h1 class="text-4xl text-gray-800 dark:text-white font-extrabold mb-6">Enter Details</h1>
                        <div class="block xl:flex w-full flex-wrap justify-between mb-6">
                            <div class="w-2/4 max-w-xs mb-6 xl:mb-0">
                                <Fade left>
                                <div class="flex flex-col">
                                    <label for="full_name" class="text-gray-800 dark:text-white text-sm font-semibold leading-tight tracking-normal mb-2">Full Name</label>
                                    <input required id="full_name" name="name" type="text" class="dark:bg-gray-900 dark:text-white dark:border-gray-700 focus:outline-none focus:border focus:border-secondary font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="Full Name" aria-label="enter your full name input" />
                                </div>
                                </Fade>
                            </div>
                            <div class="w-2/4 max-w-xs xl:flex xl:justify-end">
                            <Fade right>
                                <div class="flex flex-col">
                                    <label for="email" class="text-gray-800 dark:text-white text-sm font-semibold leading-tight tracking-normal mb-2">Email</label>
                                    <input required id="email" name="email" type="email" class="dark:bg-gray-900 dark:text-white dark:border-gray-700 focus:outline-none focus:border focus:border-secondary font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="example@email.com" aria-label="enter your email input" />
                                </div>
                                </Fade>
                            </div>
                        </div>
                        <div class="flex w-full flex-wrap">
                            <div class="w-2/4 max-w-xs">
                            <Fade left>
                                <div class="flex flex-col">
                                    <label for="phone" class="text-gray-800 dark:text-white text-sm font-semibold leading-tight tracking-normal mb-2">Phone</label>
                                    <input required id="phone" name="phone" type="tel" class="dark:bg-gray-900 dark:text-white dark:border-gray-700 focus:outline-none focus:border focus:border-secondary font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="+92-12-3456789" aria-label="enter your phone number input" />
                                </div>
                                </Fade>
                            </div>
                        </div>

                        <div class="w-full mt-6">
                            <div class="flex flex-col">
                                <label class="text-sm font-semibold text-gray-800 dark:text-white mb-2" for="message">Message</label>
                                <textarea placeholder="Enter Your Message..." name="message" class="dark:bg-gray-900 dark:text-white dark:border-gray-700 border-gray-300 border mb-4 rounded py-2 text-sm outline-none resize-none px-3 focus:border focus:border-secondary" rows="8" id="message" aria-label="enter your message input"></textarea>
                            </div>
                            <button type="submit" class="focus:outline-none bg-secondary transition duration-150 ease-in-out hover:bg-primary rounded text-white px-8 py-3 text-sm leading-6 focus:border-4 focus:ring-2 focus:ring-offset-2 focus:ring-secondary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default ContactDetails;