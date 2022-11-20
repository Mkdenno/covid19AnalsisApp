import React, { useState } from 'react'
import Statistic from './Statistic'
import './table.css'

const Table = ({ stats}) => {
	const [search, setSearch] = useState("")


	const displaystats =
	stats.filter((stat) => {
		if(stat.country.toLowerCase().includes(search.toLowerCase())) {
			return stat
		}
	}).map((stat) =>  {
		return (
		<Statistic
			key={stat.id}
			continent={stat.continent}
			country={stat.country}
			population={stat.population}
			cases={stat.cases}
			deaths={stat.deaths}
			tests={stat.tests}
			day={stat.day}
			time={stat.time}

		/>
	)})

	return (
		<>
			<div className=" mx-auto tableSection">

				<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
					<h1>Covid19 statistics </h1>
					<div className="p-4">
						<label for="table-search" className="sr-only">Search</label>
						<div className="relative mt-1">
							<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
								<svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd"
										d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
										clip-rule="evenodd"></path>
								</svg>
							</div>
							<input value={search} onChange={ (e) => setSearch(e.target.value)} type="text"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for Country" />
						</div>
					</div>
					<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
						<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
							<tr>
								<th scope="col" className="px-6 py-3">
									Continent
								</th>
								<th scope="col" className="px-6 py-3">
									Country
								</th>
								<th scope="col" className="px-6 py-3">
									Population
								</th>
								<th scope="col" className="px-6 py-3">
									Cases
								</th>
								<th scope="col" className="px-6 py-3">
									Deaths
								</th>
								<th scope="col" className="px-6 py-3">
									Tests
								</th>
								<th scope="col" className="px-6 py-3">
									Day
								</th>
								<th scope="col" className="px-6 py-3">
									Time
								</th>
							</tr>
						</thead>
						{
							displaystats
						}
						{/* <Statistic/> */}
					</table>
				</div>
			</div>
		</>
	)
}

export default Table