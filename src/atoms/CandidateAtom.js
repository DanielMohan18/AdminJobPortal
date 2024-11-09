import {atom} from 'recoil'

const CandidateAtom =atom ({
    key:'CandidateAtom',
    default: JSON.parse(localStorage.getItem('Candidatedetails')) || [{
      "cid": 21456,
      "jobId": 48293,
      "candidateName": "Alice Johnson",
      "resumeLink": "https://resume.io/resume-templates/simple",
      "applicationDate": "2024-10-12",
      "status": "on Hold",
      "profile": {
        "name": "Alice Johnson",
        "email": "alice.johnson@example.com",
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
      "candidateName": "Bob Smith",
      "resumeLink": "https://placeholder.com/invalid-url.pdf",
      "applicationDate": "2024-10-10",
      "status": "Shortlisted",
      "profile": {
        "name": "Bob Smith",
        "email": "bob.smith@example.com",
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
      "candidateName": "Charlotte Green",
      "resumeLink": "https://placeholder.com/invalid-url.pdf",
      "applicationDate": "2024-10-15",
      "status": "Shortlisted",
      "profile": {
        "name": "Charlotte Green",
        "email": "charlotte.green@example.com",
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
      "candidateName": "David Williams",
      "resumeLink": "https://placeholder.com/invalid-url.pdf",
      "applicationDate": "2024-10-17",
      "status": "On Hold",
      "profile": {
        "name": "David Williams",
        "email": "david.williams@example.com",
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
      "candidateName": "Emma Lee",
      "resumeLink": "https://placeholder.com/invalid-url.pdf",
      "applicationDate": "2024-10-14",
      "status": "On Hold",
      "profile": {
        "name": "Emma Lee",
        "email": "emma.lee@example.com",
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
      "candidateName": "Liam Brown",
      "resumeLink": "https://placeholder.com/invalid-url.pdf",
      "applicationDate": "2024-10-13",
      "status": "Shortlisted",
      "profile": {
        "name": "Liam Brown",
        "email": "liam.brown@example.com",
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
      "candidateName": "Olivia Garcia",
      "resumeLink": "https://placeholder.com/invalid-url.pdf",
      "applicationDate": "2024-10-16",
      "status": "Rejected",
      "profile": {
        "name": "Olivia Garcia",
        "email": "olivia.garcia@example.com",
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
      "candidateName": "Noah Martinez",
      "resumeLink": "https://placeholder.com/invalid-url.pdf",
      "applicationDate": "2024-10-18",
      "status": "in Progress",
      "profile": {
        "name": "Noah Martinez",
        "email": "noah.martinez@example.com",
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
      "candidateName": "Sophia Hernandez",
      "resumeLink": "https://placeholder.com/invalid-url.pdf",
      "applicationDate": "2024-10-20",
      "status": "Pending",
      "profile": {
        "name": "Sophia Hernandez",
        "email": "sophia.hernandez@example.com",
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
      "candidateName": "James Wilson",
      "resumeLink": "https://placeholder.com/invalid-url.pdf",
      "applicationDate": "2024-10-21",
      "status": "Shortlisted",
      "profile": {
        "name": "James Wilson",
        "email": "james.wilson@example.com",
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
      "candidateName": "Mia Lopez",
      "resumeLink": "https://placeholder.com/invalid-url.pdf",
      "applicationDate": "2024-10-22",
      "status": "Pending",
      "profile": {
        "name": "Mia Lopez",
        "email": "mia.lopez@example.com",
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
      "candidateName": "Benjamin Clark",
      "resumeLink": "https://placeholder.com/invalid-url.pdf",
      "applicationDate": "2024-10-23",
      "status": "Rejected",
      "profile": {
        "name": "Benjamin Clark",
        "email": "benjamin.clark@example.com",
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
      "candidateName": "Jake Miller",
      "resumeLink": "https://placeholder.com/invalid-url.pdf",
      "applicationDate": "2024-10-24",
      "status": "Pending",
      "profile": {
        "name": "Jake Miller",
        "email": "jake.miller@example.com",
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
      "candidateName": "ke Mil",
      "resumeLink": "https://placeholder.com/invalid-url.pdf",
      "applicationDate": "2024-10-24",
      "status": "Pending",
      "profile": {
        "name": "ke Mil",
        "email": "ke.mil@example.com",
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