import { Header, Footer, Avatar, Title, Description } from './components'


const App = () => {


	const handleAvatarClick = () => console.log('avatar click')
	const handlePrintClick = () => console.log('print click')

	return (
		<div className="ui-wrapper">

			<Header onClick={handlePrintClick} />

			<div className="ui-content-wrapper">
				<section className="ui-section">
					<div className="ui-container">

						<Avatar onClick={handleAvatarClick} />
						<Title size='1'>hello</Title>
						<Description>world!</Description>

					</div>
				</section>
			</div>

			<Footer />

		</div>
	)
}

export default App;
