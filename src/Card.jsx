function Card(props) {

    return (

        <>
            <div className="m-5 mt-2 mb-4 row" style={{ color: `${props.TClr}`, textAlign: "center" }}>

                <div className="col-lg-4 col-12 col-md-6 mt-2" style={{ backgroundColor: `${props.CBgClr}` }}>
                    <h3>{props.n1}</h3>
                    <img src={props.img1} width="100%" alt="" />
                    <br />
                    <br />
                </div>

                <div className="col-lg-4 col-12 col-md-6 mt-2" style={{ backgroundColor: `${props.CBgClr}` }}>
                    <h3>{props.n2}</h3>
                    <img src={props.img2} width="100%" alt="" />
                    <br />
                    <br />
                </div>

                <div className="col-lg-4 col-12 col-md-6 mt-2" style={{ backgroundColor: `${props.CBgClr}` }}>
                    <h3>{props.n3}</h3>
                    <img src={props.img3} width="100%" alt="" />
                    <br />
                    <br />
                </div>

                <div className="col-lg-4 col-12 col-md-6 mt-2" style={{ backgroundColor: `${props.CBgClr}` }}>
                    <h3>{props.n4}</h3>
                    <img src={props.img4} width="100%" alt="" />
                    <br />
                    <br />
                </div>

                <div className="col-lg-4 col-12 col-md-6 mt-2" style={{ backgroundColor: `${props.CBgClr}` }}>
                    <h3>{props.n5}</h3>
                    <img src={props.img5} width="100%" alt="" />
                    <br />
                    <br />
                </div>

                <div className="col-lg-4 col-12 col-md-6 mt-2" style={{ backgroundColor: `${props.CBgClr}` }}>
                    <h3>{props.n6}</h3>
                    <img src={props.img6} width="100%" alt="" />
                    <br />
                    <br />
                </div>

            </div>
        </>

    )

}
export default Card;