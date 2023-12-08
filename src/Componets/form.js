// import React, { useState } from 'react';

// const MyForm = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     mobileNumber:''
//   });

//   const handleChange = (e) => {
//     // Update the form data when input values change
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     // Perform actions with the form data (e.g., submit to a server, validate, etc.)
//     console.log('Form submitted:', formData);
    
//     // Reset the form after submission if needed
//     setFormData({
//       username: '',
//       email: '',
//       mobileNumber:''
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Username:
//         <input
//           type="text"
//           name="username"
//           value={formData.username}
//           onChange={handleChange}
//         />
//       </label>
//       <br />
//       <label>
//         Email:
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//         />
//       </label>
//       <br />
//       <label>
//         MobileNumber:
//         <input
//           type="text"
//           name="mobileNumber"
//           value={formData.mobileNumber}
//           onChange={handleChange}
//         />
//       </label>
//       <br />
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default MyForm;
