import React from 'react';
import "./AnimalList.css"
import Button from 'simple-react-button';
import withAuth from '@okta/okta-react/dist/withAuth';


export default withAuth(
    class AnimalList extends React.Component {
        constructor(props) {
            super(props);
            this.state = { authenticated: null };
            this.checkAuthentication = this.checkAuthentication.bind(this);
            this.checkAuthentication();
        }

        async checkAuthentication() {
            const authenticated = await this.props.auth.isAuthenticated();
            if (authenticated !== this.state.authenticated) {
                this.setState({ authenticated });
            }
        }

        componentDidUpdate() {
            this.checkAuthentication();
        }

        render() {
            const favouriteButton = this.state.authenticated ? (
                <div>
                    <button>
                        Favourite this animal
                    </button>
                </div>
            ) : (
                    <div></div>
                )
            // const onTestClick = useCallback((event) => {
            //     return fetch().then(doSomething);
            //   }, []);
            return (
                <div class="bg" >
                    <div class="list">
                        {this.props.animals.map(animal => {
                            console.log(animal)
                            return (
                                <div>
                                    <div>
                                        <h1>Common Name: {animal.primaryCommonName}</h1>
                                        <h1>Scientific Name: {animal.scientificName}</h1>
                                        <h2>IUCN Status: {animal.iucn}</h2>
                                        <h3>Order: {animal.order}</h3>
                                        <h3>Family: {animal.family}</h3>
                                        <h3>Genus: {animal.genus}</h3>
                                        <p>Barriers: {animal.barriers}</p>
                                        <p>Justification: {animal.justification}</p>
                                    </div>
                                    {favouriteButton}
                                </div>
                            )
                        })}
                        <a class="fav-link" href="/favorites">See My Favorite Animals</a>
                    </div>
                </div>
            )
        }
    })
