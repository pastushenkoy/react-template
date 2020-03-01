import * as React from 'react'
import {
	Paper,
	makeStyles,
	createStyles,
	Theme,
	Typography,
	Grid,
	useTheme,
	useMediaQuery,
	TextField,
} from '@material-ui/core'
import { DatePicker } from '@material-ui/pickers'
import { useState } from 'react'

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		paper: {
			margin: theme.spacing(3),
			padding: theme.spacing(1),
		},
	}),
)

export const InnerComponent = () => {
	const classes = useStyles()
	const theme = useTheme()
	const isSmallScreen = useMediaQuery(theme.breakpoints.down('xs'))

	const [selectedDate, handleDateChange] = useState(new Date())

	if (isSmallScreen) {
		return <div>Слишком маленький экран!</div>
	}
	return (
		<Paper className={classes.paper} variant="elevation">
			<Grid container direction="row" justify="flex-start">
				<Grid container item direction="column" sm={6} xs={12}>
					<Typography variant="h1">Заявление</Typography>
					<Typography variant="body1">Я, </Typography>
					<TextField label="ФИО"></TextField>
					<Typography variant="body1">, хочу больше денег!!!11Адин</Typography>
				</Grid>
				<Grid container item direction="column" sm={6} xs={12}>
					<Typography variant="h1">Zayavlenie</Typography>
					<Typography variant="body1">Я, Юрий Павлович Пастушенко, хочу больше денег!!!11Адин</Typography>
					<DatePicker value={selectedDate} onChange={handleDateChange} />
				</Grid>
			</Grid>
		</Paper>
	)
}
