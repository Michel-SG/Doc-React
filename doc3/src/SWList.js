import React, { Component } from 'react';

import { connect } from 'react-redux';

function SWList({ people, message, getMorePeople, nextPage }) {
    return (
        <div>
            <p>Infos : {message}</p>
            <ul>
                {people.map(p => (
                    <li key={p.name}>{p.name}</li>
                ))}
            </ul>
            <button
                onClick={() => getMorePeople(nextPage)}
                disabled={nextPage === null}
            >
                Get more people...
            </button>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        people: state.people,
        message: state.message,
        nextPage: state.nextPage,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getMorePeople: page => dispatch({ type: 'SW_FETCH_REQUESTED', page }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SWList);
