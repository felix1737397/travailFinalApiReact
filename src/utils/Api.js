import axios from "axios";
// En spécifiant le baseURL ici, vous n'avez plus besoin de l'ajouter
// à chaque fois, vous pouvez seulement inscrire la route dans l'url de
// votre appel avec Axios. Pour utiliser cette instance, vous devez ajouter
// l'import suivant dans le fichier où vous voulez l'utiliser.
// import Api from '../utils/Api';

export default axios.create({
    baseURL: "http://127.0.0.1/travailFinalAPI/",
    responseType: "json", 
    headers: {
      }   
  });