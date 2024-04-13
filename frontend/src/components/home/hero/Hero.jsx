import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"
import { useNavigate} from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const login = ()=>{
   navigate('/Login');
  }
  const registre = ()=>{
   navigate('/Registre');
  }
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO ACADEMIA' title='Best Online Education Expertise' />
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          
          </div>
        </div>
      </section>
      <div className='button'>
              <button onClick={()=>{login()}} className='primary-btn'>
                Login <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button onClick={()=>{registre()}}>
                Signe Up <i className='fa fa-long-arrow-alt-right'></i>
              </button>
      </div>
      <div className='margin1'></div>

    </>
  )
}

export default Hero
