import React from 'react';
import s from './formControl.module.css'

export let FormControls = ({input, meta, ...props}) => {
    let hasError = meta.touched && meta.error
    return (
        <>
            {
                props.typefield === 'textarea' ? < textarea {...input} {...props}></textarea>
                    : props.typefield === 'input' ? < input {...input} {...props}></input>
                        : ''
            }
            <div><span className={s.error}>{hasError ? meta.error : ''}</span></div>

        </>
    )
}

export let Input = ({input, meta, ...props}) => {
    let hasError = meta.touched && meta.error
    return (
        <div>
            <input  {...input} {...props}></input>
            <div><span className={s.error}>{hasError ? meta.error : ''}</span></div>
        </div>
    )
}