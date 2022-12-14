import React from 'react'
import {GithubContext} from '../../context'
import {UserItem} from './'
import {Spinner} from '../layout'

export const UserResults = () => {
  const {users, loading, fetchUsers} = React.useContext(GithubContext)

  if (!loading) {
    return (
      <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
        {users.map(user => {
          return (
            <UserItem key={user.id} user={user} />
          )
        })}
      </div>
    )
  } else {
    return <Spinner />
  }
}