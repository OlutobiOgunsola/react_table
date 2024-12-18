import React from "react";

import "./index.css";
import Table from "./components/table.component";

import { AlbumFixtures, PostFixtures, UserFixtures } from './fakeData';

function App() {
    return (
        <div className="app_container pt-10">
            <Table tableName="Configurable React Table" data={AlbumFixtures} config={
                {
                    // rowsPerPageOptions: [10, 20, 50],
                    // style: {
                    //     width: "1000px",
                    //     height: '600px',
                    //     margin: "0 auto",
                    //     bandColor: '#DEE9FF',
                    //     fontFamily: 'Inter',
                    //     fontSize: '14px'
                    // }
                }
            } />
        </div>
    );
}

export default App;
