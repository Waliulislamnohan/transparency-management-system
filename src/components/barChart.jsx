import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function BarCh() {
    const data = [
        { year: '2017', Budget: 51.54 },
        { year: '2018', Budget: 59.52 },
        { year: '2019', Budget: 66.18 },
        { year: '2020', Budget: 68.77 },
        { year: '2021', Budget: 72.06 },
        { year: '2022', Budget: 81.28 },
        { year: '2023', Budget: 90.46 }, 
        { year: '2024', Budget: 95.00 }
      ];

  return (
    <>
      <h2 className='chartTitle'>Bangladesh Annual Budget Overview (in Billions USD)</h2>
      <p className='chartDes'>The progression of Bangladesh's annual budget from 2017 to 2024</p>
       <ResponsiveContainer width="100%" height={390}>
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}>
          <CartesianGrid/>
          <XAxis dataKey="year" />
          <YAxis tickFormatter={(value) => `${value}B`}/>
          <Tooltip formatter={(value) => `${value}B`} /> 
          <Legend formatter={() => 'Budget (in Billion USD)'} />
          <Bar dataKey="Budget" fill="#8884d8" activeShape={<Rectangle/>} />
        </BarChart>
      </ResponsiveContainer>   
    </>
  );
}
