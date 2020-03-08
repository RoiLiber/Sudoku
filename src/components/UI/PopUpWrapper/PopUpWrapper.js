import React from 'react';
import { Zoom } from 'react-reveal';
import './style.scss';

export default function PopUpWrapper(props) {
    const { title, children } = props;

    return (
        <div className={'popup_wrapper'}>
            <Zoom>
                <div className={'popup'}>
                    <span className={'title'}>{title}</span>
                    {children}
                </div>
            </Zoom>
        </div>
    )
}
