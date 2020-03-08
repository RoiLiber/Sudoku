import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { compose } from 'redux'
import { Link, withRouter } from 'react-router-dom';
import { ROUTES } from '../../consts';
import './style.scss';

function Header() {
    const [selected, setSelected] = useState('HOME');

    function setSelectedButton(pageName) {
        setSelected(pageName)
    }

    return (
        <div className={'header'}>
            <div>
                <span>Sudoku App</span>
            </div>
            <div className={'nav'}>
                <Link to={ROUTES.home} className={'nav_link'}>
                    <Button className={selected === 'HOME' ? 'selected' : ''}
                            variant="text"
                            onClick={() => setSelectedButton('HOME')}
                    >Home</Button>
                </Link>
                <Link to={ROUTES.scorePage} className={'nav_link'}>
                    <Button className={selected === 'SCORE' ? 'selected' : ''}
                            variant="text"
                            onClick={() => setSelectedButton('SCORE')}
                    >Score Page</Button>
                </Link>
            </div>
        </div>
    )
}

export default compose(withRouter)(Header)
