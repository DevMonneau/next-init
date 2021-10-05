import Head from 'next/head';

export default function Home({ result }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

      <h1>lets build fb</h1>
      {JSON.stringify(result)}
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(`http://localhost:3000/api/users`);
  const result = await res.json();

  if (!result) {
    return {
      notFound: true,
    };
  }

  return {
    props: { result }, // will be passed to the page component as props
  };
}
