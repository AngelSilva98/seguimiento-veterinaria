import React, { useEffect } from "react";
import Paciente from "../Paciente/Paciente.1";
const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5  ">
      {pacientes && pacientes.length ? (
        <>
          <h1 className="font-black text-3xl text-center">Listado pacientes</h1>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus{" "}
            <span className="text-orange-600 font-bold">pacientes y citas</span>
          </p>
          <div className=" md:h-screen overflow-y-scroll">
            {pacientes.map((paciente) => (
              <Paciente
                key={paciente.id}
                setPaciente={setPaciente}
                paciente={paciente}
                eliminarPaciente={eliminarPaciente}
              />
            ))}
          </div>
        </>
      ) : (
        <>
          <h1 className="font-black text-3xl text-center">No hay pacientes</h1>
          <p className="text-xl mt-5 mb-10 text-center">
            Agrega tus pacientes{" "}
            <span className="text-orange-600 font-bold">y aparecerán acá</span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoPacientes;
