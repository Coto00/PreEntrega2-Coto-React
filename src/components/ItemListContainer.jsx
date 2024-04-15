const ItemListContainer = ({mensaje}) => {
        return(
                <div className="container py-5">
                        <div className="row">
                                <div className="col text-center">
                                        <h2 className="text-dark">{mensaje}</h2>
                                </div>
                        </div>
                </div>

        )
}

export default ItemListContainer