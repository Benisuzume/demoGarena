import { createMaterialTopTabNavigator } from "react-navigation";
//Component
import CalendarComponent from "./CalendarComponent";
import TeamComponent from "./TeamComponent";
//Screen Names
import { Calendar, Team } from "./screenNames";

let routeConfigs = {
    Calendar: {
        screen: CalendarComponent,
    },
    Team: {
        screen: TeamComponent,
    },
};
let tabNavigatorConfig = {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarOptions: {
        activeTintColor: 'red',
        inactiveTintColor: 'black',
        showIcon: false,
        upperCaseLabel: false,
        indicatorStyle: {
            height: 2,
            backgroundColor: 'red'
        },
        style: {
            backgroundColor: 'white',
            elevation: 0,
            height: 50,
            borderBottomWidth: 1,
            borderColor: '#F5F5F5'
        },
        labelStyle: {
            fontSize: 15,
            alignSelf: 'center',
            textAlign: 'center',
            fontWeight: 'bold'
        },
        tabStyle: {
            flex: 1
        },
    }
};

export default LM247View = createMaterialTopTabNavigator(routeConfigs, tabNavigatorConfig)