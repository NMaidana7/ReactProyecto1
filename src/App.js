

import { useState } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer/indes';





function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([ {
    id: uuidv4(),
    equipo: "Front End",
    foto: "https://github.com/NMaidana7.png",
    nombre:"Nicolás Maidana",
    puesto:"Estudiante",
    fav: true,
    }])

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  const registrarColaborador = (colaborador) => {

    actualizarColaboradores ([...colaboradores, colaborador])

  }


  const [equipos, actualizarEquipos] = useState ([
    {
      id: uuidv4(),
      titulo:"Programación",
      colorPrimario:"#57C278 ",
      colorSecundario:"#D9F7E9",
    },
    {
      id: uuidv4(),
      titulo:"Front End",
      colorPrimario:"#82CFFA",
      colorSecundario:"#E8F8FF",
    },
    {
      id: uuidv4(),
      titulo:"Data Science",
      colorPrimario:"#A6D157",
      colorSecundario:"#F0F8E2",
    },
    {
      id: uuidv4(),
      titulo:"Devops",
      colorPrimario:"#E06B69",
      colorSecundario:"#FDE7E8",
    },
    {
      id: uuidv4(),
      titulo:"UX y Diseño",
      colorPrimario:"#DB6EBF",
      colorSecundario:"#FAE9F5",
    },
    {
      id: uuidv4(),
      titulo:"Móvil",
      colorPrimario:"#FFBA05",
      colorSecundario:"#FFF5D9",
    },
    {
      id: uuidv4(),
      titulo:"Innovación y  Gestión",
      colorPrimario:"#FF8A29",
      colorSecundario:"#FFEEDF",
    },
  ])


  const eliminarColaborador = (id) => {
    const nuevosColaboradores = colaboradores.filter((colaborador)=> colaborador.id != id)
    actualizarColaboradores(nuevosColaboradores)

  }


  const actualizarColor = (color, id) => {
      const equiposActualizados = equipos.map((equipo) => {
        if(equipo.id === id){
          equipo.colorPrimario = color
        }

        return equipo
      })

      actualizarEquipos(equiposActualizados)
  }

  const crerEquipo = (nuevoEquipo) => {
      actualizarEquipos([...equipos,{...nuevoEquipo, id: uuidv4()}])
  }

  const like = (id) => {
      const colaboradoresActualizados = colaboradores.map((colaborador) => {
        if (colaborador.id === id){
          colaborador.fav = !colaborador.fav
        }
        return colaborador
      })
      actualizarColaboradores(colaboradoresActualizados)
  }



  return (

    <div >
       <Header />
       {mostrarFormulario ?  <Formulario equipos={equipos.map((equipo) => equipo.titulo)} registrarColaborador = {registrarColaborador} crearEquipo={crerEquipo}/> : <></>}
       <MiOrg cambiarMostrar={cambiarMostrar} />
      
      {
        equipos.map ( (equipo) => {
          return <Equipo datos={equipo}
           key={equipo.titulo}
            colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
             eliminarColaborador={eliminarColaborador}
             actualizarColor={actualizarColor}
             like={like}
             />
        }) 
      }
        <Footer />
        
    </div>
  );
}

export default App;
