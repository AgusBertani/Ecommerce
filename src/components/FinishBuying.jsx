import { useContext, useState } from "react";
import {
  addDoc,
  collection,
  documentId,
  getDocs,
  getFirestore,
  query,
  where,
  writeBatch,
} from "firebase/firestore";
import AppContext from "../context/AppContext";
import useForm from "../hooks/useForm";
import { BiLoaderCircle } from "react-icons/bi";
import toast, { Toaster } from "react-hot-toast";
import "../styles/Form.scss";

const initialForm = {
  name: "",
  surname: "",
  phone: "",
  email: "",
  emailr: "",
};
const validationsForm = (form) => {
  let errors = {};
  let regexNameSurname = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexPhone =
    /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/;

  if (!form.name.trim()) {
    errors.name = toast.error("El campo 'Nombre' es requerido");
  } else if (!regexNameSurname.test(form.name.trim())) {
    errors.name = toast.error(
      "El campo 'Nombre' solo acepta letras y espacios en blanco"
    );
  }
  if (!form.surname.trim()) {
    errors.surname = toast.error("El campo 'Apellido' es requerido");
  } else if (!regexNameSurname.test(form.surname.trim())) {
    errors.surname = toast.error(
      "El campo 'Apellido' solo acepta letras y espacios en blanco"
    );
  }
  if (!form.email.trim()) {
    errors.email = toast.error("El campo 'Email' es requerido");
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = toast.error("El campo 'Email' es incorrecto");
  }
  if (form.email !== form.emailr) {
    errors.emailr = toast.error("Los campos no coinciden");
  }
  if (!form.phone.trim()) {
    errors.phone = toast.error("El campo 'Celular' es requerido");
  } else if (!regexPhone.test(form.phone.trim())) {
    errors.phone = toast.error("El campo 'Celular' es incorrecto ");
  }

  return errors;
};

const FinishBuying = () => {
  const { state, totalPrice, emptyCart } = useContext(AppContext);
  const { form, errors, handleChange, handleBlur, setForm } = useForm(
    initialForm,
    validationsForm
  );
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  // <-- GENERATE ORDER
  const generateOrder = async (e) => {
    e.preventDefault();
    setLoading(true);
    let order = {};
    order.buyer = form;
    order.total = totalPrice();

    order.items = state.map((cartItem) => {
      const id = cartItem.id;
      const name = cartItem.nombre;
      const price = cartItem.precio * cartItem.cantidad;

      return { id, name, price };
    });
    // creación de un documento
    const db = getFirestore();
    const queryCollection = collection(db, "orders");
    await addDoc(queryCollection, order)
      .then((resp) => {
        setLoading(false);
        setResponse(true);
        setForm(initialForm);
        setTimeout(() => setResponse(false), 5000);
        toast.success(`Tu compra ${resp.id} fue realizada con éxito`);
        setTimeout(() => emptyCart(), 6500);
      })
      .catch((err) => console.log(err))
      .finally(() =>
        toast("¡Muchas gracias por tu compra!", {
          icon: "👏",
        })
      );

    const queryCollectionStock = collection(db, "productos");

    const queryUpdateStock = await query(
      queryCollectionStock,
      where(
        documentId(),
        "in",
        state.map((it) => it.id)
      )
    );

    const batch = writeBatch(db);

    await getDocs(queryUpdateStock).then((resp) =>
      resp.docs.forEach((res) =>
        batch.update(res.ref, {
          stock:
            res.data().stock -
            state.find((item) => item.id === res.id).cantidad,
        })
      )
    );

    batch.commit();
  }; // GENERATE ORDER -->

  return (
    <section id="contact" className="contact">
      <div className="section-title">
        <h2>Información del comprador</h2>
      </div>
      <div className="container">
        <form onSubmit={generateOrder} className="contactForm">
          <div className="form-container">
            <input
              type="text"
              name="name"
              className="form-input"
              placeholder="Nombre(s) *"
              onChange={handleChange}
              onBlur={handleBlur}
              value={form.name}
              required
            />
            {errors.name && (
              <Toaster position="bottom-center" reverseOrder={false} />
            )}
          </div>
          <div className="form-container">
            <input
              type="text"
              name="surname"
              className="form-input"
              placeholder="Apellido(s) *"
              onChange={handleChange}
              onBlur={handleBlur}
              value={form.surname}
              required
            />
            {errors.surname && (
              <Toaster position="bottom-center" reverseOrder={false} />
            )}
          </div>
          <div className="form-container">
            <input
              type="phone"
              className="form-input"
              name="phone"
              placeholder="Celular *"
              onChange={handleChange}
              onBlur={handleBlur}
              value={form.phone}
              required
            />
            {errors.phone && (
              <Toaster position="bottom-center" reverseOrder={false} />
            )}
          </div>
          <div className="form-container">
            <input
              type="email"
              className="form-input"
              name="email"
              placeholder="Email *"
              onChange={handleChange}
              onBlur={handleBlur}
              value={form.email}
              required
            />
            {errors.email && (
              <Toaster position="bottom-center" reverseOrder={false} />
            )}
          </div>
          <div className="form-container">
            <input
              type="email"
              className="form-input"
              name="emailr"
              placeholder="Confirm Email *"
              onChange={handleChange}
              onBlur={handleBlur}
              value={form.emailr}
              required
            />
            {errors.emailr && (
              <Toaster position="bottom-center" reverseOrder={false} />
            )}
          </div>
          <span className="spanForm">
            Usaremos tus datos para informarte sobre la entrega.
          </span>
          <button className="button-fw" disabled={loading}>
            {loading && <BiLoaderCircle />} Terminar mi compra
          </button>
        </form>
        {response && <Toaster position="bottom-center" />}
      </div>
    </section>
  );
};
export default FinishBuying;
