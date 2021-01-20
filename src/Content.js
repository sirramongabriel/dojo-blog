import { useState } from 'react';

const Content = () => {
  const [name, setName] = useState('Tony Danza');
  const [age, setAge] = useState(42);

  const welcome = 'Hello fellow dancers of disco!';
  const discoName = 'The dirty dancer'
  const dancerName = 'John Travolta'
  const dancer2Name = 'Tony Danza'
  const discoDj = 'The Bee Gees!'
  const handleClick = () => {
    setName('Fast Eddy McClintock');
    setAge(57);
  };
  const handleClickAgain = (name) => {
    alert(`Hey there ${name}!`)
  };
  return (  
    <div className="row">
      <div className="col-12">
        <h1>{ welcome }</h1>
      </div>
      <div className="col-12">
        <p><b>Name:</b> { name }</p>
        <p><b>Age:</b> { age }</p>
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
              handleClickAgain('Johnny Bravo')
            }} 
            className="btn btn-block btn-secondary"
          >Say my name!</button>
        </p>
      </div>
    </div>
  );
}
 
export default Content;