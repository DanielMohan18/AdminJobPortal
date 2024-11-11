import {atom} from 'recoil'

const CandidateAtom =atom ({
    key:'CandidateAtom',
    default: JSON.parse(localStorage.getItem('Candidatedetails')) || [{
      "cid": 21456,
      "jobId": 48293,
      "candidateName": "Sai",
      "resumeLink": "https://resume.io/resume-templates/simple",
      "applicationDate": "2024-10-12",
      "status": "Selected",
      "profile": {
        "name": "Sai",
        "email": "Sai@example.com",
        "contact": "+1234567890",
        "skills": [
          "JavaScript",
          "React",
          "Node.js"
        ],
        "experience": "3 years"
      }
    },
    {
      "cid": 35902,
      "jobId": 48293,
      "candidateName": "Chaitu",
      "resumeLink": "https://resume.io/resume-templates/simple",
      "applicationDate": "2024-10-10",
      "status": "Selected",
      "profile": {
        "name": "Chaitu",
        "email": "Chaitu@example.com",
        "contact": "+1234567891",
        "skills": [
          "Java",
          "Spring Boot",
          "SQL"
        ],
        "experience": "5 years"
      }
    },
    {
      "cid": 67834,
      "jobId": 48293,
      "candidateName": "Nandu",
      "resumeLink": "https://resume.io/resume-templates/simple",
      "applicationDate": "2024-10-15",
      "status": "Shortlisted",
      "profile": {
        "name": "Nandu",
        "email": "Nandu@example.com",
        "contact": "+1234567894",
        "skills": [
          "Python",
          "Django",
          "Machine Learning"
        ],
        "experience": "4 years"
      }
    },
    {
      "cid": 48267,
      "jobId": 48293,
      "candidateName": "Madhan",
      "resumeLink": "https://resume.io/resume-templates/simple",
      "applicationDate": "2024-10-17",
      "status": "Shorlisted",
      "profile": {
        "name": "Madhan",
        "email": "Madhan@example.com",
        "contact": "+1234567895",
        "skills": [
          "JavaScript",
          "Vue.js",
          "Node.js"
        ],
        "experience": "3 years"
      }
    },
    {
      "cid": 19574,
      "jobId": 57201,
      "candidateName": "Ramu",
      "resumeLink": "https://resume.io/resume-templates/simple",
      "applicationDate": "2024-10-14",
      "status": "Selected",
      "profile": {
        "name": "Ramu",
        "email": "Ramu@example.com",
        "contact": "+1234567892",
        "skills": [
          "Python",
          "R",
          "Data Visualization"
        ],
        "experience": "2 years"
      }
    },
    {
      "cid": 30291,
      "jobId": 57201,
      "candidateName": "Prashanth",
      "resumeLink": "https://resume.io/resume-templates/simple",
      "applicationDate": "2024-10-13",
      "status": "Shortlisted",
      "profile": {
        "name": "Prashanth",
        "email": "Prashanth@example.com",
        "contact": "+1234567893",
        "skills": [
          "SQL",
          "Tableau",
          "Power BI"
        ],
        "experience": "3 years"
      }
    },
    {
      "cid": 58124,
      "jobId": 57201,
      "candidateName": "Rajesh",
      "resumeLink": "https://resume.io/resume-templates/simple",
      "applicationDate": "2024-10-16",
      "status": "Rejected",
      "profile": {
        "name": "Rajesh",
        "email": "Rajesh@example.com",
        "contact": "+1234567896",
        "skills": [
          "Data Mining",
          "SQL",
          "Machine Learning"
        ],
        "experience": "5 years"
      }
    },
    {
      "cid": 73581,
      "jobId": 57201,
      "candidateName": "Lenin",
      "resumeLink": "https://resume.io/resume-templates/simple",
      "applicationDate": "2024-10-18",
      "status": "in Progress",
      "profile": {
        "name": "Lenin",
        "email": "Lenin@example.com",
        "contact": "+1234567897",
        "skills": [
          "Statistics",
          "Data Analysis",
          "Python"
        ],
        "experience": "2 years"
      }
    },
    {
      "cid": 48903,
      "jobId": 57201,
      "candidateName": "Daniel",
      "resumeLink": "https://resume.io/resume-templates/simple",
      "applicationDate": "2024-10-20",
      "status": "Pending",
      "profile": {
        "name": "Daniel",
        "email": "Daniel@example.com",
        "contact": "+1234567898",
        "skills": [
          "Excel",
          "SQL",
          "Python"
        ],
        "experience": "1 year"
      }
    },
    {
      "cid": 64120,
      "jobId": 57201,
      "candidateName": "Navaneeth",
      "resumeLink":"https://resume.io/resume-templates/simple",
      "applicationDate": "2024-10-21",
      "status": "Shortlisted",
      "profile": {
        "name": "Navaneeth",
        "email": "Navaneeth@example.com",
        "contact": "+1234567899",
        "skills": [
          "R",
          "Statistics",
          "Data Wrangling"
        ],
        "experience": "4 years"
      }
    },
    {
      "cid": 21894,
      "jobId": 57201,
      "candidateName": "Karthik",
      "resumeLink": "https://resume.io/resume-templates/simple",
      "applicationDate": "2024-10-22",
      "status": "Pending",
      "profile": {
        "name": "Karthik",
        "email": "Karthik@example.com",
        "contact": "+1234567810",
        "skills": [
          "Data Visualization",
          "Python",
          "SQL"
        ],
        "experience": "2 years"
      }
    },
    {
      "cid": 54932,
      "jobId": 57201,
      "candidateName": "Sandeep",
      "resumeLink": "https://resume.io/resume-templates/simple",
      "applicationDate": "2024-10-23",
      "status": "Rejected",
      "profile": {
        "name": "Sandeep",
        "email": "Sandeep@example.com",
        "contact": "+1234567811",
        "skills": [
          "SQL",
          "Data Analysis",
          "Excel"
        ],
        "experience": "3 years"
      }
    },
    {
      "cid": 92345,
      "jobId": 61837,
      "candidateName": "Bharath",
      "resumeLink": "https://resume.io/resume-templates/simple",
      "applicationDate": "2024-10-24",
      "status": "Pending",
      "profile": {
        "name": "Bharath",
        "email": "Bharath@example.com",
        "contact": "+1234567812",
        "skills": [
          "HTML",
          "CSS",
          "JavaScript",
          "React"
        ],
        "experience": "2 years"
      }
    },
    {
      "cid": 18752,
      "jobId": 61837,
      "candidateName": "Nitish",
      "resumeLink": "https://resume.io/resume-templates/simple",
      "applicationDate": "2024-10-24",
      "status": "Pending",
      "profile": {
        "name": "Nitish",
        "email": "Nitish@example.com",
        "contact": "+1234567812",
        "skills": [
          "HTML",
          "CSS",
          "JavaScript",
          "React"
        ],
        "experience": "2 years"
      }
    }
  ]
  })
  
  export default CandidateAtom