import React, { useState, useEffect } from "react";
import './ListeLivres.css';
import Axios from "axios";
import Card from 'react-bootstrap/Card'
import { Link } from "react-router-dom";


function App() {
  const [livres, setLivres] = useState([]);

  const fetchLivres = async () => {
    const { data } = await Axios.get(
      "http://127.0.0.1/travailFinalApiPhp/livres"
    );
    const livres = data;
    setLivres(livres);
  };

  useEffect(() => {
    fetchLivres();
  }, []);

  return (

    <div className="wrapper">
      {livres.map((livres) => 
    (
      <Card style={{ width: '18rem' }} key={livres.id_livre}>
      <Card.Img variant="top" className="cover" src={livres.image}
      onError={({ currentTarget }) => {
        currentTarget.onerror = null; // prevents looping
        currentTarget.src="https://imageio.forbes.com/specials-images/imageserve/60a313c68f26ed09059aee55/0x0.jpg?format=jpg&width=1200";
      }}/>
      <Card.Body>
        <Card.Title>{livres.titre}</Card.Title>
        <Card.Text>
          {livres.prenom_auteur}  {livres.nom_famille_auteur}

        </Card.Text>
        <Link
        style={{ display: "block", margin: "1rem 0" }}
        to={`/livre/${livres.isbn}`}
        key={livres.id_livre}>
        Voir la fiche du livre
      </Link>
      </Card.Body>
    </Card>
    ))}
    </div>

  );
}

export default App;