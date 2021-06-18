import React, { Component } from 'react';

import React from 'react';

export default function Apple(props) {
    const { apple, deleteApple } = props;
    return (
        <div>
            <img
                src="./pomme.png"
                title={`Pomme n°${apple.id}`}
                onClick={() => deleteApple(apple.id)}
            />
        </div>
    );
}
