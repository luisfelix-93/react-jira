import React from "react";
import { Container } from "react-bootstrap";
import WorklogForm from "./WorklogForm";

function App() {
  return (
    <Container className="mt-3">
      <h1>Registrar Worklog</h1>
      <WorklogForm/>
    </Container>
  );
}

export default App;
