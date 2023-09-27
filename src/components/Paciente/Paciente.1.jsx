import React from "react";

const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
  const { nombreMascota, propietario, email, alta, sintomas, id } = paciente;

  function handleEliminar() {
    const response = confirm(
      "Desea eliminar a este paciente? " + nombreMascota
    );

    if (response) {
      eliminarPaciente(id);
    }
  }

  return (
    <div className="m-3 bg-white shadow-lg px-5 py-10 rounded-lg">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre:{" "}
        <span className="font-normal normal-case">{nombreMascota} </span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario:{" "}
        <span className="font-normal normal-case">{propietario} </span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: <span className="font-normal normal-case">{email} </span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha de alta: <span className="font-normal normal-case">{alta}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas: <span className="font-normal normal-case">{sintomas}</span>
      </p>
      <div className="flex justify-evenly mt-10">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-800 hover:bg-indigo-950 text-white font-bold uppercase rounded-lg"
          onClick={() => setPaciente(paciente)}
        >
          Editar
        </button>
        <button
          className="py-2 px-10 bg-red-700 hover:bg-red-900 text-white font-bold uppercase rounded-lg"
          type="button"
          onClick={handleEliminar}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};
export default Paciente;
