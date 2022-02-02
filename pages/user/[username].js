import Head from "next/head";

const UserDetails = ({ user }) => {
  return (
    <div className='p-4'>
      <Head>
        <title>{user.name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className='text-3xl'>User details</h1>
      <div className="mt-8">
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </div>
    </div>
  )
};

export default UserDetails;

export const getServerSideProps = async ({ query }) => {
  console.log(query);
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${query.id}`)
  const user = (await res.json());
  return { props: { user } }
}