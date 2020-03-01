import * as React from 'react'
import { CssBaseline, ThemeProvider } from '@material-ui/core'
import { theme } from '../Theme/theme'
import { InnerComponent } from '../InnerComponent/InnerComponent'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import { ru } from 'date-fns/locale'

export const App = () => {
	return (
		<CssBaseline>
			<ThemeProvider theme={theme}>
				<MuiPickersUtilsProvider utils={DateFnsUtils} locale={ru}>
					<InnerComponent />
				</MuiPickersUtilsProvider>
			</ThemeProvider>
		</CssBaseline>
	)
}
