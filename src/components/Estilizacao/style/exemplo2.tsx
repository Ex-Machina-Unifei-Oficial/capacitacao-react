export const MeuComponente = () => {
  return (
    <div style={divStyle}>
      <h1 style={h1Style}>Hello, World Style 2!</h1>
    </div>
  );
};

const divStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  backgroundColor: "aliceblue",
};

const h1Style = { fontSize: "36px", color: "#333" };
