const Navbar = () => {
  return ( 
    <div className="row">
      <div className="col-12">
        <h1>The Dojo Blog</h1>
        <ul className="list-group list-group-horizontal">
          <li className="list-group-item">
            <a href="/">Home</a>
          </li>
          <li className="list-group-item">
            <a href="/create">New Blog</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
 
export default Navbar;