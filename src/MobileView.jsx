import TextContent from './components/Content/TextContent'
import RegisterForm from './components/Register/RegisterForm'
import './MobileView.css'

const MobileView = () => {


  const handleRegister = () => {
    document.querySelector('#textContent').style.display = 'none';
    document.querySelector('#logo').style.display = 'none';
    document.querySelector('#registerForm').style.display = 'flex';
  }
  
  return (
    < >
    <figure id="logo">
<img  src="https://estelarbet-18753938.springbuilder.site/fs/userFiles-v2/estelarbet-18753938/media/logo-file-1751573059773.svg?1751573063149" alt="" />
    </figure>

<div id="textContent" className="text-content-container">
  <TextContent />
  <div className="buttons-container">
    <button 
      className="register-button"
      onClick={() => {
        handleRegister();
      }}
    >
      Registrate
    </button>
    <a href="#" className="terms-link">
      Términos y condiciones
    </a>
  </div>

  <figure className="security-info">
    <p>Tus datos personales están protegidos por</p>
    <img 
      className="cloudflare-logo"
      src="https://estelarbet-18753938.springbuilder.site/fs/userFiles-v2/estelarbet-18753938/media/cloudflare-logo-17515863094961.svg" 
      alt="Cloudflare Logo" 
    />
  </figure>
</div>


    <RegisterForm />


    </>
  )
}

export default MobileView