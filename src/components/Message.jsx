import { useState, useEffect } from "react";
import axios from "axios";

import { Typography, IconButton, FormLabel, FormControl, FormControlLabel, Checkbox, Box, Dialog, DialogContent, DialogContentText, DialogActions, DialogTitle, Card, CardHeader, CardContent, CardActions, Collapse, AccordionSummary, AccordionDetails, Accordion, makeStyles, Fab, Tooltip, InputAdornment, Paper, Grid, Button, TextField, List, ListItem, ListItemText, Divider, TableRow, TableContainer, Table, TableHead, TableCell, TableBody, TablePagination, InputLabel, Select, MenuItem } from '@mui/material';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';

//Estilos
import useStyles from '../assets/css/js/Styles';
import { withStyles } from "@mui/styles";

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
import CloseIcon from "@mui/icons-material/Close";
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";

import useModal from './hooks/useModal'

const StyledTableCell = withStyles((theme) => ({
    body: {
        fontSize: 14,
        // color: secondaryColor
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        backgroundColor: "#616161",
        // "&:nth-of-type(odd)": {
        //     backgroundColor: "#e6e6e6",
        // },
    },
}))(TableRow);

const Boats = ({ consultaMensaje, a??adirMensaje, editarMensaje, eliminarMensaje, arreglo, arregloCliente, arregloBoat, consultaBote, consultaCliente }) => {
    //useStyles
    const classes = useStyles();

    //Hoocks
    const [modal, openModal, closeModal] = useModal()
    const [modalDelete, openModalDelete, closeModalDelete] = useModal()
    //Local State
    const [searchState, setSearchState] = useState(false);
    const [page, setPage] = useState(0);
    const [selectCliente, setSelectCliente] = useState("")
    const [selectBote, setSelectBote] = useState("")
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [searchData, setSearchData] = useState("");
    const [addState, setAddState] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [open, setOpen] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [data, setData] = useState({
        idMessage: '',
        messageText: '',
        client: '',
        boat: '',
    });

    const [botonEliminar, setBotonEliminar] = useState(false);
    const [actions, setActions] = useState([
        { icon: <AddIcon />, name: <Typography>Agregar</Typography>, mode: "add" },
        { icon: <EditIcon />, name: <Typography>Editar</Typography>, mode: "edit" },
        {
            icon: <DeleteIcon />,
            name: <Typography>Eliminar</Typography>,
            mode: "delete",
        },
        // {
        //     icon: <SearchIcon />,
        //     name: <Typography>Buscar</Typography>,
        //     mode: "search",
        // },
    ]);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleClose = () => {
        closeModal()
        setData({
            idMessage: '',
            messageText: '',
            client: '',
            boat: '',
        })
        setSelectCliente("")
        setSelectBote("")
        setAddState(false)
    }

    console.log(arreglo)

    useEffect(() => {
        consultaMensaje()
        consultaBote()
        consultaCliente()
    }, [])

    useEffect(() => {
        if (!editMode && !botonEliminar && !searchState) {
            setActions([
                {
                    icon: <AddIcon />,
                    name: <Typography>Agregar</Typography>,
                    mode: "add",
                },
                {
                    icon: <EditIcon />,
                    name: <Typography>Editar</Typography>,
                    mode: "edit",
                },
                {
                    icon: <DeleteIcon />,
                    name: <Typography>Eliminar</Typography>,
                    mode: "delete",
                },
                // {
                //     icon: <SearchIcon />,
                //     name: <Typography>Buscar</Typography>,
                //     mode: "search",
                // },
            ]);
        }
        if (botonEliminar || editMode || searchState) {
            setActions([
                {
                    icon: <KeyboardReturnIcon />,
                    name: <Typography>Volver</Typography>,
                    mode: "back",
                },
            ]);
        }
    }, [editMode, botonEliminar, searchState]);


    const handleClickMenu = (idButton) => {
        switch (idButton) {
            case "add":
                setAddState(true);
                openModal()
                break;
            case "edit":
                setEditMode(true);
                break;
            case "delete":
                setBotonEliminar(true);
                break;
            case "back":
                setBotonEliminar(false);
                setEditMode(false);
                setSearchState(false);
                break;
            // case "search":

            // break;
            default:
        }
    };
    return (
        <>
            <Dialog
                open={modalDelete}
                onClose={() => closeModalDelete()}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth={"sm"}
                fullWidth={true}
            >
                <DialogTitle className={classes.tituloModalEliminarMessage}>
                    Eliminar Mensajes
                </DialogTitle>
                <IconButton
                    style={{ position: "absolute", top: "2%", left: "90%" }}
                    onClick={() => closeModalDelete()}
                >
                    <CloseIcon style={{ color: "gray", fontSize: 30 }}></CloseIcon>
                </IconButton>
                <DialogContent dividers>
                    <Grid container justify="center" alignItems="center">
                        <Grid item md={12} sm={12} xs={12} className="text-center mb-3" style={{ textAlign: 'center' }}>
                            <Typography
                                // style={{ color: '#fff' }}
                                align="center"
                                variant="h6"
                            >
                                ?? Esta seguro que desea eliminar el mensaje ?
                            </Typography>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogContent dividers>
                    <Grid container justify="center" alignItems="center">
                        <Grid
                            item
                            md={6}
                            sm={12}
                            xs={12}
                            className="text-center mb-3"
                            style={{ textAlign: "center" }}
                        >
                            <Button
                                style={{ backgroundColor: '#616161' }}
                                variant="contained"
                                startIcon={<CheckIcon />}
                                onClick={() => {
                                    eliminarMensaje(data)
                                    closeModalDelete()
                                }}
                            >
                                Aceptar
                            </Button>
                        </Grid>
                        <Grid
                            item
                            md={6}
                            sm={12}
                            xs={12}
                            className="text-center mb-3"
                            style={{ textAlign: "center" }}
                        >
                            <Button
                                style={{ color: '#616161' }}
                                color="inherit"
                                variant="outlined"
                                startIcon={<CloseIcon />}
                                onClick={() => closeModalDelete()}
                            >
                                Cancelar
                            </Button>
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>


            <Dialog
                open={modal}
                onClose={handleClose}
                maxWidth={"md"}
                fullWidth={true}
            >
                {addState && (
                    <DialogTitle className={classes.tituloModalEliminarMessage}>
                        {" "}
                        Agregar Mensajes{" "}
                    </DialogTitle>
                )}
                {editMode && (
                    <DialogTitle className={classes.tituloModalEliminarMessage}>
                        {" "}
                        Editar Mensajes{" "}
                    </DialogTitle>
                )}
                <IconButton
                    style={{ position: "absolute", top: "2%", left: "90%" }}
                    onClick={handleClose}
                >
                    <CloseIcon
                        style={{ color: "gray", fontSize: 30 }}
                    ></CloseIcon>
                </IconButton>
                <DialogContent dividers>
                    <Grid container style={{ marginTop: "15px" }}>
                        <Grid
                            item
                            md={12}
                            sm={12}
                            xs={12}
                            className="text-center mb-3"
                            style={{ marginTop: "15px" }}
                        >
                            <FormControl
                                size="small"
                                variant="outlined"
                                style={{ width: '100%' }}
                            >
                                <InputLabel id="demo-simple-select-outlined-label">
                                    Cliente
                                </InputLabel>
                                <Select
                                    disabled={editMode}
                                    style={{ width: '100%' }}
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    name="cliente"
                                    value={selectCliente}
                                    onChange={(e) => {
                                        const clientSend = {
                                            idClient: e.target.value
                                        }
                                        setData({
                                            ...data,
                                            client: clientSend
                                        })
                                        setSelectCliente(e.target.value)
                                    }}
                                    label="Cliente"
                                >
                                    <MenuItem value="">
                                        <em> SELECCIONE UN CLIENTE </em>
                                    </MenuItem>
                                    {arregloCliente.map(item => (
                                        <MenuItem key={item.idClient} value={item.idClient}>
                                            <em> {item.name} </em>
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid
                            item
                            md={12}
                            sm={12}
                            xs={12}
                            className="text-center mb-3"
                            style={{ marginTop: "15px" }}
                        >
                            <FormControl
                                size="small"
                                variant="outlined"
                                style={{ width: '100%' }}
                            >
                                <InputLabel id="demo-simple-select-outlined-label">
                                    Bote
                                </InputLabel>
                                <Select
                                    disabled={editMode}
                                    style={{ width: '100%' }}
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    name="category"
                                    value={selectBote}
                                    onChange={(e) => {
                                        const boatSend = {
                                            id: e.target.value
                                        }
                                        setData({
                                            ...data,
                                            boat: boatSend
                                        })
                                        setSelectBote(e.target.value)
                                    }}
                                    label="Bote"
                                >
                                    <MenuItem value="">
                                        <em> SELECCIONE UN BOTE </em>
                                    </MenuItem>
                                    {arregloBoat.map(item => (
                                        <MenuItem key={item.id} value={item.id}>
                                            <em> {item.name} </em>
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid
                            item
                            md={12}
                            sm={12}
                            xs={12}
                            className="text-center mb-3"
                            style={{ marginTop: "15px" }}
                        >
                            <TextField
                                required={true}
                                type="text"
                                name="messageText"
                                variant="outlined"
                                size="small"
                                fullWidth
                                label="Mensaje"
                                placeholder="Ingrese el mensaje"
                                value={data.messageText}
                                onChange={(e) => setData({
                                    ...data,
                                    [e.target.name]: e.target.value
                                })}
                            />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogContent dividers>
                    <Grid container justify="center" alignItems="center">
                        <Grid
                            item
                            md={6}
                            sm={12}
                            xs={12}
                            className="text-center mb-3"
                            style={{ textAlign: "center" }}
                        >
                            <Button
                                style={{ backgroundColor: '#616161' }}
                                variant="contained"
                                startIcon={<CheckIcon />}
                                onClick={() => {
                                    if (editMode) {
                                        console.log(data)
                                        editarMensaje(data)
                                        handleClose()
                                    } else {
                                        a??adirMensaje(data)
                                        handleClose()
                                    }
                                }}
                            >
                                {addState ? "Nuevo Registro" : "Realizar Cambios"}
                            </Button>
                        </Grid>
                        <Grid
                            item
                            md={6}
                            sm={12}
                            xs={12}
                            className="text-center mb-3"
                            style={{ textAlign: "center" }}
                        >
                            <Button
                                style={{ color: '#616161' }}
                                color="inherit"
                                variant="outlined"
                                startIcon={<CloseIcon />}
                                onClick={handleClose}
                            >
                                Cancelar
                            </Button>
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>


            <Grid container component={Paper} style={{ borderRadius: '25px', padding: '20px', }} display="flex" justifyContent="center" alignItems="center">
                <Grid item md={12} xs={12} sm={12} className="text-center" style={{ textAlign: 'center' }}>
                    <Box mt={2} style={{ boxShadow: 'none' }}>
                        <Card className={classes.media} style={{ boxShadow: 'none' }}>
                            <CardHeader
                                className={classes.textCardMessage}
                                title="Mensajes"
                            />
                        </Card>
                    </Box>
                </Grid>
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
                            <AppRegistrationIcon
                                className={classes.logoSpeedDialMessage}
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
                <Grid item md={12} style={{ marginTop: '20px' }} className="text-center">
                    <TableContainer
                        component={Paper}
                        style={{ borderRadius: "20px" }}
                        elevation={5}
                    >
                        <Table className={classes.table} aria-label="customized table">
                            <TableHead>
                                <StyledTableRow>
                                    <StyledTableCell>
                                        <Typography
                                            style={{ color: '#fff' }}
                                            align="center"
                                            variant="body2"
                                        >
                                            Cliente
                                        </Typography>
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        <Typography
                                            style={{ color: '#fff' }}
                                            align="center"
                                            variant="body2"
                                        >
                                            Bote
                                        </Typography>
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        <Typography
                                            style={{ color: '#fff' }}
                                            align="center"
                                            variant="body2"
                                        >
                                            Mensaje
                                        </Typography>
                                    </StyledTableCell>
                                </StyledTableRow>
                            </TableHead>
                            <TableBody>
                                {arreglo
                                    .slice(
                                        page * rowsPerPage,
                                        page * rowsPerPage + rowsPerPage
                                    )
                                    .map((item) => {
                                        return (
                                            <>
                                                <TableRow
                                                    key={item.id}
                                                    onClick={() => {
                                                        if (editMode) {
                                                            const clientSend = {
                                                                idClient: item.client.idClient
                                                            }
                                                            const boatSend = {
                                                                id: item.boat.id
                                                            }
                                                            setData({
                                                                idMessage: item.idMessage,
                                                                messageText: item.messageText,
                                                                client: clientSend,
                                                                boat: boatSend,
                                                            })
                                                            setSelectCliente(item.client.idClient)
                                                            setSelectBote(item.boat.id)
                                                            openModal()
                                                        }
                                                        if (botonEliminar) {
                                                            setData(item)
                                                            openModalDelete()
                                                        }
                                                    }}
                                                >
                                                    <StyledTableCell component="th" scope="row">
                                                        <Typography
                                                            variant="body2"
                                                            align="center"
                                                        >
                                                            {item.client.name}
                                                        </Typography>
                                                    </StyledTableCell>
                                                    <StyledTableCell component="th" scope="row">
                                                        <Typography
                                                            variant="body2"
                                                            align="center"
                                                        >
                                                            {item.boat.name}
                                                        </Typography>
                                                    </StyledTableCell>
                                                    <StyledTableCell component="th" scope="row">
                                                        <Typography
                                                            variant="body2"
                                                            align="center"
                                                        >
                                                            {item.messageText}
                                                        </Typography>
                                                    </StyledTableCell>
                                                </TableRow>
                                            </>
                                        );
                                    })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={arreglo.length}
                        labelRowsPerPage="Columnas por p??gina"
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                    />
                </Grid>
            </Grid>

        </>
    )
}

export default Boats;