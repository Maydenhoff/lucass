import Standards from "./components/Standards";
import Pricing from "./components/Pricing";
import Products from "./components/Products";
import Explore from "./components/Explore";
import About from "./components/About";
import Landing from "./components/Landing";
import JsonData from './data/data.json';
export default function Main(){
    return(
        <main>
            <Landing data={JsonData.Landing} />
            <About data={JsonData.About}/>
            <Explore data={JsonData.Explore}/>
            <Products data={JsonData.Products}/>
            <Pricing data={JsonData.Pricing}/>
            <Standards data={JsonData.Standards}/>
        </main>

    )
}