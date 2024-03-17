import React from 'react';

const Button = ({ isLoading, children, onClick, ...rest }) => {
    return (
        <button type="button" onClick={onClick} disabled={isLoading} {...rest}>
            {isLoading ? 'Loading...' : children}
        </button>
    );
};

export default Button;
