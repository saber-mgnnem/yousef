import { Box, Button, useTheme } from "@mui/material";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import swal from 'sweetalert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt} from '@fortawesome/free-solid-svg-icons'
import Header from "../sidebar/Header";
const Profile = () => {
    const authUser = JSON.parse(localStorage.getItem('auth_USER'));
    const navigate = useNavigate();
    const[fisrtname, setfisrtname] =useState(authUser.fisrtname);
    const[lastname, setlastname] =useState(authUser.lastname);
    const[email, setEmail] =useState(authUser.email);
    const[phone, setPhone] =useState(authUser.phone);
    const[password, setPassword] =useState(authUser.password);
    const[address, setaddress] =useState(authUser.address);
    const[city, setcity] =useState(authUser.city);
    const[country, setcountry] =useState(authUser.country);
    const [file, setFile] = useState("")


    let errorMessage = ""; // define errorMessage variable here

    
   

    const handleUpdate = async (e) =>{
      e.preventDefault();
    // rest of the code
  
    if (!fisrtname ||!lastname|| !email|| !phone  ) {
      errorMessage = "All fields are required"; // update errorMessage value
    }
    if (errorMessage) {
      alert(errorMessage);
    } else {  
      try{
        const config = {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          };
          axios.post(`/api/AdminUpdate_profile/${authUser.id}`, { fisrtname,lastname,email,phone,password,address,city,country,file},config).then(res => {
            if(res.data.status === 200){
                      swal("Success",res.data.message,"success");
                      navigate('/admin/profile');
  
                    }
                 });  
            
  
      } catch(e){
                     console.log(e)
                    }
  
                  }
  
    }
  return (
    <>
        <Header title="Profile"/>  

        <Box m="20px">
        <Box className="Ajouter_User_form" ml="100px">
        <form  onSubmit={handleUpdate}>
            <input 
            type="text" 
            placeholder="nom et prénom"
            value={fisrtname}
            onChange={(e)=>setfisrtname(e.target.value)}
            />
            <input 
            type="text" 
            placeholder="nom et prénom"
            value={lastname}
            onChange={(e)=>setlastname(e.target.value)}
            />
  
            <input 
            type="email" 
            placeholder="Email adresse"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
            
            <input 
            type="phone" 
            placeholder="Téléphone"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            />
            <input 
            type="password" 
            placeholder="Mots de passe"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
            <input 
            type="text" 
            placeholder="Addresse"
            value={address}
            onChange={(e)=>setaddress(e.target.value)}
            /><input 
            type="text" 
            placeholder="city"
            value={city}
            onChange={(e)=>setcity(e.target.value)}
            /><input 
            type="text" 
            placeholder="country"
            value={country}
            onChange={(e)=>setcountry(e.target.value)}
            />

<Box   ml="15px" width="79%" >

                   </Box>
                        {file ? <div
                            className="public-file-item"
                            key={file.name}>
                                <FontAwesomeIcon icon={faFileAlt} />
                                <p>{file.name}</p>

                        </div> : <div></div>}

            
            {errorMessage && <p>{errorMessage}</p>}

            <Box p="20px" mt="20px">
                            <Button type="submit" color="secondary" variant="contained">
                            Modifier Profile
                            </Button>
            </Box>

        </form>
        </Box>

        </Box>
    </>
  )
}

export default Profile