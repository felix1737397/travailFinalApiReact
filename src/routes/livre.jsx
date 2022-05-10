import { useParams, } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import Axios from "axios";
import Header from "../components/Header";
import "../components/livre.css";






export default function Livre() {
  let params2 = useParams();
  let isbn = (parseInt(params2.isbn));
  let retourDescriptionApi = ""; 
  let [message, setMessage] = useState("");
  const navigate = useNavigate(); 
  const [livres, setLivres] = useState([]);
  const [description, setDescription] = useState([]);
  const fetchLivres = async () => {
    const { data } = await Axios.get(
      `http://127.0.0.1/travailFinalApiPhp/livres?isbn=${isbn}`);
    const livres = data;
    setLivres(livres);
  };

  const fecthDescription = async () => {
    const { data } = await Axios.get(`https://openlibrary.org/isbn/${isbn}.json`);
    const description = data;
    setDescription(description);
  };

  useEffect(() => {
    fetchLivres();
    fecthDescription();

  }, []);
  let supprimerLivre = async () => {
    try{
      const { data } = await Axios.delete(await Axios.delete(
        `http://127.0.0.1/travailFinalAPI/livres/${isbn}`));
      }
      catch(error){
        setMessage("Erreur lors de la suppression du livre");
        navigate('/');
        console.log(error);
      }
    }


  let modifierLivre = async ( ) => {
    try{
      livres.map((livres) => {
      navigate(`/modifier/${livres.isbn}`);
      });
    }
    catch(error){
      setMessage("Erreur lors de la modification du livre");
      navigate('/');
      console.log(error);
    }
  }
  
    if(description.description){
      if(description.description.value){
        retourDescriptionApi = description.description.value;
      }
      else{
        retourDescriptionApi = description.description; 
      }
    }
    else{
      retourDescriptionApi = "Aucune description disponible";
    }
    /*INSERT INTO `livre` (`prenom_auteur`, `nom_famille_auteur`, `titre`, `nb_page`, `isbn`, `date_publication`, `langue`, `collection`,`tome`, `image`) VALUES*/
    return (  
      <div>
      <Header/>
      {livres.map((livres) => 
    (
      <div>
      <img key={livres.id_livre} src={livres.image}
      onError={({ currentTarget }) => {
        currentTarget.onerror = null; // prevents looping
        currentTarget.src="https://imageio.forbes.com/specials-images/imageserve/60a313c68f26ed09059aee55/0x0.jpg?format=jpg&width=1200";
      }} alt="image" style={{width: "30%", height: "auto"}} align="left"/>
      <h1><center>{livres.titre}</center></h1> 
      <br></br>
      <h2><center>Auteur: {livres.prenom_auteur} {livres.nom_famille_auteur}</center></h2>
      <br></br>
      <h2><center>Collection:  {livres.collection}</center></h2>
      <br></br>
      <h2><center>Tome:  {livres.tome}</center></h2>
      <br></br>
      <h2><center>Langue: {livres.langue}</center></h2>
      <br></br>
      <h2><center>Date de publication: {livres.date_publication}</center></h2> 
      <br></br>
      <h2><center>Nombre de pages:  {livres.nb_page}</center></h2>
      <br></br>
      <h2><center>ISBN: {livres.isbn}</center></h2>
      <br></br>
      <h2><center>Résumé</center></h2>
      <h3><center>{retourDescriptionApi}</center></h3>
      <h3><center><button onClick={supprimerLivre} className="button button1" type="button">Supprimer le livre</button></center></h3>
      <h3><center><button onClick={modifierLivre} className="button button2" type="button2">Modifier le livre</button></center></h3>     
      <div className="message">{message ? <p>{message}</p> : null}</div>
      </div>
    ))}
    </div>
    );
  }
