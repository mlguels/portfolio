/* eslint-disable react/no-unescaped-entities */
'use client';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import {HiOutlineChevronDoubleUp} from 'react-icons/hi';
import {useForm, ValidationError} from '@formspree/react';
import LinkedIn from './LinkedIn';
import Github from './Github';
import Email from './Email';

const Contact = () => {
	const [state, handleSubmit] = useForm('mqkowwke');
	if (state.succeeded) {
		return <h3 className='flex justify-center text-[#0EA5E9]'>Talk to you Soon!</h3>;
	}

	return (
		<main id='contact' className='w-full lg:h-screen bg-[url(/svg/s.svg)]'>
			<div className='max-w-[1240px] m-auto px-4 py-16 w-full'>
				<p className='text-xl tracking-widest uppercase text-[#0EA5E9] font-bold'>Contact</p>
				<h2 className='py-4'>Get In Touch</h2>
				<div className='grid lg:grid-cols-5 gap-8'>
					{/* left */}
					<div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
						<div className='lg:p-2 h-full'>
							<img className='rounded-xl hover:scale-105 ease-in duration-300' src='/assets/ContactPic.webp' alt='/'/>
							<div>
								<h2 className='py-2 text-[#0EA5E9]'>Miguel Rodriguez</h2>
								<p className='font-thin'>Software Engineer</p>
								<p className='py-4 font-thin'>I'm available for freelance or full-time positions.</p>
							</div>
							<div>
								<div className='flex justify-center'>
									<Image src='/assets/LightModeLogo.png' width={135} height={100} alt='Coder'/>
								</div>
								<p className='uppercase pt-8 font-bold'>Connect With Me</p>
								<hr className='border-b border-gray-300 my-8'/>
								<div className='flex items-center justify-center gap-5 p-5 bg-white'>
									<a href='https://www.linkedin.com/in/miguel-rodriguez-6a5991222/' target='_blank' rel='noreferrer'>
										<LinkedIn />
									</a>
									<a href='https://github.com/mlguels' target='_black' rel='noreferrer'>
										<Github />
									</a>
									<div className='pt-2'>
										<Email />
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* right */}
					<div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
						<div className='p-4'>
							<form onSubmit={handleSubmit}>
								<div className='grid md:grid-cols-2 gap-4 w-full py-2'>
									<div className='flex flex-col'>
										<label className='uppercase text-sm py-2'>Name</label>
										<input placeholder='Miguel Rodriguez' name='name' type='text' className='border-2 rounded-lg p-3 flex border-gray-300' />
									</div>
									<div className='flex flex-col'>
										<label className='uppercase text-sm py-2'>Contact Number</label>
										<input placeholder='**********' name='contact_number' type='text' className='border-2 rounded-lg p-3 flex border-gray-300' />
										<ValidationError
											prefix='Contact Number'
											field='contact_number'
											errors={state.errors}
										/>
									</div>
								</div>
								<div className='flex flex-col'>
									<label htmlFor='email' className='uppercase text-sm py-2'>Email</label>
									<input placeholder='mrodandres@icloud.com' id='email' type='email' name='email' className='border-2 rounded-lg p-3 flex border-gray-300' />
									<ValidationError
										prefix='Email'
										field='email'
										errors={state.errors}
									/>
								</div>
								<div className='flex flex-col'>
									<label className='uppercase text-sm py-2'>Subject</label>
									<input placeholder='Offer' name='subject' type='text' className='border-2 rounded-lg p-3 flex border-gray-300' />
								</div>
								<div className='flex flex-col'>
									<label className='uppercase text-sm py-2'>Message</label>
									<textarea placeholder='You are hired!' id='message' name='message' className='border-2 rounded-lg p-3 border-gray-300' rows={10} ></textarea>
									<ValidationError
										prefix='Message'
										field='message'
										errors={state.errors}
									/>
								</div>
								<button type='submit' disabled={state.submitting} className='shadow-xl shadow-gray-400 rounded-xl uppercase bg-[#0EA5E9] w-full p-4 text-white mt-4'>Send Message</button>
							</form>
						</div>
					</div>
				</div>
				<div className='flex justify-center py-12'>
					<Link href='/'>
						<div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-200 animate-bounce'>
							<HiOutlineChevronDoubleUp className='text-[#0EA5E9]'/>
						</div>
					</Link>
				</div>
			</div>
		</main>
	);
};

export default Contact;
