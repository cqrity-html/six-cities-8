import Main from '../main/main';
//import MainEmpty from '../main-empty/main-empty';

//import Favorites from '../favorites/favorites';
//import FavoritesEmpty from '../favorites-empty/favorites-empty';

//import Property from '../property/property';
//import PropertyNotLogged from '../property-not-logged/property-not-logged';

//import LogIn from '../login/login';

type AppProps = {
  placesCount: number
};

function App({placesCount}: AppProps): JSX.Element {
  return <Main placesCount={312}/>;
}

export default App;
