// import { useSession } from "next-auth/react";

// const ProtectedPg() {
//   const { data: session } = useSession();
//   return (
//     <div>
//       <h1>Protected Page</h1>
//     </div>
//   );
// }

// export async function getServerSideProps(context) {
//   const session = await getSession(context);
//   if (!session) {
//     context.res.writeHead(302, { Location: "/" });
//     context.res.end();
//     return {};
//   }
//   return {
//     props: {
//       user: session.user,
//     },
//   };
// }

// export default ProtectedPg;
