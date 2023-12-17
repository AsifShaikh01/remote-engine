import React, { useState } from 'react'
import axios from 'axios'; 

const DevBoarding = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        skills: "",
        professionalExperience: [],
        educationalExperience: []
    });

  

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            setFormData({
                ...formData
              
            });
            await axios.post('https://wild-rose-chick-gown.cyclic.app/dev/developersboarding', formData);

            // Handle success (for example, show a success message)
            console.log('Developer details uploaded successfully!');
        } catch (error) {
            // Handle error (for example, show an error message)
            console.error('Error uploading developer details:', error.message);
        }
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

   

  return (
    <div>
        Backend is completed for this page but due to time constrain frontend is not completed
    </div>
    // <form onSubmit={handleSubmit}>
    //   <input
    //             type="text"
    //             name="firstName"
    //             placeholder="First Name"
    //             value={formData.firstName}
    //             onChange={handleChange}
    //         />
    //         <input
    //             type="text"
    //             name="lastName"
    //             placeholder="Last Name"
    //             value={formData.lastName}
    //             onChange={handleChange}
    //         />
    //         <input
    //             type="text"
    //             name="phoneNumber"
    //             placeholder="Phone Number"
    //             value={formData.phoneNumber}
    //             onChange={handleChange}
    //         />
    //         <input
    //             type="email"
    //             name="email"
    //             placeholder="Email"
    //             value={formData.email}
    //             onChange={handleChange}
    //         />
    //         <select
    //             name="skills"
    //             value={formData.skills}
    //             onChange={handleChange}
    //         >
    //             <option value="FRONTEND">FRONTEND</option>
    //             <option value="BACKEND">BACKEND</option>
    //             <option value="FULLSTACK">FULLSTACK</option>
    //         </select>
    //         <textarea
    //             name="professionalExperience"
    //             placeholder="Professional Experience (Separate each experience by newline)"
    //             value={formData.professionalExperience}
    //             onChange={handleChange}
    //         />
    //         <textarea
    //             name="educationalExperience"
    //             placeholder="Educational Experience (Separate each experience by newline)"
    //             value={formData.educationalExperience}
    //             onChange={handleChange}
    //         />
    //         <button type="submit">Submit</button>
    // </form>
  )
}

export default DevBoarding
