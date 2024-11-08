import {atom} from 'recoil'

const JobAtom =atom ({
    key:'JobAtom',
    default:JSON.parse(localStorage.getItem('Jobdetails'))[0].jobTitle || ''
  })
  
  export default JobAtom