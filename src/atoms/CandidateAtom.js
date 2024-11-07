import {atom} from 'recoil'

const CandidateAtom =atom ({
    key:'CandidateAtom',
    default: JSON.parse(localStorage.getItem('Candidatedetails')) || []
  })
  
  export default CandidateAtom