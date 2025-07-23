

import axios from 'axios';



const Axiosss = () => {

axios.get(`
https://estelarbetpromociones.com/wp-content/themes/estelarbetpromociones/assets/controladores/ControllerPosts.php?pais=CL&idioma=ES`)
  .then(function (response) {
    // manejar respuesta exitosa
    console.log(response);
  })
  .catch(function (error) {
    // manejar error
    console.log(error);
  })
  .finally(function () {
    // siempre sera executado
  });


}

export default Axiosss