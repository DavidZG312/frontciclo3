import React, { useState, useEffect } from "react";
import axios from "axios";

//MATERIAL UI
import { Typography, IconButton, FormLabel, FormControl, FormControlLabel, Checkbox, Box, Dialog, DialogContent, DialogContentText, DialogActions, DialogTitle, Card, CardHeader, CardContent, CardActions, Collapse, AccordionSummary, AccordionDetails, Accordion, makeStyles, Fab, Tooltip, InputAdornment, Paper, Grid, Button, TextField, List, ListItem, ListItemText, Divider } from '@mui/material';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';

//Componentes
import Category from '../components/Category'
import Boats from '../components/Boats'
import Client from '../components/Client'
import Message from '../components/Message'
import Reservation from '../components/Reservation'

//Estilos
import useStyles from '../assets/css/js/Styles';

//ICONOS
import AppsIcon from '@mui/icons-material/Apps';
import SearchIcon from "@mui/icons-material/Search";
import DirectionsBoatFilledIcon from '@mui/icons-material/DirectionsBoatFilled';
import AddIcon from "@mui/icons-material/Add";
import CategoryIcon from '@mui/icons-material/Category';
import MessageIcon from '@mui/icons-material/Message';
import CheckIcon from "@mui/icons-material/Check";
import RemoveIcon from "@mui/icons-material/Remove";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import EditIcon from "@mui/icons-material/Edit";
import PersonIcon from '@mui/icons-material/Person';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';

