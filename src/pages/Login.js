function Login() {
  return (
    <div style={{ padding: "40px 20px", maxWidth: "400px", margin: "0 auto", textAlign: "center" }}>
      <h2>Welcome Back!</h2>
      <p style={{ color: "gray", marginBottom: "20px" }}>Please log in to your account.</p>
      
      <form style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <input type="email" placeholder="Email Address" style={{ padding: "12px", borderRadius: "5px", border: "1px solid #ccc" }} />
        <input type="password" placeholder="Password" style={{ padding: "12px", borderRadius: "5px", border: "1px solid #ccc" }} />
        <button type="button" style={{ padding: "12px", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", fontWeight: "bold" }}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;