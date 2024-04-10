import HomeInfo from "../components/Home/HomeInfo.tsx";
import HomeSlider from "../components/Home/HomeSlider.tsx";


const HomePage = () => {
    return (
        <div className="py-[140px] flex justify-between items-center gap-20">
            <HomeInfo/>
            <HomeSlider/>
        </div>
    );
};

export default HomePage;