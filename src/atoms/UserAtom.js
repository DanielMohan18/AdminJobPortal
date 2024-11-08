import React from 'react'
import { atom } from 'recoil'

const UserAtom =atom ({
  key:'UserAtom',
  default: JSON.parse(localStorage.getItem('Jobdetails')) || []
})

export default UserAtom
