import React from 'react'

const Profile =()=> {
    const auth = localStorage.getItem('user');
  return (
    <div className="profile">
        <h1>Welcome,{JSON.parse(auth).name}</h1>
        <h1>{JSON.parse(auth).email}</h1>
    </div>
  )
}

export default Profile