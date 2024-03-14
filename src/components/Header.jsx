
export default function Header(props){
    return(
        <header className="header">
            <nav>
                <div className="left-nav-items">
                    <a href="#" className="logo"><b>Skin</b>Face</a>
                    <ol>
                        {props.data.list.map((item) => (
                            <li><a href={item.link}>{item.name}</a></li>
                        ))}
                    </ol>
                </div>
                <div className="right-nav-items">
                    <button>Shop Now</button>
                </div>
            </nav>
        </header>

    )
}