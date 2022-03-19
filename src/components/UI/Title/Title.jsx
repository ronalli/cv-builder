import propTypes from 'prop-types'
import classNames from 'classnames'
import styled from 'styled-components'

const Wrapper = styled.div`
		margin-bottom: 1rem;
		button {
			display: inline-block;
			transition: 0.1s all ease;
			opacity: 0 !important;
		}
		&:hover button {
			opacity: 1 !important;
		}
		p {
			display: inline-block;
			margin-bottom: 0;
		}
	`

const Title = ({ size, className, children, isShowButton, isUppercase, onClick, ...attrs }) => {

	const classes = classNames(`ui-title-${size}`, className, { isUppercase })
	return (
		<Wrapper>
			<p
				className={classes}
				contentEditable
				suppressContentEditableWarning
				spellCheck={false}
				{...attrs}
			>{children}</p>
			{
				isShowButton && <button className="ui-button isLink" onClick={onClick}>+</button>
			}

		</Wrapper>
	)
}

Title.propTypes = {
	size: propTypes.oneOf(['1', '2', '3']),
	className: propTypes.string,
	children: propTypes.node,
	isUppercase: propTypes.bool,
	isShowButton: propTypes.bool,
	onClick: propTypes.func
}

Title.defaultProps = {
	size: '1',
	className: '',
	isUppercase: false,
	isShowButton: false,
	onClick: () => { }
}

export default Title;