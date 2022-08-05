import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';
import { useEffect } from 'react';

import { publicRoutes } from '~/routes';
import { DefaultLayout } from '~/components/layout';
function App() {
    useEffect(() => {
        const btnElement = document.querySelector('.Header_search-btn__sX7B-');
        const inputElement = document.getElementById('input');
        const inputParentElement = document.querySelector('.Header_search__TlIMR');
        console.log(inputElement);
        btnElement.addEventListener('click', () => {
            inputParentElement.style.border = 'none';
        });

        inputElement.addEventListener('keydown', () => {
            inputParentElement.style.border = '1.5px solid rgba(22, 24, 35, 0.2)';
        });
    }, []);
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;

                        let Layout = DefaultLayout;
                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            ></Route>
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
