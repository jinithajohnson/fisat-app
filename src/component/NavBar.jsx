import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>

<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Fisat-app</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Add Student</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/search">Search Student</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/view">View All</Link >
        </li>
        
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default NavBar