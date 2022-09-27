import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import App from './App';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

const ini_state = { test: "this is a test" }

describe("App tests", function () {
    let testStore;
    let component;

    beforeEach(() => {
        testStore = mockStore(ini_state);

        component = renderer.create(
            <Provider store={testStore}>
                <App />
            </Provider>
        );
    });

    it("matches snapshot", function () {
        expect(component.toJSON()).toMatchSnapshot();
    });
});