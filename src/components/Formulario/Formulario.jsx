import { useState, useEffect } from "react";
import Error from "../Error/Error";
const Formulario = ({ setPacientes, pacientes, paciente, setPaciente }) => {
  const [cliente, setCliente] = useState({
    nombreMascota: "",
    propietario: "",
    email: "",
    alta: "",
    sintomas: "",
    id: "",
  });
  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setCliente(paciente);
    }
  }, [paciente]);

  const generarId = () => {
    const random = Math.random().toString(36).slice(-6);
    const fecha = Date.now().toString(36);

    return random + fecha;
  };

  const handleChange = (event) => {
    setCliente({
      ...cliente,
      id: generarId(),
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      [
        cliente.nombreMascota,
        cliente.propietario,
        cliente.email,
        cliente.alta,
        cliente.sintomas,
      ].includes("")
    ) {
      console.log("Hay un array vacio");
      setError(true);
      return;
    }

    if (paciente.id) {
      // Editando el registro
      console.log(cliente);
      const clienteActualizado = pacientes.map((pacienteState) =>
        pacienteState.id === paciente.id ? cliente : pacienteState
      );
      setPacientes(clienteActualizado);
      setPaciente({});
    } else {
      //nuevo registro

      setPacientes([...pacientes, cliente]);
    }

    setCliente({
      nombreMascota: "",
      propietario: "",
      email: "",
      alta: "",
      sintomas: "",
    });
  };

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade pacientes y{" "}
        <span className="text-orange-600 font-bold "> Administralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg mb-10 py-10 px-5 m-5"
      >
        {error && <Error mensaje={"Todos los campos son obligatorios"} />}
        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="block text-gray-800 uppercase font-bold"
          >
            Nombre Mascota
          </label>
          <input
            id="mascota"
            type="text"
            placeholder="Nombre de la mascota"
            value={cliente.nombreMascota}
            onChange={handleChange}
            name="nombreMascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block text-gray-800 uppercase font-bold"
          >
            Nombre Propietario
          </label>
          <input
            id="propietario"
            type="text"
            placeholder="Nombre del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg"
            name="propietario"
            value={cliente.propietario}
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-800 uppercase font-bold"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg"
            name="email"
            value={cliente.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-800 uppercase font-bold"
          >
            Alta
          </label>
          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg"
            name="alta"
            value={cliente.alta}
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block text-gray-800 uppercase font-bold"
          >
            Sintomas
          </label>
          <textarea
            id="sintomas"
            placeholder="Describe los sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg"
            name="sintomas"
            value={cliente.sintomas}
            onChange={handleChange}
          />
        </div>
        <input
          type="submit"
          className="bg-orange-600 hover:bg-orange-700 cursor-pointer transition-all uppercase text-white p-3 w-full"
          value={paciente.id ? "Editar Paiente" : "Agregar Paciente"}
        />
      </form>
    </div>
  );
};

export default Formulario;
