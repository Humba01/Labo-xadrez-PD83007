let appRoot = document.getElementById('appRoot');

const Application = () => {
  return (
    <div className="app-structure">
      <Cabecalho />
      {/* <Conteiner />
      <Grafos /> */}
    </div>
  )
}

ReactDOM.render(<Application />, appRoot);
