"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth0Provider = exports.useAuth0 = exports.Auth0Context = void 0;
const react_1 = require("react");
const auth0_spa_js_1 = require("@auth0/auth0-spa-js");
const auth0_spa_js_2 = require("@auth0/auth0-spa-js");
exports.Auth0Context = react_1.createContext(null);
exports.useAuth0 = () => react_1.useContext(exports.Auth0Context);
class Auth0Provider extends react_1.Component {
    constructor(props) {
        super(props);
        this.config = {
            domain: `${process.env.REACT_APP_AUTH0_DOMAIN}`,
            client_id: `${process.env.REACT_APP_AUTH0_CLIENT_ID}`,
            redirect_uri: window.location.origin
        };
        this.initializeAuth0 = async () => {
            const auth0Client = await auth0_spa_js_1.default(this.config);
            this.setState({ auth0Client });
            if (window.location.search.includes('code=')) {
                return this.handleRedirectCallback();
            }
            const isAuthenticated = await auth0Client.isAuthenticated();
            const user = isAuthenticated ? await auth0Client.getUser() : null;
            this.setState({ isLoading: false, isAuthenticated, user });
        };
        this.handleRedirectCallback = async () => {
            this.setState({ isLoading: true });
            await this.state.auth0Client.handleRedirectCallback();
            const user = await this.state.auth0Client.getUser();
            this.setState({ user, isAuthenticated: true, isLoading: false });
            window.history.replaceState({}, document.title, window.location.pathname);
        };
        this.state = {
            isLoading: true,
            isAuthenticated: false,
            user: null,
            auth0Client: auth0_spa_js_2.default,
        };
    }
    componentDidMount() {
        this.initializeAuth0();
    }
    render() {
        const { auth0Client, isLoading, isAuthenticated, user } = this.state;
        const { children } = this.props;
        const configObject = {
            isLoading,
            isAuthenticated,
            user,
            loginWithRedirect: (...p) => auth0Client.loginWithRedirect(...p),
            getTokenSilently: (...p) => auth0Client.getTokenSilently(...p),
            getIdTokenClaims: (...p) => auth0Client.getIdTokenClaims(...p),
            logout: (...p) => auth0Client.logout(...p)
        };
        return <exports.Auth0Context.Provider value={configObject}>{children}</exports.Auth0Context.Provider>;
    }
}
exports.Auth0Provider = Auth0Provider;
//# sourceMappingURL=auth0-context.js.map