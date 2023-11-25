function Card2(props) {
    return (
        <div className="mt-0 mb-4 m-5 row ">
            {props.Card2Links.map(
                (elements) => {
                    return (
                        <div className="col-lg-4 col-md-6 col-12 pb-4 bg-dark">
                            <h1></h1>
                            <img src={elements} alt="" width="100%" />
                        </div>
                    )
                }
            )}
        </div>
    )
}
export default Card2;