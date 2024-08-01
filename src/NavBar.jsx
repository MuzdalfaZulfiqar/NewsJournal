import React from 'react'
import { Link } from 'react-router-dom';

 function NavBar() {
    // Make a navBar and within this you have to specify the 
    // links being imported as above and here
    // we will give the links same as tha path we ave in
    // route yeah thats it
  return (
    <div>
      <nav className='navBar'>
        <div className='news-web-titles'>News Journal</div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="business">Business</Link>
        </li>
        <li>
          <Link to="enter">Entertainment</Link>
        </li>
        <li>
          <Link to="sports">Sports</Link>
        </li>
      </ul>
    </nav>
    </div>
  )
}

export default NavBar
