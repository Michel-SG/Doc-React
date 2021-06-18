import React, { Component } from 'react';
import Apple from './Apple';

export default class AppleBasket extends Component {
    constructor(props) {
        super(props);

        this.state = {
            apples: [],
        };
    }

    handleAddApple = () => {
        this.setState((state) => {
            return {
                apples: [
                    ...state.apples,
                    {
                        id:
                            state.apples.reduce(
                                (a, x) => (a > x.id ? a : x.id),
                                0
                            ) + 1,
                    },
                ],
            };
        });
    };

    handleDeleteApple = (id) => {
        this.setState((state) => ({
            apples: state.apples.filter((apple) => apple.id != id),
        }));
    };

    render() {
        const { apples } = this.state;

        return (
            <div>
                <button onClick={this.handleAddApple}>Ajouter une pomme</button>
                <p>Pour supprimer une pomme, veuillez cliquer dessus</p>
                <hr />
                {apples.map((apple) => (
                    <Apple
                        key={apple.id}
                        apple={apple}
                        deleteApple={this.handleDeleteApple}
                    />
                ))}
            </div>
        );
    }
}
