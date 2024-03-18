import React from 'react'

const Error = ({ error, data }) => {
    return (
        <div className='container'>
            <div className='alert alert-danger'>
                {error}
                {error.includes('404')&& `${data} not found`}
            </div>
        </div>
    )
}

export default Error