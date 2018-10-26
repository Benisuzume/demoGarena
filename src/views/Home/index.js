import { createMaterialTopTabNavigator } from "react-navigation";
//Component
import NewsComponent from "./NewsComponent";
import ForumComponent from "./ForumComponent";
import HotsComponent from "./HotsComponent";
//Screen names
import { News, Forum, Hots } from "./screenNames";

let routeConfigs = {
    News: {
        screen: NewsComponent,
    },
    Forum: {
        screen: ForumComponent,
    },
    Hots: {
        screen: HotsComponent,
    },
};
let tabNavigatorConfig = {
    animationEnabled: true,
    swipeEnabled: true,
    showIcon: false,
    upperCaseLabel: false, //duong ke cho tab khi acitve
    tabBarOptions: {
        activeTintColor: 'red',
        inactiveTintColor: 'black',
        indicatorStyle: {
            height: 2,
            backgroundColor: 'red',
        },
        style: {
            backgroundColor: 'white',
            elevation: 0,
            height: 50
        },
        labelStyle: {
            fontSize: 15,
            alignSelf: 'center',
            fontWeight: 'bold',
            textAlign: 'center'
        },
        //style cho mỗi tab 
        tabStyle: {
            flex: 1,
            flexDirection: 'row'
        },
    }
};

export default HomeView = createMaterialTopTabNavigator(routeConfigs, tabNavigatorConfig);