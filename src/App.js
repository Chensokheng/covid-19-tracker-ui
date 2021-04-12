import AnalyticChart from './components/AnalyticChart';
import ListOfStat from './components/ListOfStat';
import Navbar from './components/Navbar';

export default function App() {
	return (
		<div className="font-inter bg-gray-900 min-h-screen pb-36">
			<Navbar />
			<div
				className="w-full flex items-center justify-center flex-col xl:flex-row mt-20"
				style={{
					minHeight: '70vh',
				}}
			>
				<ListOfStat />
				<AnalyticChart />
			</div>
		</div>
	);
}
