import { createStackNavigator, createAppContainer, createSwitchNavigator} from 'react-navigation';
import Login from './pages/login';
import dashboardAdmin from './pages/dashboardAdmin';
import dashboardMedico from './pages/dashboardMedico';
import dashboardPaciente from './pages/dashboardPaciente';

const AuthStack = createStackNavigator({ Login });

export default createAppContainer(
    createSwitchNavigator(
        {
            AuthStack,
            dashboardAdmin,
            dashboardMedico,
            dashboardPaciente
        },
        {
            initialRouteName: "AuthStack"
        }
    )
);