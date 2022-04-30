import React from 'react'
import { Content, HTMLContent } from '../Content'

const ShowcaseTop = ({
	thisSectionId,
	nextSectionId,
	coverImage,
	coverImageAlt = '',
	content1,
	content2,
}) => {
	return (
		<section id='two' className='spotlight style1 bottom'>
			<span className='image fit main'>
				<img src='images/pic02.jpg' alt='' />
			</span>
			<div className='content'>
				<div className='container'>
					{/* <div className='row'> */}
					<div className='lg:flex'>
						{/* <div className='col-4 col-12-medium'> */}
						<div className='lg:basis-1/3 lg:my-auto'>
							<HTMLContent content={content1} className='lg:w-fit lg:mx-auto' />
						</div>
						<div className='lg:col-end-2 lg:columns-2 lg:break-inside-auto lg:basis-2/3'>
							<HTMLContent content={content2} />
						</div>
					</div>
				</div>
			</div>
			<a href='#two' className='goto-next scrolly'>
				Next
			</a>
		</section>
	)
}

export default ShowcaseTop
