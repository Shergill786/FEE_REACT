import "./Sign.css";

function Sign() {

  function showLogin() {
    document.getElementById("loginForm").style.display = "block";
  }

  function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "Ram" && password === "Ram123") {
      document.getElementById("message").innerHTML = "Welcome Ram!";
    } else {
      document.getElementById("message").innerHTML =
        "Invalid Credentials!!";
    }
  }

  return (
    <div className="sign-container">


      <button className="sign-btn" onClick={showLogin}>
        SignIn
      </button>

      <div
        id="loginForm"
        className="login-form"
        style={{ display: "none" }}
      >

        <h2>SignIn</h2>

        <div>
          <label>Enter Username:</label>

          <input
            type="text"
            id="username"
          />
        </div>

        <div>
          <label>Enter Password:</label>

          <input
            type="password"
            id="password"
          />
        </div>

        <button onClick={login}>
          Login
        </button>

        <h2 id="message"></h2>

      </div>

    </div>
  );
}

export default Sign;