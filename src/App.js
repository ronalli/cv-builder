import { useState, useRef } from 'react'
import { useReactToPrint } from 'react-to-print'
import styled from 'styled-components'
import { Header, Footer, Avatar, Range, Title, Description } from './components'

import { ReactComponent as PhoneIcon } from './assets/icons/phone.svg'
import { ReactComponent as MailIcon } from './assets/icons/mail.svg'

const Wrapper = styled.div`
	max-width: 1200px;
	margin: 2rem auto;
	padding: 3rem 2rem;
	background-color: white;
	border: 1px solid #ececec;
	box-shadow: 5px 7px 10px 4px #ececec;
	border-radius: 14px;
`

const Row = styled.section`
	display: flex;
	flex-wrap: wrap;
	align-items: ${(props) => (props.itemsCenter ? 'center' : 'start')};
	margin: 2rem 0;
`

const Content = styled.div`
	flex: 3;
	margin-left: 1rem;
`

const Sidebar = styled.div`
	flex: 1;
	margin-rigth: 1rem;
`

const App = () => {

	const componentRef = useRef();
	const handlePrint = useReactToPrint({
		content: () => componentRef.current,
	});

	const [skillsCounter, setSkillsCounter] = useState(1);
	const [worksCounter, setWorksCounter] = useState(1);

	return (
		<div className="ui-wrapper">

			<Header onClick={handlePrint} />

			<div className="ui-content-wrapper">
				<Wrapper>
					<div className="ui-container" ref={componentRef} >
						<Row itemsCenter>
							<Sidebar>
								<Avatar />
							</Sidebar>

							<Content>
								<Title size='1'>hello</Title>
								<Description>world!</Description>
							</Content>
						</Row>

						<Row>
							<Sidebar>
								<Title size='3' isUppercase>About me:</Title>
								<Description>Student</Description>
								<Description>Ukraine | tehnar.net.ua</Description>

								<Description isPrimary style={{ margintTop: '2rem' }}>
									<MailIcon style={{ marginRight: '0.6rem' }} />
									khakimovnv@gmail.com
								</Description>
								<Description isPrimary>
									<PhoneIcon style={{ marginRight: '0.6rem' }} />
									0661234567
								</Description>
							</Sidebar>

							<Content>
								<Title size='3'>Education:</Title>
								<Description>Dnipro University of Technology</Description>

								<Title size="3" isUppercase isShowButton onClick={() => setWorksCounter(worksCounter + 1)} style={{ marginTop: '3.6rem' }}>Work experience</Title>
								{new Array(worksCounter).fill(1).map((_, i) => <Description key={i}>{i + 1}. Electrical engineer</Description>)}

								<Title size="3" isUppercase isShowButton onClick={() => setSkillsCounter(skillsCounter + 1)} style={{ marginTop: '3rem' }}>Skills:</Title>
								{new Array(skillsCounter).fill(1).map((_, i) => <Range key={i} />)}

							</Content>
						</Row>
					</div>
				</Wrapper>
			</div>

			<Footer />

		</div>
	)
}

export default App;
