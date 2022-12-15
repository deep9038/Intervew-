import { useEffect, useState } from "react";
import "./App.css";
import {FcOldTimeCamera} from "react-icons/fc" 
import {AiFillEdit} from "react-icons/ai"
import {BsFillTrashFill} from "react-icons/bs"

function App() {
  const [city, setCity] = useState("");
  const [name,setName]=useState("")
  const [ newCity,setNewCity]=useState("")
  const [mobile,setMobile]=useState()
  const [salary,setSalary]=useState()
  const [ profilePic,setProfilePic]=useState()
  
useEffect(()=>{
  console.log(profilePic);
},[profilePic])










  return (
    <div className="App">
      {/* city */}

      <div className="city-input-container">
        <div className="city">
          <h2>City Name</h2>
          <input
            type="text"
            value={city}
            // onChange={handelCityname}
            onChange={e=>setCity(e.target.value)}
            name="city"
          />
        </div>
        <div>
          <button className="button" type="submit">
            Submit Button
          </button>
        </div>
      </div>

      {/* details */}

      <div className="details-contaner">
        <div className="details-input-container">
          <div className="details">
            <h2>Name</h2>
            <input type="text" value={name} onChange={e=>setName(e.target.value)} />
          </div>

          <div className="details">
            <h2>City</h2>
            <select value={newCity} onChange={e=>setNewCity(e.target.value)}>
              <option value="Kolkata">Kolkata</option>
              <option value="Bangalor">Bangalor</option>
              <option value="Shyamnagar">Shyamnagar</option>
            </select>
          </div>

          <div className="details">
            <h2>Slary</h2>
            <input type="number" value={salary} onChange={e=>setSalary(e.target.value)} />
          </div>

          <div className="details">
            <h2>Mobile</h2>
            <input type="number" value={mobile} onChange={e=>setMobile(e.target.value)} />
          </div>

          <div className="details ">
            <h2>Profile Picture</h2>
            <div className="profile-picure-uplod-container">
              <div className="looklikeInputfild"><FcOldTimeCamera  style={{marginLeft:"10px"}} size={30}/></div>
              <input type="file" className="ProfilePic" onChange={e=>setProfilePic(e.target.files[0])} />
            </div>
          </div>

          <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <button className="details-uplod button" type="submit">
              Submit Button
            </button>
          </div>
        </div>
      </div>

      {/* table */}

      <div className="display-container">
        <p>Display user Result </p>
        
        <div className="tableFordetails">
          <table>
            <tr>
              <th>Sr.No</th>
              <th>Name</th>
              <th>Salary</th>
              <th>Mobile</th>
              <th>Profile Picture</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
            <tr>
              <td>1</td>
              <td>Deep</td>
              <td>10000</td>
              <td>9038440784</td>
              <td>pic</td>
              <td className="crud-op"><div className=" edit "><AiFillEdit size={20}/></div></td>
              <td className="crud-op"><div className="delete"><BsFillTrashFill size={20}/></div></td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
