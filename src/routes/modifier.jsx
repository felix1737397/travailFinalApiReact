import { useParams, } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import Axios from "axios";
import Header from "../components/Header";






export default function ModifierLivre() {
  let params2 = useParams();
  let isbn = (parseInt(params2.isbn));
  let retourDescriptionApi = ""; 
  let [message, setMessage] = useState("");
  const navigate = useNavigate(); 
  const [livres, setLivres] = useState([]);
  const [description, setDescription] = useState([]);
  const fetchLivres = async () => {
    const { data } = await Axios.get(
      `http://127.0.0.1/travailFinalAPI/livres?isbn=${isbn}`);
    const livres = data;
    setLivres(livres);
  };

  useEffect(() => {
    fetchLivres();
  }, []);


    return (  
        <div>
        <Header />
        <p>Modifier un livre</p>
        </div>
    );
}