import propTypes from 'prop-types'
import classNames from 'classnames'

const Title = ({ size, className, children, isUppercase, ...attrs }) => {
	const classes = classNames(`ui-title-${size}`, className, { isUppercase })
	return (
		<p
			className={classes}
			contentEditable
			suppressContentEditableWarning
			spellCheck={false}
			{...attrs}
		>{children}</p>
	)
}

Title.propTypes = {
	size: propTypes.oneOf(['1', '2', '3']),
	className: propTypes.string,
	children: propTypes.node,
	isUppercase: propTypes.bool
}

Title.defaultProps = {
	size: '1',
	className: '',
	isUppercase: false
}

export default Title;