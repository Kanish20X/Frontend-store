import "./Header.css"
function Header() {
  return (
    <div className="App-Header">
      <h1>My Application</h1>
      <ol >
        <li>Home</li>
        <li>Cart</li>
        <li>Orders</li>
        <li>Login</li>
        <li>Logout</li>
      </ol>
    </div>
  );
}
export default Header;