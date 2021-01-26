import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

export function Button() {
  return (
    <Link to='Bladeren'>
      <button className='btn'>Bladeren</button>
    </Link>
  );
}