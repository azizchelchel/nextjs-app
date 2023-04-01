
import Head from "next/head";
import Link from "next/link";

 const Users=  (props) => {
  
    return (
      <div>
          <Head>
            <title>users page</title>
          </Head>
         
          {props.posts.map(
            (e) => 
              <div key={e.id}>
                <Link key={e.id} href={`/users/${e.id}`}>{e.title}</Link>
              </div>
            
          )}

          <a href="../about">go to about page</a>
        
      </div>
    )
}

export const getStaticProps = async () => {
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
  const data = await posts.json();
  return {
    props:{
      posts:data
    }
  }
}
  
  export default Users;