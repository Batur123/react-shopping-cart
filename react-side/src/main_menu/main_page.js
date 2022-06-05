import TopBar from "../design/top_bar";
import GetAllProducts from "../api/products";

function MainPage() {
    return (
        <>
            <TopBar/>
            <div id="bottom" style={{border: "5px solid"}}>
                <GetAllProducts/>
            </div>
        </>
    );
}

export default MainPage;
