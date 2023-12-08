import Logo from './assets/images/logo.svg';
import './assets/styles/styles.scss';
import BillSection from './components/BillSection';
import TotalSection from './components/TotalSection';

function App() {
	return (
		<main className='app h-screen w-full flex flex-col justify-center items-center gap-10'>
			<img src={Logo} alt='' className='pt-56 md:pt-0' />

			<section className='tipContainer h-[100%] w-[100%] md:h-[50%] md:w-[60rem] flex flex-col md:flex-row gap-4 p-8 rounded-xl shadow-lg'>
				<BillSection />
				<TotalSection />
			</section>
		</main>
	);
}

export default App;
