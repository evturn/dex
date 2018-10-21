import { createStackNavigator } from 'react-navigation';
import HomeScreen from './screens/Home';
import CreateScreen from './screens/Create';
import SearchScreen from './screens/Search';

export default createStackNavigator({
  Main: HomeScreen,
  Create: CreateScreen,
  Search: SearchScreen,
});
