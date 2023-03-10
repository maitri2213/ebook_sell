import { ThemeProvider } from '@mui/material';
import './App.css';
import "./assets/css/style.css";
import { theme } from './utils/theme.jsx';
import  {  Register }from './pages/register/index';

export const App = () =>{
  return(
    <ThemeProvider theme = {theme}>
      <Register />
    </ThemeProvider>
  );
};
export default App;
