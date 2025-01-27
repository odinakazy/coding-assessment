import Navbar from "./component/Navbar";
import Sidebar from "./component/Sidebar";
import MainContent from "./component/MainContent";
function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F0F2F5]">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
