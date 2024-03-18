import React from 'react';

const Button = ({ isLoading, button, onClick, ...rest }) => {
    return (
        <button type="button" onClick={onClick} disabled={isLoading} {...rest}>
            {isLoading ? '...' : button}
        </button>
    );
};

export default Button;
