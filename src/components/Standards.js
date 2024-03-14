
const Standards = (props) => {
    return(
        <section className="standards-section">
                <h3 className="section-title">Our Standards</h3>
                <div className="standards-container">
                    {props.data && props.data.items.map((item => (
                        <div className="standard-item">
                            <img src={item.img} className="standard-image"/>
                            <h5>{item.title}</h5>
                            <p>{item.description}</p>
                        </div>
                    )))}
                </div>
        </section>
    );
}
export default Standards;