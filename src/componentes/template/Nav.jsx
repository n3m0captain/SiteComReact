import './Nav.css'
import React from 'react'
import {Link} from 'react-router-dom'

export default props =>
<aside className="menu-area">
    
<nav className="menu">
    <Link to="/">
        <i className="fa fa-home"></i> Início
    </Link>
    <Link to="/github">
    <i class="fa fa-github" aria-hidden="true"></i> GitHub
    </Link>
    <Link to="/habilidades">
    <i class="fa fa-hand-spock-o" aria-hidden="true"></i> Habilidades
    </Link>
    <Link to="/graduacao">
    <i class="fa fa-graduation-cap" aria-hidden="true"></i> Graduação
    </Link>
</nav>

</aside>