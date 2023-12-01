import {Component} from 'react'
import Loader from 'react-loader-spinner'
import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByAge from '../VaccinationByAge'
import VaccinationByGender from '../VaccinationByGender'
import './index.css'

class CowinDashboard extends Component {
  state = {isLoading: 'INITIAL', list: []}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    this.setState({isLoading: 'IN-PROGRESS'})
    const response = await fetch('https://apis.ccbp.in/covid-vaccination-data')
    const data = await response.json()
    const update = {
      last7DaysVaccination: data.last_7_days_vaccination.map(each =>
        this.daysCase(each),
      ),
      vaccinationByAge: data.vaccination_by_age,
      vaccinationByGender: data.vaccination_by_gender,
    }
    console.log(update)
    if (response.ok) {
      this.setState({list: update, isLoading: 'SUCCESS'})
    } else {
      this.setState({isLoading: 'FAILURE'})
    }
  }

  daysCase = each => ({
    vaccineDate: each.vaccine_date,
    dose1: each.dose_1,
    dose2: each.dose_2,
  })

  renderLoader = () => (
    <div data-testid="loader" className="loader-card">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </div>
  )

  renderResult = () => {
    const {list} = this.state
    const {last7DaysVaccination, vaccinationByAge, vaccinationByGender} = list

    return (
      <>
        <div className="coverage-card">
          <h1 className="head">Vaccination Coverage</h1>
          <VaccinationCoverage list={last7DaysVaccination} />
        </div>

        <div className="coverage-card">
          <h1 className="head">Vaccination by gender</h1>
          <VaccinationByGender list={vaccinationByGender} />
        </div>

        <div className="coverage-card">
          <h1 className="head">Vaccination by Age</h1>
          <VaccinationByAge list={vaccinationByAge} />
        </div>
      </>
    )
  }

  renderFailure = () => (
    <div className="loader-card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
        className="failure"
      />
      <h1>Something went wrong</h1>
    </div>
  )

  renderContent = () => {
    const {isLoading} = this.state
    switch (isLoading) {
      case 'IN-PROGRESS':
        return this.renderLoader()
      case 'SUCCESS':
        return this.renderResult()
      case 'FAILURE':
        return this.renderFailure()
      default:
        return this.renderFailure()
    }
  }

  render() {
    return (
      <div className="main-container">
        <div>
          <div className="logo-card">
            <img
              src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
              alt="website logo"
              className="logo"
            />
            <p className="logo-name">Co-WIN</p>
          </div>
          <h1 className="vaccination-india">CoWIN Vaccination in india</h1>

          <div className="result-card">{this.renderContent()}</div>
        </div>
      </div>
    )
  }
}

export default CowinDashboard
