import { Header, Footer, Avatar } from './components'


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
						<h1 className="ui-title-1">Hello world!</h1>
					</div>
				</section>
			</div>

			<Footer />

		</div>
	)
}

export default App;
