import {atom} from 'recoil'

const AssignmentAtom =atom ({
    key:'AssignmentAtom',
    default: JSON.parse(localStorage.getItem('Assignmentdetails')) || []
  })
  
  export default CandidateAtom