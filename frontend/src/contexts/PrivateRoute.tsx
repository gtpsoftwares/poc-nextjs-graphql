import * as React from 'react';
import {
    Route, 
    Redirect,
    RouteProps,
    RouteComponentProps
} from "react-router-dom";

interface PrivateRouteProps extends RouteProps {
    isAuthenticated: boolean;
  // Would reccommend this comes from a global state manager
  // such as redux, shown using basic props here
}

export default class PrivateRoute extends Route<PrivateRouteProps> {
    render() {
        return (
            <Route render={(props: RouteComponentProps) => {
                if(!this.props.isAuthenticated) {
                    return <Redirect to='/' />
                } 

                if(this.props.component) {
                    return React.createElement(this.props.component);
                } 

                if(this.props.render) {
                    return this.props.render(props);
                }
            }} />
        );
    }
}