export default function Home() {
  //useStyles
  const classes = useStyles();

  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [viewCategory, setViewCategory] = useState(false)
  const [viewBoat, setViewBoat] = useState(false)
  const [viewClient, setViewClient] = useState(false)
  const [viewMessage, setViewMessage] = useState(false)
  const [viewReservation, setViewReservation] = useState(false)
  const [actions, setActions] = useState([
    { icon: <CategoryIcon />, name: <Typography>Categoria</Typography>, mode: "category" },
    { icon: <DirectionsBoatFilledIcon />, name: <Typography>Botes</Typography>, mode: "boats" },
    { icon: <PersonIcon />, name: <Typography>Cliente</Typography>, mode: "client" },
    { icon: <MessageIcon />, name: <Typography>Mensaje</Typography>, mode: "message" },
    { icon: <AssignmentTurnedInIcon />, name: <Typography>Reservacion</Typography>, mode: "reservation" },
  ]);

  const [arregloCategoria, setArregloCategoria] = useState([])
  const [arregloBoat, setArregloBoat] = useState([])
  const [arregloCliente, setArregloCliente] = useState([])
  const [arregloMensaje, setArregloMensaje] = useState([])
  const [arregloReservacion, setArregloReservacion] = useState([])
  //APIS CATEGORIA

  const consultaCategoria = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/Category/all');
      if (response.status === 200) {
        setArregloCategoria(response.data)
      }
    } catch (error) {
      console.log(error)

    }
  }

  const añadirCategoria = async (data) => {
    try {
      const response = await axios.post('http://localhost:8080/api/Category/save', data);
      if (response.status === 201) {
        consultaCategoria()
      }
    } catch (error) {
      console.log(error)

    }
  }

  const editarCategoria = async (data) => {
    try {
      const response = await axios.put('http://localhost:8080/api/Category/update', data);
      if (response.status === 201) {
        consultaCategoria()
      }
    } catch (error) {
      console.log(error)

    }
  }

  const eliminarCategoria = async (data) => {
    try {
      const response = await axios.delete(`http://localhost:8080/api/Category/${data.id}`);
      if (response.status === 204) {
        consultaCategoria()
      }
    } catch (error) {
      console.log(error)

    }
  }

  //APIS BOTE

  const consultaBote = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/Boat/all');
      if (response.status === 200) {
        setArregloBoat(response.data)
      }
    } catch (error) {
      console.log(error)

    }
  }

  const añadirBote = async (data) => {
    try {
      const response = await axios.post('http://localhost:8080/api/Boat/save', data);
      if (response.status === 201) {
        consultaBote()
      }
    } catch (error) {
      console.log(error)

    }
  }

  const editarBote = async (data) => {
    try {
      const response = await axios.put('http://localhost:8080/api/Boat/update', data);
      if (response.status === 201) {
        consultaBote()
      }
    } catch (error) {
      console.log(error)

    }
  }

  const eliminarBote = async (data) => {
    try {
      const response = await axios.delete(`http://localhost:8080/api/Boat/${data.id}`);
      if (response.status === 204) {
        consultaBote()
      }
    } catch (error) {
      console.log(error)

    }
  }

  //APIS CLIENTE

  const consultaCliente = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/Client/all');
      if (response.status === 200) {
        setArregloCliente(response.data)
      }
    } catch (error) {
      console.log(error)

    }
  }

  const añadirCliente = async (data) => {
    try {
      const response = await axios.post('http://localhost:8080/api/Client/save', data);
      if (response.status === 201) {
        consultaCliente()
      }
    } catch (error) {
      console.log(error)

    }
  }

  const editarCliente = async (data) => {
    try {
      const response = await axios.put('http://localhost:8080/api/Client/update', data);
      if (response.status === 201) {
        consultaCliente()
      }
    } catch (error) {
      console.log(error)

    }
  }

  const eliminarCliente = async (data) => {
    try {
      const response = await axios.delete(`http://localhost:8080/api/Client/${data.idClient}`);
      if (response.status === 204) {
        consultaCliente()
      }
    } catch (error) {
      console.log(error)

    }
  }

  //APIS MENSAJE

  const consultaMensaje = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/Message/all');
      if (response.status === 200) {
        setArregloMensaje(response.data)
      }
    } catch (error) {
      console.log(error)

    }
  }

  const añadirMensaje = async (data) => {
    try {
      const response = await axios.post('http://localhost:8080/api/Message/save', data);
      if (response.status === 201) {
        consultaMensaje()
      }
    } catch (error) {
      console.log(error)

    }
  }

  const editarMensaje = async (data) => {
    try {
      const response = await axios.put('http://localhost:8080/api/Message/update', data);
      if (response.status === 201) {
        consultaMensaje()
      }
    } catch (error) {
      console.log(error)

    }
  }

  const eliminarMensaje = async (data) => {
    try {
      const response = await axios.delete(`http://localhost:8080/api/Message/${data.idMessage}`);
      if (response.status === 204) {
        consultaMensaje()
      }
    } catch (error) {
      console.log(error)

    }
  }

  //APIS RESERVACIONES

  const consultaReservacion = async () => {
    try {
      const arrayReserva = []
      const response = await axios.get('http://localhost:8080/api/Reservation/all');
      if (response.status === 200) {
        if (response.data.length !== 0) {
          response.data.map(item => {
            arrayReserva.push({
              idReservation: item.idReservation,
              startDate: item.startDate.split('T00')[0],
              devolutionDate: item.devolutionDate.split('T00')[0],
              client: item.client,
              boat: item.boat
            })
          })
          setArregloReservacion(arrayReserva)
        } else {
          setArregloReservacion(response.data)
        }
      }
    } catch (error) {
      console.log(error)

    }
  }

  const añadirReservacion = async (data) => {
    try {
      const response = await axios.post('http://localhost:8080/api/Reservation/save', data);
      if (response.status === 201) {
        consultaReservacion()
      }
    } catch (error) {
      console.log(error)

    }
  }

  const editarReservacion = async (data) => {
    try {
      const response = await axios.put('http://localhost:8080/api/Reservation/update', data);
      if (response.status === 201) {
        consultaReservacion()
      }
    } catch (error) {
      console.log(error)

    }
  }

  const eliminarReservacion = async (data) => {
    try {
      const response = await axios.delete(`http://localhost:8080/api/Reservation/${data.idReservation}`);
      if (response.status === 204) {
        consultaReservacion()
      }
    } catch (error) {
      console.log(error)

    }
  }

  const handleClickMenu = (idButton) => {
    switch (idButton) {
      case "category":
        setViewCategory(!viewCategory)
        break;
      case "boats":
        setViewBoat(!viewBoat)
        break;
      case "client":
        setViewClient(!viewClient)
        break;
      case "message":
        setViewMessage(!viewMessage)
        break;
      case "reservation":
        setViewReservation(!viewReservation)
        break;
      default:
    }
  };

  return (
    <>
      <Box p={5}>
        <Grid container component={Paper} style={{ borderRadius: '25px', padding: '20px', minHeight: '90vh' }}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Box mt={2} style={{ boxShadow: 'none' }}>
              <Card className={classes.media} style={{ boxShadow: 'none' }}>
                <CardHeader
                  className={classes.textCard}
                  title="FRONTEND CICLO 3"
                />
              </Card>
            </Box>

            <Grid container justifyContent="center" alignItems="center">
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <SpeedDial
                  FabProps={{
                    style: {
                      // width: "350px",
                      // borderRadius: "30px",
                      // backgroundColor: '#0d47a1'
                      backgroundColor: "#fff",
                    },
                  }}
                  style={{ marginTop: "30px" }}
                  direction="rigth"
                  ariaLabel="SpeedDial openIcon example"
                  hidden={hidden}
                  onClose={() => setOpen(false)}
                  onOpen={() => setOpen(true)}
                  icon={
                    <AppsIcon
                      className={classes.logoSpeedDial}
                    />
                  }
                  open={open}
                >
                  {actions.map((action) => (
                    <SpeedDialAction
                      key={action.mode}
                      icon={action.icon}
                      tooltipTitle={action.name}
                      tooltipPlacement="bottom"
                      onClick={() => setOpen(false)}
                      onClick={() => handleClickMenu(action.mode)}
                    />
                  ))}
                </SpeedDial>
              </Grid>
              {viewCategory && (
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ marginTop: '30px' }}>
                  <Category
                    consultaCategoria={consultaCategoria}
                    añadirCategoria={añadirCategoria}
                    editarCategoria={editarCategoria}
                    eliminarCategoria={eliminarCategoria}
                    arreglo={arregloCategoria}
                  />
                </Grid>
              )}
              {viewBoat && (
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ marginTop: '30px' }}>
                  <Boats
                    consultaBote={consultaBote}
                    añadirBote={añadirBote}
                    editarBote={editarBote}
                    eliminarBote={eliminarBote}
                    arreglo={arregloBoat}
                    arregloCategoria={arregloCategoria}
                    consultaCategoria={consultaCategoria}
                  />
                </Grid>
              )}
              {viewClient && (
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ marginTop: '30px' }}>
                  <Client
                    consultaCliente={consultaCliente}
                    añadirCliente={añadirCliente}
                    editarCliente={editarCliente}
                    eliminarCliente={eliminarCliente}
                    arreglo={arregloCliente}
                  />
                </Grid>
              )}
              {viewMessage && (
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ marginTop: '30px' }}>
                  <Message
                    consultaMensaje={consultaMensaje}
                    añadirMensaje={añadirMensaje}
                    editarMensaje={editarMensaje}
                    eliminarMensaje={eliminarMensaje}
                    arreglo={arregloMensaje}
                    arregloCliente={arregloCliente}
                    arregloBoat={arregloBoat}
                    consultaBote={consultaBote}
                    consultaCliente={consultaCliente}
                  />
                </Grid>
              )}
              {viewReservation && (
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ marginTop: '30px' }}>
                  <Reservation
                    consultaReservacion={consultaReservacion}
                    añadirReservacion={añadirReservacion}
                    editarReservacion={editarReservacion}
                    eliminarReservacion={eliminarReservacion}
                    arreglo={arregloReservacion}
                    arregloCliente={arregloCliente}
                    arregloBoat={arregloBoat}
                    consultaBote={consultaBote}
                    consultaCliente={consultaCliente}
                  />
                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
