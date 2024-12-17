import React, { useEffect, useState } from "react";
import { CompileHeadersFromData } from "./lib/utils";
import { UserFixtures, PostFixtures, AlbumFixtures } from "./fakeData";

import "./index.css";
import useSort from "./hooks/useSort";
import Table from "./components/table.component";

function App() {
    const [isLoadingTable, setIsLoadingTable] = useState(false);
    return (
        <div className="app_container pt-10">
            <Table tableName="My Table" data={UserFixtures} />
        </div>
    );
}

export default App;
