import React, { useState } from 'react'
import "./EquipForm.css"
import { useNavigate } from "react-router-dom"
import axios from 'axios'

const EquipForm = () => {

  const navigate = useNavigate();

  const [equip, setEquip] = useState({
    equipmentName:"",
    make:"",
    model:"",
    quantity:""
  })

  const handleChange =(e)=>{
    const{name,value} = e.target;
    setEquip({
      ...equip,
      [name]:value
    })
  }


  const handleSubmit = async(e)=>{
    e.preventDefault();
  try{
    const {equipmentName,make,model,quantity} = equip;
    if(equipmentName && make && model && quantity){
     await axios.post("http://localhost:3001/api/equip",equip)
      .then(res =>{
        console.log(res)
        alert("Equipment added successfully");
        navigate("/equipDetail");
      })
    }
    else{
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

            <form onSubmit={handleSubmit}>
              <div className="formbold-form-title">
                <h2 className="flex justify-center">Add Equipment Details</h2>
              </div>

              <div className="formbold-input-flex">
                <div>
                  <label className="formbold-form-label">
                    Equipment Name
                  </label>
                  <input
                    type="text"
                    name="equipmentName"
                    id="equipmentName"
                    className="formbold-form-input"
                    onChange={handleChange}
                    value={equip.equipmentName}

                    // placeholder='including software and hardware'
                  />
                </div>
                
              </div>

              <div className="formbold-input-flex">
                <div>
                  <label className="formbold-form-label"> 
                    Make of Equipment 
                  </label>
                  <input
                    type="text"
                    name="make"
                    id="make"
                    className="formbold-form-input"
                    onChange={handleChange}
                    value={equip.make}

                    // placeholder='Equipment Details'
                  />
                </div>
              </div>

              <div className="formbold-mb-3">
                <label className="formbold-form-label">
                  Model/Version
                </label>
                <input
                  type="text"
                  name="model"
                  id="model"
                  className="formbold-form-input"
                  onChange={handleChange}
                  value={equip.model}
                //   placeholder='Model/Version of equipment'
                />
              </div>

              <div className="formbold-mb-3">
                <label className="formbold-form-label">
                  Quantity
                </label>
                <input
                  type="number"
                  name="quantity"
                  id="quantity"
                  className="formbold-form-input"
                  onChange={handleChange}
                  value={equip.quantity}
                />
              </div>

        <button type="submit" className="formbold-btn"> 
          + Add Equipment
        </button>

    </form>
  </div>
</div>

    </div>
  )
}

export default EquipForm
