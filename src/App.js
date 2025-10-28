import { useEffect, useState } from "react";
function App() {
 const [message, setMessage] = useState("Loading...");
 useEffect(() => {
 fetch("hhttps://test-mern-render-backend-wouf.onrender.com/api/hello")
 .then((res) => {
 if (!res.ok) throw new Error("Network response was not ok");
 return res.json();
 })
 .then((data) => setMessage(data.message))
 .catch((err) => setMessage("Error: " + err.message));
 }, []);
 return (
 <div style={{ textAlign: "center", marginTop: "50px" }}>
 <h1>{message}</h1>
 </div>
 );
}
export default App;