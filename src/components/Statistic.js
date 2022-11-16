import React from 'react'
import './statistic.css'
const Statistic = ({ continent,
    country,
    population,
    cases,
    deaths,
    tests,
    day,
    time }) => {

    return (
        <>
            <tbody>
                <tr
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td class="px-6 py-4">
                        {continent}
                    </td>
                    <td class="px-6 py-4">
                        {country}
                    </td>
                    <td class="px-6 py-4">
                        {population}
                    </td>
                    <td class="px-6 py-4">
                        <div className='casess'>

                            <th scope="col" class="px-6 py-3">

                                new: <span className='cased'>{cases.new}</span>
                            </th>
                            <th scope="col" class="px-6 py-3">
                                active: <span className='cased'>{cases.active}</span>
                            </th>
                            <th scope="col" class="px-6 py-3">
                                critical: <span className='cased'>{cases.critical}</span>
                            </th>
                            <th scope="col" class="px-6 py-3">
                                recovered: <span className='cased'> {cases.recovered}</span>

                            </th>
                            <th scope="col" class="px-6 py-3">
                                1M_pop: <span className='cased'>{ cases['1M_pop']}</span>
                            </th>
                            <th scope="col" class="px-6 py-3">
                                total: <span className='cased'> {cases.total}</span>
                            </th>
                        </div>

                    </td>
                    <td class="px-6 py-4">
                        <div className='casess'>
                            <th scope="col" class="px-6 py-3">
                            new: <span className='cased'>{deaths.new}</span>
                            </th>
                            <th scope="col" class="px-6 py-3">
                                1M_pop: <span className='cased'>{deaths['1M_pop']}</span>
                            </th>
                            <th scope="col" class="px-6 py-3">
                                total: <span className='cased'>{deaths.total}</span>
                            </th>
                        </div>
                    </td>
                    <td class="px-6 py-4">
                        <div className='casess'>
                            <th scope="col" class="px-6 py-3">
                                1M_pop: <span className='cased'>{tests['1M_pop']}</span>
                            </th>
                            <th scope="col" class="px-6 py-3">
                                total: <span className='cased'>{tests.total}</span>
                            </th>
                        </div>
                    </td>
                    <td class="px-6 py-4">
                        {day}

                    </td>
                    <td class="px-6 py-4">
                        {time}

                    </td>

                </tr>

            </tbody>
        </>

    )
}

export default Statistic