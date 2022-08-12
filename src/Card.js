import { isEditable } from "@testing-library/user-event/dist/utils";``
function Card({ value }) {
    return (
        <div class="col-lg-4">
            <div class="card mb-5 mb-lg-0">
                <div class="card-body">
                    <h5 class="card-title text-muted text-uppercase text-center">{value.name}</h5>
                    <h6 class="card-price text-center">{value.currency}{value.price}<span class="period">/{value.period}</span></h6>
                    <hr />
                    <ul class="fa-ul">
                        {
                            value.details.map((list) => {
                                return (
                                    <li className={!list.isEnable ? `text-muted` : ``}><span class="fa-li"><i class="fa-solid fa-check"></i></span><span>{list.isBoult ? <strong>{list.tittle}</strong> : list.tittle}</span> </li>
                                )
                            })
                        }
                    </ul>
                    <div class="d-grid">
                        <a href="#" class="btn btn-primary text-uppercase">Button</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;