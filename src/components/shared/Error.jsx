const Error = ({ error, data }) => (
    <div className='container'>
        <div title='Error' className='alert alert-danger'>
            {error}
            {error.includes('404') && `${data} not found`}
        </div>
    </div>
)


export default Error