import React from 'react'
import "../EquipmentForm/EquipForm.css"
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const EquipForm = () => {

  const navigate = useNavigate();

  const [lab, setLab] = useState({
    labName: "",
    department:"",
    labNo:"",
    labIncharge:"",
    contact:"",
    email:""  
  })

  const handleChange = async(e)=>{
    const {name,value} = e.target;
    setLab({
    ...lab,
    [name]:value
  })
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try{
      const {labName,department,labNo,labIncharge,contact,email} = lab;
      if(labName && labNo && labIncharge && contact && email && department){
        await axios.post("http://localhost:3001/api/labs/",lab)
         .then(res =>{
           console.log(res)
           alert("Lab added Successfully!");
           navigate("/labs");
         })
      }else{
        alert("please fill all the fields");
      }
    }catch(err){
      console.log(err);
    }
  }

  return (
    <div>
      <div className="formbold-main-wrapper">
          <div className="formbold-form-wrapper">

            {/* <img src="your-image-url-here.jpg" /> */}

            <form onSubmit={handleSubmit} >
              <div className="formbold-form-title">
                <h2 className="flex justify-center">Add Lab Details</h2>              
              </div>

              <div className="formbold-input-flex">
                <div>
                  <label className="formbold-form-label">
                    Lab Name
                  </label>
                  <input
                    type="text"
                    name="labName"
                    id="labName"
                    className="formbold-form-input"
                    onChange={handleChange}
                    value={lab.labName}                    
                    // placeholder='including software and hardware'
                  />
                </div>
                
              </div>

              <div className="formbold-mb-3">
                <label className="formbold-form-label">
                  Department
                </label>
                <input
                  type="text"
                  name="department"
                  id="department"
                  className="formbold-form-input"
                  onChange={handleChange}
                  value={lab.department}
                //   placeholder='No. of equipments'
                />
              </div>
              <div className="formbold-mb-3">
                <label className="formbold-form-label">
                  Lab Number
                </label>
                <input
                  type="number"
                  name="labNo"
                  id="labNo"
                  className="formbold-form-input"
                  onChange={handleChange}
                  value={lab.labNo}
                //   placeholder='Model/Version of equipment'
                />
              </div>

              <div className="formbold-mb-3">
                <label className="formbold-form-label">
                  Lab Incharge
                </label>
                <input
                  type="text"
                  name="labIncharge"
                  id="labIncharge"
                  className="formbold-form-input"
                  onChange={handleChange}
                  value={lab.labIncharge}
                //   placeholder='No. of equipments'
                />
              </div>

              <div className="formbold-mb-3">
                <label className="formbold-form-label">
                  Contact No.
                </label>
                <input
                  type="number"
                  name="contact"
                  id="contact"
                  className="formbold-form-input"
                  onChange={handleChange}
                  value={lab.contact}
                //   placeholder='No. of equipments'
                />
              </div>
              <div className="formbold-mb-3">
                <label className="formbold-form-label">
                  Incharge email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="formbold-form-input"
                  onChange={handleChange}
                  value={lab.email}
                //   placeholder='No. of equipments'
                />
              </div>

      <button className="formbold-btn" type='submit'> + Add Lab</button>
    </form>
  </div>
</div>

    </div>
  )
}

export default EquipForm
