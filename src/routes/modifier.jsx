import { useParams, } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import Axios from "axios";
import Header from "../components/Header";
import "../components/ajouterLivreCss.css";

export default function Ajouter() {
    let params = useParams();
    const [livres, setLivres] = useState([]);
    const navigate = useNavigate(); 
    let [prenom_auteur, setPrenom] = useState();
    let [nom_famille_auteur, setNomFamille] = useState();
    let [titre, setTitre] = useState();
    let [nb_page, setNbPage] = useState();
    let [isbn, setIsbn] = useState();
    let [date_publication, setDate] = useState();
    let [langue, setLangue] = useState();
    let [collection, setCollection] = useState();
    let [tome, setTome] = useState();
    let [image, setImage] = useState();
    let [mdp, setMotdePasse] = useState();

    let [message, setMessage] = useState("");


    const fetchLivres = async () => {

      try{
        const { data } = await Axios.get(
          `http://127.0.0.1/travailFinalApiPhp/livres?isbn=${params.isbn}`
        );
        const livres = data;
        setLivres(livres);
        setCollection(livres[0].collection);
        setDate(livres[0].date_publication);
        setIsbn(livres[0].isbn);
        setLangue(livres[0].langue);
        setNbPage(livres[0].nb_page);
        setNomFamille(livres[0].nom_famille_auteur);
        setPrenom(livres[0].prenom_auteur);
        setTitre(livres[0].titre);
        setTome(livres[0].tome);
        setImage(livres[0].image);
      }    
      catch(error){
        console.log(error);
      }
    };
    

    useEffect(() => {
      fetchLivres();
    }, []);


    let handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await Axios.put(`http://127.0.0.1/travailFinalApiPhp/livres/${params.isbn}/${mdp}`,{
                prenom_auteur: prenom_auteur,
                nom_famille_auteur: nom_famille_auteur,
                titre: titre,
                nb_page: nb_page,
                isbn: isbn,
                date_publication: date_publication,
                langue: langue,
                collection: collection,
                tome: tome,
                image: image,
            });
            setMessage("Livre modifié avec succès");
        }
        catch(error){
            setMessage("Erreur lors de la modification du livre, veuillez corriger les champs et valider votre clé d'api");
            console.log(error);
        }
    };


    return (
        <div>
        <Header/>
        {livres.map((livres) => (
            <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={prenom_auteur}
                placeholder="prenom de l'auteur"
                onChange={(e) => setPrenom(e.target.value)}
            />
            <input
                type="nom_famille_auteur"
                value={nom_famille_auteur}
                placeholder="nom de famille de l'auteur"
                onChange={(e) => setNomFamille(e.target.value)}
            />
            <input
                type="text"
                value={titre}
                placeholder="titre"
                onChange={(e) => setTitre(e.target.value)}
            />
            <input
                type="text"
                value={nb_page}
                placeholder=    "nb de page"
                onChange={(e) => setNbPage(e.target.value)}
            />
            <input
                type="text"
                value={isbn}
                placeholder="isbn"
                onChange={(e) => setIsbn(e.target.value)}
            />
            <input
                type="text"
                value={date_publication}
                placeholder=   "date de publication"
                onChange={(e) => setDate(e.target.value)}
            />
            <input
                type="text"
                value={langue}
                placeholder=  "langue"
                onChange={(e) => setLangue(e.target.value)}
            />
            <input
                type="text"
                value={collection}
                placeholder="Collection"
                onChange={(e) => setCollection(e.target.value)}
            />
            <input
                type="text"
                value={tome}
                placeholder= "tome"
                onChange={(e) => setTome(e.target.value)}
            />
            <input
                type="text"
                value={image}
                placeholder ={livres.image}
                onChange={(e) => setImage(e.target.value)}
            />
            <input
            type="password"
            value={mdp}
            placeholder ="Mot de passe"
            onChange={(e) => setMotdePasse(e.target.value)}
            />
            <button type="submit">Modifier le livre</button>
            <div className="message">{message ? <p>{message}</p> : null}</div>
          </form>
    ))}
      </div>
      );
}