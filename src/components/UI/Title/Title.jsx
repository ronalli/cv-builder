import propTypes from 'prop-types'
import classNames from 'classnames'


const Title = ({ size, className, children, ...attrs }) => {
	const classes = classNames(`ui-title-${size}`, className)
	return (
		<p className={classes} {...attrs}>{children}</p>
	)
}

Title.propTypes = {
	size: propTypes.oneOf(['1', '2', '3']),
	className: propTypes.string,
	children: propTypes.node
}

Title.defaultProps = {
	size: '1',
	className: ''
}

export default Title;