import React, { useState, useEffect } from "react";
import Axios from "axios";
import Header from "../components/Header";
import "../components/ajouterLivreCss.css";

export default function Ajouter() {

    let [prenom_auteur, setPrenom] = useState("");
    let [nom_famille_auteur, setNomFamille] = useState("");
    let [titre, setTitre] = useState("");
    let [nb_page, setNbPage] = useState("");
    let [isbn, setIsbn] = useState("");
    let [date_publication, setDate] = useState("");
    let [langue, setLangue] = useState("");
    let [collection, setCollection] = useState("");
    let [tome, setTome] = useState("");
    let [image, setImage] = useState("");
    let [message, setMessage] = useState("");

    let handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await Axios.post("http://127.0.0.1/travailFinalApiPhp/livres",{
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
            setPrenom(""); 
            setNomFamille("");
            setTitre("");
            setNbPage("");
            setIsbn("");
            setDate("");
            setLangue("");
            setCollection("");
            setTome("");
            setImage("");
            setMessage("Livre ajouté avec succès");
        }
        catch(error){
            setMessage("Erreur lors de l'ajout du livre");
            console.log(error);
        }
    };
    return (
        <div>
        <Header/>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={prenom_auteur}
                placeholder="Prenom de l'auteur"
                onChange={(e) => setPrenom(e.target.value)}
            />
            <input
                type="nom_famille_auteur"
                value={nom_famille_auteur}
                placeholder="Nom de famille de l'auteur"
                onChange={(e) => setNomFamille(e.target.value)}
            />
            <input
                type="text"
                value={titre}
                placeholder="titre du livre"
                onChange={(e) => setTitre(e.target.value)}
            />
            <input
                type="text"
                value={nb_page}
                placeholder="Nombre de page"
                onChange={(e) => setNbPage(e.target.value)}
            />
            <input
                type="text"
                value={isbn}
                placeholder="ISBN du livre"
                onChange={(e) => setIsbn(e.target.value)}
            />
            <input
                type="text"
                value={date_publication}
                placeholder="Date de publication"
                onChange={(e) => setDate(e.target.value)}
            />
            <input
                type="text"
                value={langue}
                placeholder="langue du livre"
                onChange={(e) => setLangue(e.target.value)}
            />
            <input
                type="text"
                value={collection}
                placeholder="collection du livre"
                onChange={(e) => setCollection(e.target.value)}
            />
            <input
                type="text"
                value={tome}
                placeholder="tome du livre"
                onChange={(e) => setTome(e.target.value)}
            />
            <input
                type="text"
                value={image}
                placeholder="Lien de l'image"
                onChange={(e) => setImage(e.target.value)}
            />
            <button type="submit">Ajouter le livre à la collection</button>
            <div className="message">{message ? <p>{message}</p> : null}</div>
          </form>
        </div>
      );
}