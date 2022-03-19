import styled from 'styled-components'
import { Header, Footer, Avatar, Range, Title, Description } from './components'

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

	const handleAvatarClick = () => console.log('avatar click')
	const handlePrintClick = () => console.log('print click')

	return (
		<div className="ui-wrapper">

			<Header onClick={handlePrintClick} />

			<div className="ui-content-wrapper">
				<Wrapper>
					<div className="ui-container">
						<Row itemsCenter>
							<Sidebar>
								<Avatar onClick={handleAvatarClick} />
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
									khakimov.nikita.vch@gmail.com
								</Description>
								<Description isPrimary>0661234567</Description>
							</Sidebar>

							<Content>
								<Title size='3'>Education:</Title>
								<Description>Dnipro University of Technology</Description>

								<Title size="3" isUppercase style={{ marginTop: '3.6rem' }}>Work experience</Title>
								<Description>Electrical engineer</Description>

								<Title size="3" isUppercase style={{ marginTop: '3rem' }}>Skills:</Title>
								<Range />
								<Range />
								<Range />

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
