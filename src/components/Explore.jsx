const Explore = (props) => {
    return(
        <section className="hidden">
            <div className="grid-container">
                <div className="column1">
                    <h3 className="section-title">{props.data && props.data.title}</h3>
                    <p className="Landing-desc">{props.data && props.data.description}</p>
                    <button className="explore-btn">Explore More</button>
                </div>
                <div className="column2">
                    <img src={'/image/woman1.jpg'} className="box-shadow-img" />
                </div>
            </div>
        </section>
    );
}

export default Explore;