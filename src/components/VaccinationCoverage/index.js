import {
  ResponsiveContainer,
  Legend,
  Bar,
  BarChart,
  XAxis,
  YAxis,
} from 'recharts'

const VaccinationCoverage = props => {
  const {list} = props

  const dataFormater = num => {
    if (num > 1000) {
      return `${num}k`
    }
    return num.toString()
  }

  return (
    <ResponsiveContainer width="100%" height={500}>
      <BarChart data={list} margin={{top: 5}}>
        <XAxis
          dataKey="vaccineDate"
          tick={{stroke: 'gray', strokeWidth: 1, strokeBorder: 5}}
        />
        <YAxis
          tickFormatter={dataFormater}
          tick={{stroke: 'gray', strokeWidth: 0}}
        />
        <Legend
          wrapperStyle={{
            padding: 30,
          }}
        />
        <Bar dataKey="dose1" name="Dose 1" fill="#5a8dee" />
        <Bar dataKey="dose2" name="Dose 2" fill="#2cc6c6" />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default VaccinationCoverage
