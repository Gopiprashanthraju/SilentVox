// // Your context provider in 'main'
// // Ensure it sets the token before 'MyProfile' mounts

// // MyProfile.js
// import React, { useContext, useState, useEffect } from "react";
// import { store } from "../main";
// import { Navigate } from "react-router";
// import axios from "axios";
// import avatar from "../assets/logo.jpeg";

// const MyProfile = () => {
//   const [token, setToken] = useContext(store);
//   const [data, setData] = useState(null);
//   useEffect(() => {
//     if (token) {
//       axios
//         .get("http://localhost:5000/Profile", {
//           headers: {
//             "x-token": token,
//           },
//         })
//         .then((res) => setData(res.data))
//         .catch((err) => console.log(err));
//     }
//   }, [token]);

//   if (!token) {
//     return <Navigate to="/" />;
//   }

//   return (
//     <div>
//       <center>
//         <br />
//         <div className="card" style={{ width: "18rem" }}>
//           <img className="card-img-top" src={avatar} alt="Card image cap" />
//           <div className="card-body">
//             <h5 className="card-title">Welcome: {data && data.username}</h5>
//             <button className="btn btn-primary" onClick={() => setToken(null)}>
//               Logout
//             </button>
//           </div>
//         </div>
//       </center>
//     </div>
//   );
// };

// export default MyProfile;
