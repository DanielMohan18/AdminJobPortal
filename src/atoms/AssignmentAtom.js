import {atom} from 'recoil'

const AssignmentAtom =atom ({
    key:'AssignmentAtom',
    default: JSON.parse(localStorage.getItem('Assignmentdetails')) || [{
      "id": 12345,
      "jobTitle": "Software Engineer",
      "question": "What is the primary responsibility of a Software Engineer",
      "opt1": {
        "text": "Develop and maintain software applications.",
        "bool": false
      },
      "opt2": {
        "text": "Analyze data for business insights.",
        "bool": true
      },
      "opt3": {
        "text": "Design user interfaces for websites.",
        "bool": true
      },
      "opt4": {
        "text": "Conduct financial audits.",
        "bool": false
      }
    },
    {
      "id": 67890,
      "jobTitle": "Data Scientist",
      "question": "Which skill is most relevant for a Data Scientist?",
      "opt1": {
        "text": "Data analysis and statistics",
        "bool": true
      },
      "opt2": {
        "text": "Interior design",
        "bool": false
      },
      "opt3": {
        "text": "Mechanical engineering",
        "bool": false
      },
      "opt4": {
        "text": "Teaching",
        "bool": false
      }
    },
    {
      "id": 54321,
      "jobTitle": "FrontEnd Developer",
      "question": "What does a FrontEnd Developer primarily work on?",
      "opt1": {
        "text": "User interfaces and website layouts",
        "bool": true
      },
      "opt2": {
        "text": "Machine learning algorithms",
        "bool": false
      },
      "opt3": {
        "text": "Backend server development",
        "bool": false
      },
      "opt4": {
        "text": "Financial modeling",
        "bool": false
      }
    },
    {
      "id": 23083,
      "jobTitle": "Software Engineer",
      "question": "what are true about useEffect",
      "opt1": {
        "text": "used to handle side effects",
        "bool": true
      },
      "opt2": {
        "text": "defines the state",
        "bool": false
      },
      "opt3": {
        "text": "have dependency array",
        "bool": true
      },
      "opt4": {
        "text": "dependency array is a parameter of useEffect",
        "bool": true
      }
    },
    {
      "id": 59286,
      "jobTitle": "Software Engineer",
      "question": "how are you",
      "opt1": {
        "text": "fine",
        "bool": true
      },
      "opt2": {
        "text": "not good",
        "bool": false
      },
      "opt3": {
        "text": "good enuff",
        "bool": false
      },
      "opt4": {
        "text": "better",
        "bool": false
      }
    },
    {
      "id": 23692,
      "jobTitle": "Data Scientist",
      "question": "Why do we use Data",
      "opt1": {
        "text": "For Nothing",
        "bool": false
      },
      "opt2": {
        "text": "For Storage",
        "bool": true
      },
      "opt3": {
        "text": "To Store Data Somewher and use Later",
        "bool": true
      },
      "opt4": {
        "text": "None of the above",
        "bool": false
      }
    },
    {
      "id": 83815,
      "jobTitle": "Data Scientist",
      "question": "nflnf",
      "opt1": {
        "text": "nvknkv",
        "bool": false
      },
      "opt2": {
        "text": "vk",
        "bool": false
      },
      "opt3": {
        "text": "vwnk",
        "bool": true
      },
      "opt4": {
        "text": "v ",
        "bool": false
      }
    },
    {
      "id": 13124,
      "jobTitle": "Software Engineer",
      "question": "hiii",
      "opt1": {
        "text": "1",
        "bool": false
      },
      "opt2": {
        "text": "3",
        "bool": false
      },
      "opt3": {
        "text": "5",
        "bool": false
      },
      "opt4": {
        "text": "4",
        "bool": true
      }
    }]
  })
  
  export default AssignmentAtom