import MainLayout from "@layout/MainLayout/MainLayout";
import TestComponent from "@component/Test/TestComponent";

import "./App.scss";

function App() {
  return (
    <MainLayout className={"wrapper"}>
      <TestComponent />
    </MainLayout>
  );
}

export default App;
