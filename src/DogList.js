import React, { Component } from 'react';
import './DogList.css';
import {Link} from 'react-router-dom';


class DogList extends Component {
  render(){
    return(
      <div className='DogList mt-5'>
        {/* <h1 className='display-1 text-center'>Dog List</h1> */}
        <div className='row'>
          {this.props.dogs.map(thisDog => (
            <div className='Dog col-lg-4 text-center' key={thisDog.name}>
              <img src={thisDog.src} alt={thisDog.name}/>
              <h3>
                <Link className='underline' to={`/dogs/${thisDog.name}`}>{thisDog.name}</Link>
              </h3>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default DogList