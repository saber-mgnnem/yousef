import { Box, Button, useTheme } from "@mui/material";
import { useState,useEffect } from "react";
import { useNavigate ,useParams} from 'react-router-dom';
import axios from "axios"
import swal from 'sweetalert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faFileAlt} from '@fortawesome/free-solid-svg-icons'
const ModifierUtilisateur = () => {

    const { id,username } = useParams();
    const navigate = useNavigate();
    const[image,setImage] = useState('');
    const[name, setName] =useState("");
    const[email, setEmail] =useState("");
    const[phone, setPhone] =useState("");
    const[role, setRole] =useState("");
    const[identifiant_user, setIdentifiant_user] =useState("");
    const [level, setLevel] = useState('');
    const [file, setFile] = useState('');
   
    let errorMessage = ""; // define errorMessage variable here

    
   
    useEffect(() => {
      axios.get(`/api/get_user/${id}`).then(response => {
        // Handle the response data
        if (response.data.status === 200) {
          console.log(response.data.user)
          setName(response.data.user.name);
          setEmail(response.data.user.email);
          setPhone(response.data.user.phone);
          setRole(response.data.user.role);
          setIdentifiant_user(response.data.user.identifiant_user);
          setLevel(response.data.user.level);
          setImage(response.data.user.image)
        }
      });
    }, [id]);
    const handleUpdate = async (e) =>{
      e.preventDefault();
    // rest of the code
  
    if (!name || !email || !phone || !role || !identifiant_user ) {
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
          axios.post(`/api/AdminUpdate_profile/${id}`, { name,email,phone,role,identifiant_user,level,id,file},config).then(res => {
            if(res.data.status === 200){
                    
                      swal("Success",res.data.message,"success");
                      navigate('/admin/enseignant');
  
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
        <Header title={`Modifier :  ${username}`} subtitle="Bienvenue sur votre page Modifier " />
        <Box className="Ajouter_User_form" ml="100px">
        <form  onSubmit={handleUpdate}>
        <Box m="20px">
                <img 
                alt="img"
                width="100px"
                height="100px"
                src={"http://127.0.0.1:8000/uploads/profile/"+image}/>
              </Box>
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
          

            <div className="input-group mb-3">
                <label className="input-group-text" >Role</label>
                <select  value={role} onChange={(e)=>setRole(e.target.value)} className="formSelect" >
                <option  >Choose...</option>
                <option value="Eleves">Eleves</option>
                <option value="Parent">Parent</option>
                <option value="Admin">Admin</option>
                <option value="Enseignant">Enseignant</option>

                </select>
            </div>
            { role ==="Eleves" && (
            <>
            <div className="input-group mb-3">
              <label className="input-group-text" >Niveau</label>
              <select value={level} onChange={(e)=>setLevel(e.target.value)} className="formSelect" required>
                <option disabled selected value="">Choisir...</option>
                <option value="سنة اولى">سنة اولى</option>
                  <option value="سنة ثانية">سنة ثانية</option>
                  <option value="سنة ثالثة">سنة ثالثة</option>
                  <option value="سنة رابعة">سنة رابعة</option>
                  <option value="سنة خامسة">سنة خامسة</option>
                  <option value="سنة سادسة">سنة سادسة</option>
              </select>
            </div>
             <input 
             type="text" 
             placeholder="Identifiant Eleve"
             value={identifiant_user}
             onChange={(e)=>setIdentifiant_user(e.target.value)}
             required             />
            </>
            
            )

            }
              { role ==="Parent" && (
            <>
             <input 
             type="text" 
             placeholder="identifiant de voter eleve"
             value={identifiant_user}
             onChange={(e)=>setIdentifiant_user(e.target.value)}
             required             />
            </>
            
            )

            }
            { role ==="Enseignant" && (
            <>
             <input 
             type="text" 
             placeholder="identifiant Enseignant"
             value={identifiant_user}
             onChange={(e)=>setIdentifiant_user(e.target.value)}
             required             />
            </>
            
            )

            }
               <Box   ml="15px" width="82%" backgroundColor= {colors.primary[400]}>
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
                            <p className="info">PDF, JPG, PNG</p>

                        </div>
                   </Box>
                        {file ? <div
                            className="public-file-item"
                            key={file.name}>
                                <FontAwesomeIcon icon={faFileAlt} />
                                <p>{file.name}</p>

                        </div> : <div
                            className="public-file-item"
                            key={file.name}>
                                <FontAwesomeIcon icon={faFileAlt} />
                                <p>{image}</p>

                        </div>}
            
            {errorMessage && <p>{errorMessage}</p>}

            <Box p="20px" mt="20px">
                            <Button type="submit" color="secondary" variant="contained">
                            Modifier Utilisateur
                            </Button>
            </Box>

        </form>
        </Box>

        </Box>
    </>
  )
}

export default ModifierUtilisateur