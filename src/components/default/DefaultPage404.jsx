import { Link } from 'react-router-dom'

const Default404 = () => {
    return (
        <div className='card d-flex w-50 justify-content-center align-items-center mx-auto my-5 p-5' style={{ minHeight: "60.9vh" }}>
            <h1 className='alert alert-danger'>You Lost 😂😂😂😂</h1>
            <p className='alert alert-info'>Use navigation bar to Get Back to home</p>
            <Link to="/" className="btn btn-info">Or Just click me</Link>
        </div>
    )
}

export default Default404