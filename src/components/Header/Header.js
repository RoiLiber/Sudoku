import React from 'react';
import { Button } from '@material-ui/core';
import { useDispatch } from "react-redux";
import { compose } from 'redux'
import { Link, withRouter } from 'react-router-dom';
import { ROUTES } from '../../consts';
import './style.scss';

function Header(props) {
    const dispatch = useDispatch();

    return (
        <div className={'header'}>
            <div>
                <span>Sudoku App</span>
            </div>
            <div className={'nav'}>
                <Link to={ROUTES.home} className={'nav_link'}>
                    <Button
                        className={'selected'}
                        variant="text"
                        onClick={() => {}}
                    >
                        Home
                    </Button>
                </Link>
                <Link to={ROUTES.scorePage} className={'nav_link'}>
                    <Button
                        className={'selected'}
                        variant="text"
                        onClick={() => {}}
                    >
                        Score Page
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default compose(withRouter)(Header)
