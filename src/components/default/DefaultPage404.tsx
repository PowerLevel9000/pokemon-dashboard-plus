import { Link } from 'react-router-dom'

const Default404 = () => (
    <div className='card d-flex w-50 justify-content-center align-items-center mx-auto my-5 p-5' style={{ minHeight: "60.9vh" }}>
        <h1 className='alert alert-danger' aria-label="You Lost" data-toggle="tooltip" data-placement="top" title="You Lost">😂😂😂😂</h1>
        <p title='Suggestions' className='alert alert-info'>Use navigation bar to Get Back to home</p>
        <Link to="/" className="btn btn-info" aria-label="Go to Home" data-toggle="tooltip" data-placement="top" title="Go to Home">Or Just click me</Link>
    </div>
)

export default Default404
