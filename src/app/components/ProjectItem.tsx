import React, {type FC} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type rentImg from '/Users/miguel/portfolio/public/assets/rentImg.png';

type ImageType = string | typeof rentImg;

type ProjectItemProps = {
	title: string;
	backgroundImg: ImageType;
	projectUrl: string;
};

const ProjectItem: FC<ProjectItemProps> = ({title, backgroundImg, projectUrl}) => (
	<div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#7ab2e4] to-[#cbe1f4] '>
		<Image className='rounded-xl group-hover:opacity-10' src={backgroundImg} alt='rent image'/>
		<div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
			<h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
			<p className='pb-4 pt-2 text-white text-center'>React/Next JS</p>
			<Link href={projectUrl}>
				<p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
			</Link>
		</div>
	</div>
);

export default ProjectItem;