const About = (props) => {
    return(
        <section id="about" className="about hidden">
            <div className="grid-container">
                <div className="column2">
                    <img src={'/image/girl22.jpg'} loading="lazy" className="box-shadow-img" />
                </div>
                <div className="column1">
                    <h3 className="section-title">{props.data && props.data.title}</h3>
                    <p className="Landing-desc">{props.data && props.data.description}</p>
                </div>
            </div>
        </section>
    );
}

export default About;