import React from 'react'
import { atom } from 'recoil'

const UserAtom =atom ({
  key:'UserAtom',
  default: JSON.parse(localStorage.getItem('Jobdetails')) || []
})

export default UserAtom

// {
//   "jobs":[
//     { 
//     "details": [
//       {
//         "did": 1,
//         "jobTitle": "Software Engineer",
//         "jobDescription": "Responsible for developing and maintaining software applications.",
//         "numCandidatesApplied": 4,
//         "positionsOpen": 3,
//         "employmentType": "Full-Time",
//         "salaryLPA": 8
//       },
//       {
//         "did": 2,
//         "jobTitle": "Data Analyst",
//         "jobDescription": "Analyze data to provide insights and support business decisions.",
//         "numCandidatesApplied": 8,
//         "positionsOpen": 2,
//         "employmentType": "Part-Time",
//         "salaryLPA": 5
//       },
//       {
//         "did": 3,
//         "jobTitle": "Frontend Developer",
//         "jobDescription": "Develop and enhance user interfaces for web applications.",
//         "numCandidatesApplied": 5,
//         "positionsOpen": 2,
//         "employmentType": "Contract",
//         "salaryLPA": 6
//       },
//       {
//         "did": 4,
//         "jobTitle": "Frontend Devloper",
//         "jobDescription": "ha ha ha ha ha ha hah hah haha haha",
//         "numCandidatesApplied": 0,
//         "positionsOpen": 6,
//         "employmentType": "Full Time",
//         "salaryLPA": 12
//       }
//     ]
//   },{
//     "candidates": [
//       {
//         "cid": 1,
//         "jobId": 1,
//         "candidateName": "Alice Johnson",
//         "resumeLink": "https://placeholder.com/invalid-url.pdf",
//         "applicationDate": "2024-10-12",
//         "status": "Under Review",
//         "profile": {
//           "name": "Alice Johnson",
//           "email": "alice.johnson@example.com",
//           "contact": "+1234567890",
//           "skills": ["JavaScript", "React", "Node.js"],
//           "experience": "3 years"
//         }
//       },
//       {
//         "cid": 2,
//         "jobId": 1,
//         "candidateName": "Bob Smith",
//         "resumeLink": "https://placeholder.com/invalid-url.pdf",
//         "applicationDate": "2024-10-10",
//         "status": "Interview Scheduled",
//         "profile": {
//           "name": "Bob Smith",
//           "email": "bob.smith@example.com",
//           "contact": "+1234567891",
//           "skills": ["Java", "Spring Boot", "SQL"],
//           "experience": "5 years"
//         }
//       },
//       {
//         "cid": 3,
//         "jobId": 1,
//         "candidateName": "Charlotte Green",
//         "resumeLink": "https://placeholder.com/invalid-url.pdf",
//         "applicationDate": "2024-10-15",
//         "status": "Shortlisted",
//         "profile": {
//           "name": "Charlotte Green",
//           "email": "charlotte.green@example.com",
//           "contact": "+1234567894",
//           "skills": ["Python", "Django", "Machine Learning"],
//           "experience": "4 years"
//         }
//       },
//       {
//         "cid": 4,
//         "jobId": 1,
//         "candidateName": "David Williams",
//         "resumeLink": "https://placeholder.com/invalid-url.pdf",
//         "applicationDate": "2024-10-17",
//         "status": "Under Review",
//         "profile": {
//           "name": "David Williams",
//           "email": "david.williams@example.com",
//           "contact": "+1234567895",
//           "skills": ["JavaScript", "Vue.js", "Node.js"],
//           "experience": "3 years"
//         }
//       },
//       {
//         "cid": 5,
//         "jobId": 2,
//         "candidateName": "Emma Lee",
//         "resumeLink": "https://placeholder.com/invalid-url.pdf",
//         "applicationDate": "2024-10-14",
//         "status": "Under Review",
//         "profile": {
//           "name": "Emma Lee",
//           "email": "emma.lee@example.com",
//           "contact": "+1234567892",
//           "skills": ["Python", "R", "Data Visualization"],
//           "experience": "2 years"
//         }
//       },
//       {
//         "cid": 6,
//         "jobId": 2,
//         "candidateName": "Liam Brown",
//         "resumeLink": "https://placeholder.com/invalid-url.pdf",
//         "applicationDate": "2024-10-13",
//         "status": "Shortlisted",
//         "profile": {
//           "name": "Liam Brown",
//           "email": "liam.brown@example.com",
//           "contact": "+1234567893",
//           "skills": ["SQL", "Tableau", "Power BI"],
//           "experience": "3 years"
//         }
//       },
//       {
//         "cid": 7,
//         "jobId": 2,
//         "candidateName": "Olivia Garcia",
//         "resumeLink": "https://placeholder.com/invalid-url.pdf",
//         "applicationDate": "2024-10-16",
//         "status": "Rejected",
//         "profile": {
//           "name": "Olivia Garcia",
//           "email": "olivia.garcia@example.com",
//           "contact": "+1234567896",
//           "skills": ["Data Mining", "SQL", "Machine Learning"],
//           "experience": "5 years"
//         }
//       },
//       {
//         "cid": 8,
//         "jobId": 2,
//         "candidateName": "Noah Martinez",
//         "resumeLink": "https://placeholder.com/invalid-url.pdf",
//         "applicationDate": "2024-10-18",
//         "status": "Interview Scheduled",
//         "profile": {
//           "name": "Noah Martinez",
//           "email": "noah.martinez@example.com",
//           "contact": "+1234567897",
//           "skills": ["Statistics", "Data Analysis", "Python"],
//           "experience": "2 years"
//         }
//       },
//       {
//         "cid": 9,
//         "jobId": 2,
//         "candidateName": "Sophia Hernandez",
//         "resumeLink": "https://placeholder.com/invalid-url.pdf",
//         "applicationDate": "2024-10-20",
//         "status": "Interview Scheduled",
//         "profile": {
//           "name": "Sophia Hernandez",
//           "email": "sophia.hernandez@example.com",
//           "contact": "+1234567898",
//           "skills": ["Excel", "SQL", "Python"],
//           "experience": "1 year"
//         }
//       },
//       {
//         "cid": 10,
//         "jobId": 2,
//         "candidateName": "James Wilson",
//         "resumeLink": "https://placeholder.com/invalid-url.pdf",
//         "applicationDate": "2024-10-21",
//         "status": "Hired",
//         "profile": {
//           "name": "James Wilson",
//           "email": "james.wilson@example.com",
//           "contact": "+1234567899",
//           "skills": ["R", "Statistics", "Data Wrangling"],
//           "experience": "4 years"
//         }
//       },
//       {
//         "cid": 11,
//         "jobId": 2,
//         "candidateName": "Mia Lopez",
//         "resumeLink": "https://placeholder.com/invalid-url.pdf",
//         "applicationDate": "2024-10-22",
//         "status": "Pending",
//         "profile": {
//           "name": "Mia Lopez",
//           "email": "mia.lopez@example.com",
//           "contact": "+1234567810",
//           "skills": ["Data Visualization", "Python", "SQL"],
//           "experience": "2 years"
//         }
//       },
//       {
//         "cid": 12,
//         "jobId": 2,
//         "candidateName": "Benjamin Clark",
//         "resumeLink": "https://placeholder.com/invalid-url.pdf",
//         "applicationDate": "2024-10-23",
//         "status": "Rejected",
//         "profile": {
//           "name": "Benjamin Clark",
//           "email": "benjamin.clark@example.com",
//           "contact": "+1234567811",
//           "skills": ["SQL", "Data Analysis", "Excel"],
//           "experience": "3 years"
//         }
//       },
//       {
//         "cid": 13,
//         "jobId": 3,
//         "candidateName": "Jake Miller",
//         "resumeLink": "https://placeholder.com/invalid-url.pdf",
//         "applicationDate": "2024-10-24",
//         "status": "Pending",
//         "profile": {
//           "name": "Jake Miller",
//           "email": "jake.miller@example.com",
//           "contact": "+1234567812",
//           "skills": ["HTML", "CSS", "JavaScript", "React"],
//           "experience": "2 years"
//         }
//       }
//     ]
//   },{
//     "assignments": []
//   }
//   ]
//   }
  


