const Products = (props) => {
    return(
        <section className="products-section hidden" id="product">
                <h3 className="section-title">Join the Hype - Trending Products You Need Now</h3>
                <div className="products-container">
                    {props.data.items.map((item) => (
                        <div className="image-container">
                            <div className="item">
                            <img src={item.img} className="image" />
                            </div>
                            <p className="landing-desc">{item.name}</p>  
                        </div>
                    ))}
                </div>
        </section>
    );
}

export default Products;