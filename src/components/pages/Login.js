import React, {useContext, useEffect} from "react";
import "./Login.css"
import Video from '../assets/video/login.mp4';
import Footer from '../Footer'
// import {AuthContext} from '../../GlobalStates'

// const [authState,setauthState] = useContext(AuthContext);

// const loadData = () => {
//   isAuthenticated()
//   .then(data => {
//     if(data.error) {
//       console.log("Error, data.error");      
//     }
//     else {
//       setauthState(
//         {...authState,
//           _id:data.user._id,
//           prefix:data.user.prefix,
//           firstName:data.user.firstName,
//           lastName: data.user.lastName,
//           email: data.user.email,
//           role:data.user.role,
//           phone:data.user.phone,
//           userid:data.user.customerid
//         }
//       )
//     }
//   })
// }

// useEffecr(() => {
//   loadData()
// }, []);

// checktoken=(req,res) => {
//   console.log("Data 1", req.cookies.token)
//   const req_token = req.cookies.token;
//   let auth=false;
//   if(!req_token) {
//     return res.status(200).json({message:'Please login'});
//   }
//   try{
//     if(!jwt.verify(req_token,process.env.JWT_SECRET)) throw 'token not valid';
//     else{
//       auth=true
//     }
//   }
//   catch(err){console.log('Invalid token')}

//   if(!auth){
//     return res.status(400).json({'message':'token verification failed'});    
//   }
//   else{
//     const data = jwt.verify(req_token, process.env.JWT_SECRET)
//       userEvent.findById(data._id).exec((err, user) => {
//         if (err || !user) {
//           return res.status(400).json({
//             error: 'User not found'
//           });
//         }
//         const {_id, prefix, firstName, lastName, email, role, phone, userId} = user
//         return res.status(200).json({user: {_id,prefix,firstName,lastName,email,role,phone,userId}});
//       });
//   };
// };

function Login() {
  return (
    <>
    <div className="login-container">
      <video src={Video} autoPlay loop muted />
      <div className="form-login">
        <div className="form-body">
          <div className="email">
            <label className="form__label">Email</label>
            <input
              className="form__input"
              type="text"
              placeholder="Email"
            ></input>
          </div>
          <div className="password">
            <label className="form__label">Contraseña</label>
            <input
              className="form__input"
              type="password"
              placeholder="Contraseña"
            ></input>
          </div>
        </div>
        <div className="footer">
          <button type="submit" className="btnSignUp">Ingresar</button>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Login;
