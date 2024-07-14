import React from "react";
const Shell = React.lazy(() => import('mesto/App'));

function App() {
    return (
        <React.Suspense fallback={<div>Загрузка ... </div>}>
            <Shell />
        </React.Suspense>
    );
}


export default App;
