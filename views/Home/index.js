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
    // tabBarPosition: 'top',
    animationEnabled: true,
    swipeEnabled: true,
    // tabBarOptions: {
    //     showIcon: false,
    //     activeTintColor: 'red',
    //     style: {
    //         width: '100%',
    //         backgroundColor: 'white',
    //         height: 42,
    //         marginTop: -15,
    //         paddingTop: -50,
    //     },
    //     indicatorStyle: {
    //         height: 2,
    //         backgroundColor: 'red',
    //     },
    //     labelStyle: {
    //         fontSize: 14,
    //         // color: 'black',
    //         paddingTop: -30,
    //         alignSelf: 'center',
    //         fontWeight: 'bold'
    //     },
    // },
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
        },
        // showIcon: true,
        upperCaseLabel: false, //duong ke cho tab khi acitve
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