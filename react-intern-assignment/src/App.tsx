import Breadcrumbs from "./components/Breadcrumbs";
import Toolbar from "./components/Toolbar";
// import TabHeader from "./components/TabHeader";
import SpreadsheetTable from "./components/SpreadsheetTable"
import ActionsPanel from "./components/ActionPanel";
import UserBar from "./components/UserBar";
import TabHeaderRow from "./components/TabHeaderRow";
function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 font-sans">
      {/* Top: Breadcrumbs + User Profile Bar */}
      <div className="flex justify-between items-start mb-4">
        <Breadcrumbs />

        <UserBar />
      </div>
      <div className="h-px bg-gray-200 mb-4 mt-0" />
      {/* Toolbar */}
       <div className="flex justify-between items-start mb-4">
      <Toolbar />
      <ActionsPanel />
      </div>

      
<SpreadsheetTable />

      {/* Bottom Right Action Panel */}
      {/* <div className="mt-4 flex justify-end">
        <ActionsPanel />
      </div> */}
    </div>
  );
}

export default App;
