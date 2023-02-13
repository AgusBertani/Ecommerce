import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "../containers/Layout";
import Home from "../pages/Home";
import ItemDetailContainer from "../containers/ItemDetailContainer";
import ItemListContainer from "../containers/ItemListContainer";
import AppContext from "../context/AppContext";
import Checkout from "../pages/Checkout";
import useInitialState from "../hooks/useInitialState";
import "../styles/Loading.scss";
import Footer from "../components/Footer";
import "../index"

const App = () => {
  const initialState = useInitialState();

  return (
    <BrowserRouter>
      <AppContext.Provider value={initialState}>
        <Layout>
          <Home />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/categoria/:categoriaId"
              element={<ItemListContainer />}
            />
            <Route
              path="/detalle/:detalleId"
              element={<ItemDetailContainer />}
            />
            <Route path="/cart" element={<Checkout />} />
            <Route path="/*" element={<Navigate to="/" replace />} />
          </Routes>
          <Footer />
        </Layout>
      </AppContext.Provider>
    </BrowserRouter>
  );
};

export default App;
