const Content = () => {
  const welcome = 'Hello fellow dancers of disco!';
  const discoName = 'The dirty dancer'
  const dancerName = 'John Travolta'
  const dancer2Name = 'Tony Danza'
  const discoDj = 'The Bee Gees!'
  const handleClick = () => {
    alert('You clicked me!')
  };
  const handleClickAgain = (x) => {
    alert(`Hey there ${x}!`)
  };
  return (  
    <div className="row">
      <div className="col-12">
        <h1>{ welcome }</h1>
      </div>
      <div className="col-12">
        <p><b>Host &amp; Lead Dancer:</b> { dancerName }</p>
      </div>
      <div className="col-12">
        <p><b>Music By:</b> { discoDj }</p>
      </div>
      <div className="col-12">
        <p>
          <button onClick={handleClick} className="btn btn-block btn-primary">Let me dance for you!</button>
        </p>
        <p>
          <button 
            onClick={() => {
              handleClickAgain('tony dungee')
            }} 
            className="btn btn-block btn-secondary"
          >Say my name!</button>
        </p>
      </div>
    </div>
  );
}
 
export default Content;