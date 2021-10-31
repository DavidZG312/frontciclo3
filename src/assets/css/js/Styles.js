const { makeStyles } = require('@mui/styles');

const useStyles = makeStyles(() => ({
	textCard: {
		color: '#fff',
		background:
			'#2196f3',
		border: '1px solid rgb(6, 31, 69)',
		borderRadius: 30,
		fontSize: '28px',
		// color: '#FFF',
		textAlign: 'center',
        borderColor:'#fff'
	},
    SpeedDial: {
        fontFamily: 'Ubuntu',
        color: '#2196f3',
        fontSize: '25px',
        fontWeight: 350,
    },
    logoSpeedDial: {
        // position: 'absolute',
        // left: 10,
        color: '#2196f3',
        fontSize: '40px',
    },
    media: {
		borderRadius: 30,
	},
	paper: {
        // padding: 16,
        minHeight: '500px',
        margin: "auto",
        marginBottom: 15,
        textAlign: "center",
        borderRadius: 30,
        border: "1px solid #e1e1e1",
        "& label.Mui-focused": {
            color: "rgb(6, 31, 69)",
        },
        "& .MuiInput-underline:after": {
            borderBottomColor: "rgb(6, 31, 69)",
        },
        "& .MuiOutlinedInput-root": {
            "&:hover fieldset": {
                borderColor: "rgb(6, 31, 69)",
            },
            "&.Mui-focused fieldset": {
                borderColor: "rgb(6, 31, 69)",
            },
        },
    },
    table: {
        minWidth: 700,
    },
    tituloModalEliminarCategoria: {
        fontFamily: 'Ubuntu',
        color: '#e91e63',
        textAlign: 'center'
    },
    textCardCategoria: {
		color: '#fff',
		background:
			'#e91e63',
		border: '1px solid rgb(6, 31, 69)',
		borderRadius: 30,
		fontSize: '28px',
		// color: '#FFF',
		textAlign: 'center',
        borderColor:'#fff'
	},
    logoSpeedDialCategoria: {
        // position: 'absolute',
        // left: 10,
        color: '#e91e63',
        fontSize: '40px',
    },

    tituloModalEliminarBote: {
        fontFamily: 'Ubuntu',
        color: '#ff9800',
        textAlign: 'center'
    },
    textCardBote: {
        color: '#fff',
        background:
            '#ff9800',
        border: '1px solid rgb(6, 31, 69)',
        borderRadius: 30,
        fontSize: '28px',
        // color: '#FFF',
        textAlign: 'center',
        borderColor: '#fff'
    },
    logoSpeedDialBote: {
        // position: 'absolute',
        // left: 10,
        color: '#ff9800',
        fontSize: '40px',
    },

    tituloModalEliminarClient: {
        fontFamily: 'Ubuntu',
        color: '#009688',
        textAlign: 'center'
    },
    textCardClient: {
        color: '#fff',
        background:
            '#009688',
        border: '1px solid rgb(6, 31, 69)',
        borderRadius: 30,
        fontSize: '28px',
        // color: '#FFF',
        textAlign: 'center',
        borderColor: '#fff'
    },
    logoSpeedDialClient: {
        // position: 'absolute',
        // left: 10,
        color: '#009688',
        fontSize: '40px',
    },

    tituloModalEliminarMessage: {
        fontFamily: 'Ubuntu',
        color: '#616161',
        textAlign: 'center'
    },
    textCardMessage: {
        color: '#fff',
        background:
            '#616161',
        border: '1px solid rgb(6, 31, 69)',
        borderRadius: 30,
        fontSize: '28px',
        // color: '#FFF',
        textAlign: 'center',
        borderColor: '#fff'
    },
    logoSpeedDialMessage: {
        // position: 'absolute',
        // left: 10,
        color: '#616161',
        fontSize: '40px',
    },

    tituloModalEliminarReservation: {
        fontFamily: 'Ubuntu',
        color: '#9c27b0',
        textAlign: 'center'
    },
    textCardReservation: {
        color: '#fff',
        background:
            '#9c27b0',
        border: '1px solid rgb(6, 31, 69)',
        borderRadius: 30,
        fontSize: '28px',
        // color: '#FFF',
        textAlign: 'center',
        borderColor: '#fff'
    },
    logoSpeedDialReservation: {
        // position: 'absolute',
        // left: 10,
        color: '#9c27b0',
        fontSize: '40px',
    },
}));

export default useStyles;