import { useSelector } from 'react-redux'
import PokeHeader from './pokeHeader';
import { Link } from 'react-router-dom';

const Modal = () => {
    const { title, body, image } = useSelector(store => store.modal);
    return (
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div title='Modal Header' className="modal-header d-block">
                        <PokeHeader pokeName={title} pokeImage={image} />
                    </div>
                    <div title='Modal Body' className="modal-body">
                        {body}
                    </div>
                    <div title='Modal Footer' className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <Link to={`/pokemon/${title}`} className="btn btn-primary">Details</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal