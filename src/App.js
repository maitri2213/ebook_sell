import { ThemeProvider } from 'styled-components';
import './App.css';
import "./assets/css/style.css";
import { theme } from './utils/theme.Jsx';
import Register from "./Pages/register/index.jsx"

export const App = () =>{
  return(
    <ThemeProvider theme = {theme}>
      <Register />
    </ThemeProvider>
  );
};
export default App;
