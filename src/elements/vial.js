import { Div } from '@vkontakte/vkui';
import './vial.css';
import React, { useState } from 'react';

// Define a function to change the array of classes
export const changeEmotionClasses = (currentClasses, index, newClass) => {
    const newClasses = [...currentClasses];
    newClasses[index] = `emotion ${newClass}`;
    return newClasses;
};

export function Vial({ emotionClasses }) {
    const [number, setNumber] = useState(0);
    const [classes, setClasses] = useState(emotionClasses || ["emotion", "emotion", "emotion"]);

    const handleEmotionChange = (type) => {
        const updatedClasses = changeEmotionClasses(classes, number, type);
        setClasses(updatedClasses);
    };

    return (
        <div>
            <div className='vial_container'>
                <div className='emotions'>
                    {classes.map((emotionClass, index) => (
                        <div key={index} className={emotionClass}></div>
                    ))}
                </div>
            </div>
            <button onClick={() => setClasses(changeEmotionClasses(classes, 1, 'bad'))}>
                Test button — Change emotion
            </button>
        </div>
    );
}

export default Vial;
