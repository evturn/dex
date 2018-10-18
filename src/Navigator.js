import { createStackNavigator } from 'react-navigation';
import Home from './screens/Home';
import Create from './screens/Create';

export default createStackNavigator({
  Main: Home,
  Create: Create,
});
