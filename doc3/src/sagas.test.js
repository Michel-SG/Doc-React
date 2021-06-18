import { call, delay } from 'redux-saga/effects';
import { fetchSW } from './sagas';

import { fetchSW as fetchSWAPI } from './sw-api';

describe('A fetchSW call on page 1', () => {
    let gen = null;

    beforeEach(() => {
        gen = fetchSW({ page: 1 });
    });

    afterEach(() => {
        gen = null;
    });

    test('... should delay 2sc', () => {
        expect(gen.next().value).toEqual(delay(2000));
    });

    test('... should fetch SWAPI with page 1', () => {
        gen.next();
        expect(gen.next().value).toEqual(call(fetchSWAPI, 1));
    });

    test('... should dispatch an SW_FETCH_SUCCEEDED action', () => {
        gen.next();
        gen.next();
        const {
            payload: {
                action: { type },
            },
        } = gen.next().value;
        expect(type).toEqual('SW_FETCH_SUCCEEDED');
    });
});
