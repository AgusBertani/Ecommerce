import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import ItemList from "../components/ItemList";
import CoverPage from "../components/CoverPage.jsx";
import loadingGif from "../assets/img/loading.gif";
import "../styles/Main.scss";
import "../styles/ProductList.scss";
import "../firebase/config"
import {db} from "../firebase/config"



const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoriaId } = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, "productos");
    const queryFilter = categoriaId
      ? query(queryCollection, where("categoria", "==", categoriaId))
      : queryCollection;

    getDocs(queryFilter)
      .then((resp) =>
        setProductos(resp.docs.map((item) => ({ id: item.id, ...item.data() })))
      )
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [categoriaId]);

  return (
    <>
      <CoverPage />
      {loading ? (
        <div id="spinner" className="container-loading">
          <img src={loadingGif} className="gif" alt="loading" />
        </div>
      ) : (
        <ItemList productos={productos} />
      )}
    </>
  );
};


export default ItemListContainer;
