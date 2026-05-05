import Header from "../../Components/Header/Header";
import BannerHome from "./BannerHome";
import CapabilityBuckets from "./CapabilityBuckets";
import EngagementModels from "./EngagementModels";
import HowWeWork from "./HowWeWork";
import FAQs from "./FAQs";
import Footer from "../../Components/Footer/Footer";
import '../../Styles/CssHome/CssCapsule.css';
import Reclaim from "./Reclaim";

export default function Home() {
    return (
        <>
            <Header></Header>
            <BannerHome></BannerHome>
            <CapabilityBuckets></CapabilityBuckets>
            <EngagementModels></EngagementModels>
            <HowWeWork></HowWeWork>
            <Reclaim></Reclaim>
            <FAQs></FAQs>
            <Footer></Footer>

        </>
    )
}