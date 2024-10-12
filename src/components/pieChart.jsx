import React, { useState } from 'react';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from 'recharts';

export default function PieCh() {
  const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF637C'];

  const budgetYearly = {
    '2017': [
      { name: 'Education', value: 10.31 }, // Example values in billions
      { name: 'Health', value: 7.69 },
      { name: 'Infrastructure', value: 12.85 },
      { name: 'Defense', value: 5.15 },
      { name: 'Others', value: 15.54 },
    ],
    '2018': [
      { name: 'Education', value: 13.21 },
      { name: 'Health', value: 10.51 },
      { name: 'Infrastructure', value: 16.21 },
      { name: 'Defense', value: 7.67 },
      { name: 'Others', value: 11.92 },
    ],
    '2019': [
      { name: 'Education', value: 14.36 },
      { name: 'Health', value: 13.27 },
      { name: 'Infrastructure', value: 15.86 },
      { name: 'Defense', value: 6.62 },
      { name: 'Others', value: 16.07 },
    ],
    '2020': [
      { name: 'Education', value: 15.78 },
      { name: 'Health', value: 14.90 },
      { name: 'Infrastructure', value: 17.65 },
      { name: 'Defense', value: 7.75 },
      { name: 'Others', value: 12.69 },
    ],
    '2021': [
      { name: 'Education', value: 16.56 },
      { name: 'Health', value: 15.03 },
      { name: 'Infrastructure', value: 18.81 },
      { name: 'Defense', value: 8.29 },
      { name: 'Others', value: 13.37 },
    ],
    '2022': [
      { name: 'Education', value: 17.32 },
      { name: 'Health', value: 15.64 },
      { name: 'Infrastructure', value: 19.11 },
      { name: 'Defense', value: 9.22 },
      { name: 'Others', value: 12.99 },
    ],
    '2023': [
      { name: 'Education', value: 25.36 },
      { name: 'Health', value: 23.41 },
      { name: 'Infrastructure', value: 20.21 },
      { name: 'Defense', value: 10.34 },
      { name: 'Others', value: 11.14 },
    ],
    '2024': [
      { name: 'Education', value: 28.54 },
      { name: 'Health', value: 25.40 },
      { name: 'Infrastructure', value: 22.11 },
      { name: 'Defense', value: 12.60 },
      { name: 'Others', value: 8.35 },
    ],
  };

  const [selectedYear, setSelectedYear] = useState('2024');
  const budgetData = budgetYearly[selectedYear];

  return (
    <div style={{ display: 'flex', padding: '20px' }}>
      {/* Sidebar with Radio Buttons */}
      <div className="sidebar">
        <h3>Select Year</h3>
        <div className="radio-group">
          {Object.keys(budgetYearly).reverse().map((year) => (
            <div key={year}>
              <label>
                <input
                  type="radio"
                  value={year}
                  checked={selectedYear === year}
                  onChange={() => setSelectedYear(year)} />
                {year}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Pie Chart */} 
      <div className="pie-chart"> 
        <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={budgetData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius="80%"
            animationDuration={300} // Adjusted animation duration
            label={(entry) => `${entry.name}: $${entry.value}B`}
          >
            {budgetData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      </div>
    </div>
  );
}
