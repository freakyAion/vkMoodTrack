import { Div } from '@vkontakte/vkui';
import './vial.css';
import React, { useState } from 'react';

export function Vial({ emotions }){
    const [number, setNumber] = useState(0);
    const [classes, setClasses] = useState(["emotion", "emotion", "emotion"]);

    const changeEmotion = (type) => {
        const newClasses = [...classes];
        newClasses[number] = `emotion ${type}`;
        setClasses(newClasses);
    };

    return (
        <div>
            <div className='vial_container'>
                <div className='emotions'>
                    {emotions?.map((emotion, index) => (
                        <div key={index} className={classes[index]}></div>
                    ))}
                </div>
            </div>
            <button onClick={() => changeEmotion('good')}>
                Test button — Change emotion
            </button>
            <button onClick={() => setNumber(0)}>
                Reset number
            </button>
        </div>
    );
}

export default Vial;    