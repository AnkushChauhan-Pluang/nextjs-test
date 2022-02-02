import Head from 'next/head';
import { useState } from 'react';

export default function Home({ data }) {
  const [users, setUsers] = useState(data);
  const [sortOrder, setSortOrder] = useState('asc');

  const headers = [
    { key: 'id', title: 'Id' },
    { key: 'name', title: 'Name' },
    { key: 'username', title: 'Username' },
    { key: 'email', title: 'Email' },
    { key: 'phone', title: 'Phone' },
  ]

  const sortUsersByKey = (key) => {
    let sortedUsers = [...users]
    sortedUsers.sort((a, b) => {
      if (a[key] > b[key]) return sortOrder === 'asc' ? 1 : -1
      if (a[key] < b[key]) return sortOrder === 'asc' ? -1 : 1
      return 0
    })
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    setUsers(sortedUsers)
  }

  return (
    <div className="px-8">
      <Head>
        <title>Test Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-3xl py-4">Sortable Users table</div>
      <div className='border rounded-xl overflow-hidden'>
        <table className='min-w-full divide-y'>
          <thead className='bg-gray-100'>
            <tr>
              {headers.map(({ key, title }) => (
                <th key={key} className='px-3 py-2 text-left text-gray-500 font-semibold uppercase'><button onClick={() => sortUsersByKey(key)}>{title}</button></th>
              ))}
            </tr>
          </thead>
          <tbody className='divide-y'>
            {users && users.map(user => (
              <tr key={user.id}>
                <td className='px-3 py-2'>{user.id}</td>
                <td className='px-3 py-2'>{user.name}</td>
                <td className='px-3 py-2'>{user.username}</td>
                <td className='px-3 py-2'>{user.email}</td>
                <td className='px-3 py-2'>{user.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = (await res.json());
  return { props: { data } }
}
