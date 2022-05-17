import React from 'react';
import { screen, render, cleanup } from '@testing-library/react';
import Welcome from '../components/Welcome';

describe('Welcome component', () => {
    beforeAll(() => {
        render( < Welcome / > );
    });

    it('should have the right message in the dom', () => {
        const message = 'Welcome to Barefoot nomard';

        expect(screen.getByText(message)).toBeInTheDocument();
    });

    afterAll(cleanup);
});