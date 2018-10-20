import { createStackNavigator } from 'react-navigation';
import HomeScreen from './screens/Home';
import CreateScreen from './screens/Create';

export default createStackNavigator({
  Main: HomeScreen,
  Create: CreateScreen,
});
