import React, { useContext } from 'react'
import styled from 'styled-components'
import resumeContext from '../context/resumeContext'
import * as Styles from '../styles/dashboardStyle'

const Overview = () => {
  const inputContext = useContext(resumeContext)
  const { userInput } = inputContext
  console.log(userInput)
  const {
    name,
    email,
    address,
    state,
    country,
    phone,
    jobTitle,
    objective,
  } = userInput
  return (
    <Styles.OverviewWrapper>
      Overview
      <Styles.Overview>
        <Styles.Biodata>
          <h1 className="fullname">{name}</h1>
          <span>{jobTitle}</span>
          <div className="mini-biodata">
            <p className="email">{email}</p>
            <p className="phone">{phone}</p>
            <p className="address">{address}</p>
            <p className="address">{`${state} ${country}`}</p>
          </div>
        </Styles.Biodata>
        {objective && (
          <Styles.Objective>
            <h4>Personal Objective</h4>
            <p>{objective}</p>
          </Styles.Objective>
        )}
      </Styles.Overview>
    </Styles.OverviewWrapper>
  )
}

export default Overview
