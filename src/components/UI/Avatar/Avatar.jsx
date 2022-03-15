import styled from 'styled-components'
import propTypes from 'prop-types'

const Wrapper = styled.div`
	width: 10rem;
	height: 10rem;
	margin-right: 4rem;
	border-radius: ${(props) => (props.isSquery ? '10px' : '50%')};
	background-color: #bfbfbf;
	cursor: pointer;
`

const Avatar = ({ isSquery, onClick }) => {
	return <Wrapper isSquery={isSquery} onClick={onClick} />
}

Avatar.propTypes = {
	isSquery: propTypes.bool,
	onClick: propTypes.func
}

Avatar.defaultProps = {
	isSquery: false,
	onClick: () => { }
}


export default Avatar;