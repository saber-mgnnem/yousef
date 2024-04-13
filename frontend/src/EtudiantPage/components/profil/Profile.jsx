import Header from "../../../Enseignant/componets/Header";
import { Box, Button, useTheme } from "@mui/material";
import { tokens } from "../../../Enseignant/theme";
import { useState,useEffect } from "react";
import { useNavigate ,useParams} from 'react-router-dom';
import axios from "axios"
import swal from 'sweetalert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faFileAlt} from '@fortawesome/free-solid-svg-icons'

const Profile = () => {
    const authUser = JSON.parse(localStorage.getItem('auth_USER'));
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const navigate = useNavigate();
    const[name, setName] =useState(authUser.name);
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
  
    if (!name || !email|| !phone  ) {
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
          axios.post(`/api/AdminUpdate_profile/${authUser.id}`, { name,email,phone,password,address,city,country,file},config).then(res => {
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
        <Box m="20px">
        <Header title={`profile :  ${authUser.name}`} subtitle="Bienvenue sur votre page Modifier " />
        <Box className="Ajouter_User_form" ml="100px">
        <form  onSubmit={handleUpdate}>
            <input 
            type="text" 
            placeholder="nom et prénom"
            value={name}
            onChange={(e)=>setName(e.target.value)}
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

<Box   ml="15px" width="79%" backgroundColor= {colors.primary[400]}>
                       <div className="file-card">
                           <div className="file-inputs">
                               <input type="file" onChange={(e)=>setFile(e.target.files[0])} name='file' />
                                      <Button color="secondary" variant="contained">
                                           <i>
                                             <FontAwesomeIcon icon={faPlus} />
                                           </i>
                                            Upload
                                      </Button>
                           </div>
                            <p className="main">Supported files</p>
                            <p className="info">IMG, JPG, PNG</p>

                        </div>
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