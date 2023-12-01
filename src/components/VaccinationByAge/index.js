import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'

const VaccinationByAge = props => {
  const {list} = props

  return (
    <PieChart width={1000} height={300}>
      <Pie
        cx="50%"
        cy="50%"
        outerRadius="70%"
        data={list}
        dataKey="count"
        startAngle={0}
        endAngle={360}
      >
        <Cell name="18-44" fill="#2d87bb" />
        <Cell name="45-60" fill=" #a3df9f" />
        <Cell name="Above 60" fill="#64c2a6" />
      </Pie>
      <Legend iconType="circle" align="center" margin={{top: 10}} />
    </PieChart>
  )
}

export default VaccinationByAge
