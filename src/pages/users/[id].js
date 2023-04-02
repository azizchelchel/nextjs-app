import Link from "next/link";


export default function Dynamic(props) {
    return (
        <>
        <div>
            <h1 key={props.users.id}>
                <div ><Link href={"/"}>ID : {props.users.id}</Link></div>
                <div  ><Link href={"/"}>Name :{props.users.name}</Link></div>
                
            </h1>

        </div>
        </>
    )
}


// export async function getStaticPaths() {
//   const users =await fetch("https://jsonplaceholder.typicode.com/users?_limit=5");
//   const jsonUsers =  await users.json();
//   const  paths = jsonUsers.map(
//     e  => (
//       {
//         params:{id: `${e.id}`}
//       }
//     )
//   )
//   return {
//     paths: paths,
//     fallback: false
//   }
// }


// export const getStaticProps = async (context) => {
//     const users = await fetch(`https://jsonplaceholder.typicode.com/users/${context.params.id}`);
//     const data = await users.json();
//     return {
//       props:{
//         users: data
//       }
//     }
//   }
    
  export const getServerSideProps = async (context) => {
    const users = await fetch(`https://jsonplaceholder.typicode.com/users/${context.params.id}`);
    const data = await users.json();
    return {
      props:{
        users: data
      }
    }
  }