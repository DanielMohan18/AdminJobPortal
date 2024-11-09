import React from 'react'
import { atom } from 'recoil'

const UserAtom =atom ({
  key:'UserAtom',
  default: JSON.parse(localStorage.getItem('Jobdetails')) || [{
    "id": 48293,
    "jobTitle": "Software Engineer",
    "jobDescription": "Responsible for developing and maintaining software applications.",
    "numCandidatesApplied": 4,
    "positionsOpen": 3,
    "employmentType": "Full-Time",
    "salaryLPA": 8
  },
  {
    "id": 57201,
    "jobTitle": "Data Scientist",
    "jobDescription": "Analyze data to provide insights and support business decisions.",
    "numCandidatesApplied": 8,
    "positionsOpen": 2,
    "employmentType": "Part-Time",
    "salaryLPA": "10"
  },
  {
    "id": 13156,
    "jobTitle": "FrontEnd Developer",
    "jobDescription": "bla bla bla bla bla bla bla bla blabbb abla blabl",
    "numCandidatesApplied": 0,
    "positionsOpen": 12,
    "employmentType": "Full Time",
    "salaryLPA": 14
  },]
})

export default UserAtom
