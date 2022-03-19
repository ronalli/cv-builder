import styled from 'styled-components'
import propTypes from 'prop-types'
import { useState, useEffect } from 'react'

import { ReactComponent as CameraIcon } from '../../../assets/icons/camera.svg'

const Wrapper = styled.div`
	width: 10rem;
	height: 10rem;
	border-radius: ${(props) => (props.isSquery ? '10px' : '50%')};
	background-color: #bfbfbf;
	cursor: pointer;

	input {
		display: none;
	}

	label,
	label div {
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 10rem;
		height: 10rem;
		border-radius: ${(props) => (props.isSquery ? '10px' : '50%')};
	}
`

const Avatar = ({ isSquery }) => {

	const [selectedFile, setSelectedFile] = useState(null);
	const [preview, setPreview] = useState(null);

	useEffect(() => {
		const objectUrl = selectedFile && URL.createObjectURL(selectedFile);
		setPreview(objectUrl);

		return () => URL.revokeObjectURL(objectUrl);
	}, [selectedFile])

	return (
		<Wrapper isSquery={isSquery}>
			<input
				type="file"
				id="Avatar"
				value=""
				onChange={(e) => { setSelectedFile(e.target.files[0]) }}
			/>
			<label htmlFor="Avatar">
				{
					preview
						? <div style={{
							backgroundImage: `url(${preview})`,
							backgroundSize: 'cover',
						}} />
						: <CameraIcon />
				}
			</label>

		</Wrapper >
	)
}

Avatar.propTypes = {
	isSquery: propTypes.bool,
}

Avatar.defaultProps = {
	isSquery: false,
}

export default Avatar;