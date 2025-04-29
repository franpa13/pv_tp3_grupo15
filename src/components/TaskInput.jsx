import React from 'react';

export const TaskInput = ({
    value,
    setValue,
    placeholder = 'Ingresa una tarea',
    onSubmit,
    inputType = 'text',
    buttonLabel = 'Añadir',
    formStyle = {},
    inputStyle = {},
    buttonStyle = {},
}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit && onSubmit(value);
    };

    return (
        <form
            onSubmit={handleSubmit}
            style={{
                width: '20%',
                display: 'flex',
                justifyContent: 'center',
                gap: '8px',

                ...formStyle,
            }}
        >
            <input
                type={inputType}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder={placeholder}
                style={{
                    padding: '12px',
                    borderRadius: '4px',
                    border: '1px solid #ccc',
            
                    ...inputStyle,
                }}
            />
            <button
                type="submit"
                style={{
                    padding: '8px',
                    borderRadius: '4px',
                    border: 'none',
                    backgroundColor: '#007BFF',
                    color: '#fff',
                    cursor: 'pointer',
                    ...buttonStyle,
                }}
            >
                {buttonLabel}
            </button>
        </form>
    );
};
