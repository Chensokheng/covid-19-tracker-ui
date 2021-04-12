import React from 'react';

export default function StatCard({ stat, valueColor }) {
	const { label, value, delta } = stat;
	return (
		<div className="h-28 sm:w-56 sm:h-48 w-full  bg-indigo-600 rounded flex items-center p-5 hover:tracking-wide transition-all cursor-pointer">
			<div>
				<h3 className="text-white text-sm">{label}</h3>
				<div className={`flex items-center ${valueColor}`}>
					<h1 className="text-3xl font-black">{value}</h1>
					<h3 className="ml-2 text-sm">{delta ? '+' + delta : ''}</h3>
				</div>
			</div>
		</div>
	);
}
