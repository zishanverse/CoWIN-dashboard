import {ResponsiveContainer, PieChart, Pie, Cell, Legend} from 'recharts'

const VaccinationByGender = props => {
  const {list} = props

  return (
    <PieChart width={1000} height={300}>
      <Pie
        data={list}
        dataKey="count"
        innerRadius="40%"
        startAngle={180}
        endAngle={0}
      >
        <Cell name="Male" fill="#f54394" />
        <Cell name="Female" fill="#5a8dee" />
        <Cell name="Others" fill="#2cc6c6" />
      </Pie>
      <Legend />
    </PieChart>
  )
}

export default VaccinationByGender
