const Landing = (props) => {
    return(
        <section id="#" className="hidden">
            <div className="grid-container first-container">
                <div className="column1">
                    <div className="typewriter">
                    <h1 className="Landing-title">{props.data.title}</h1>
                    </div>
                    <p className="Landing-desc">{props.data.description}</p>
                    <button>Get Started</button>
                </div>
                <div className="column2">
                    <img src={'/image/girl.jpg'} />
                </div>
            </div>
        </section>
    );
}

export default Landing;