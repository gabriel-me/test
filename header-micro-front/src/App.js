import React from "react";
import { Link, BrowserRouter } from 'react-router-dom'
import { getStyles } from '@flash/utils'

export default ({ name = '' }) => {
    return <BrowserRouter>
        <nav style={styles.nav}>
            <h1>Menu({name})</h1>
            <ul>
                <li><Link to='/users'>Users</Link></li>
                <li><Link to='/projects'>Projects</Link></li>
            </ul>
        </nav>
    </BrowserRouter>
}

const styles = {
    nav: {
        position: 'absolute',
        top: 0,
        left: 0,
        minHeight: '100px',
        width: '100%',
        backgroundColor: 'green',
    }
}