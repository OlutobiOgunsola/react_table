import React from "react";
import { UserFixtures, PostFixtures, AlbumFixtures } from "./fakeData";

import "./index.css";
import Table from "./components/table.component";

function App() {
    return (
        <div className="app_container pt-10">
            <Table tableName="My Table" data={UserFixtures} config={
                {
                    rowsPerPageOptions: [1, 2, 3],
                    style: {
                        width: "1000px",
                        height: '600px',
                        margin: "0 auto",
                        bandColor: '#DEE9FF'
                    }
                }
            } />
        </div>
    );
}

export default App;
