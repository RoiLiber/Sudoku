import React from 'react';
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { Zoom } from 'react-reveal';
import { setNewGameRequest, newGamePopUp } from "../../actions/mainActions";
import './style.scss';

export default function PopUp(props) {
    const { title } = props;
    const dispatch = useDispatch();

    function setLevel(level) {
        dispatch(setNewGameRequest(level));
    }

    return (
        <div className={'popup_wrapper'}>
            <Zoom>
                <div className={'popup'}>
                    <span>{title}</span>
                    <i className="far fa-times-circle"
                       onClick={() => dispatch(newGamePopUp(false))}
                    />
                    <Button
                        className={'selected'}
                        variant="text"
                        onClick={() => setLevel(1)}
                    >
                        Easy
                    </Button>
                    <Button
                        className={'selected'}
                        variant="text"
                        onClick={() => setLevel(2)}
                    >
                        Normal
                    </Button>
                    <Button
                        className={'selected'}
                        variant="text"
                        onClick={() => setLevel(3)}
                    >
                        Hard
                    </Button>
                </div>
            </Zoom>
        </div>
    )
}
