import React, { Component } from 'react';
import DB_Table from './pages/data/DatabaseTable';
import Navbar from './components/navigation/NavBar';
import {Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import LineChart from "./pages/data/LineChart";
function App() {
    return (
        <React.Fragment>
            <Navbar />
            {/*
                Body of the document
            */}
            <div className="container-fluid">
                <Container className="overflow-auto mt-5 shadow-sm bg-white p-5 rounded">
                    <DB_Table />
                </Container>
            </div>
        </React.Fragment>
    );
}

export default App;