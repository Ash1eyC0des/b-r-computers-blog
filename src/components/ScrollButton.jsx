import React, { useState } from 'react'

const ScrollButton = () => {
	const [visible, setVisible] = useState(false)

	const toggleVisible = () => {
		const scrolled = document.documentElement.scrollTop
		if (scrolled > 300) {
			setVisible(true)
		} else if (scrolled <= 300) {
			setVisible(false)
		}
	}

	if (typeof window !== 'undefined') {
		window.addEventListener('scroll', toggleVisible)
	}

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
			/* you can also use 'auto' behaviour
		in place of 'smooth' */
		})
	}

	return (
		<a
			href='#'
			className={visible ? 'scroll-top' : 'scroll-top disabled'}
			onClick={scrollToTop}
		>
			<i className='fas fa-angle-up' aria-hidden='true'></i>
		</a>
	)
}

export default ScrollButton
