import React from 'react';
import SideBar from "./components/SideBar";
import FoodItems from "./components/FoodItems";
import Pagination from "./components/Pagination";
import Footer from "./components/Footer";
import About from "./components/About";
import Header from "./components/Header";

function App() {
    const sidebarItems = [
        {href: "#food", label: "Food"},
        {href: "#about", label: "About"}
    ];

    const foodItems = [
        {
            src: "./img/todoList-img.png",
            alt: "Sandwich",
            title: "The Perfect Sandwich, A Real NYC Classic",
            description: "Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum."
        },
        {
            src: "./img/img_1.png",
            alt: "Steak",
            title: "Let Me Tell You About This Steak",
            description: "Once again, some random text to lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum."
        },
        {
            src: "./img/img_2.png",
            alt: "Cherries",
            title: "Cherries, interrupted",
            description: "Lorem ipsum text praesent tincidunt ipsum lipsum.",
            additionalDescription: "What else?"
        },
        {
            src: "./img/img_3.png",
            alt: "Pasta and Wine",
            title: "Once Again, Robust Wine and Vegetable Pasta",
            description: "Lorem ipsum text praesent tincidunt ipsum lipsum."
        },
        {
            src: "./img/img_4.png",
            alt: "Popsicle",
            title: "All I Need Is a Popsicle",
            description: "Lorem ipsum text praesent tincidunt ipsum lipsum."
        },
        {
            src: "./img/img_5.png",
            alt: "Salmon",
            title: "Salmon For Your Skin",
            description: "Once again, some random text to lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum."
        },
        {
            src: "./img/img_6.png",
            alt: "Sandwich",
            title: "The Perfect Sandwich, A Real Classic",
            description: "Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum."
        },
        {
            src: "./img/img_7.png",
            alt: "Croissant",
            title: "Le French",
            description: "Lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum."
        }
    ];

    const paginationItems = ['«', 1, 2, 3, 4, '»'];

    const blogPosts = [
        {src: "./img/img_9.png", title: "Lorem", description: "Sed mattis nunc"},
        {src: "./img/img_10.png", title: "Ipsum", description: "Praes tinci sed"}
    ];

    const popularTags = [
        "Travel", "New York", "Dinner", "Salmon", "France", "Drinks", "Ideas", "Flavors", "Cuisine", "Chicken", "Dressing", "Fried", "Fish", "Duck"
    ];

    function w3_open() {
        document.getElementById("mySidebar").style.display = "block";
    }

    function w3_close() {
        document.getElementById("mySidebar").style.display = "none";
    }

    return (<div>
        <SideBar
            sidebarItems={sidebarItems}
            w3_close={w3_close}>
        </SideBar>

        <Header
            w3_open={w3_open}>
        </Header>

        <div className="w3-main w3-content w3-padding" style={{maxWidth: "1200px", marginTop: "100px"}}>
            <FoodItems foodItems={foodItems}></FoodItems>
            <Pagination paginationItems={paginationItems}></Pagination>
            <hr id="about"/>
            <About></About>
            <hr/>
            <Footer
                blogPosts={blogPosts}
                popularTags={popularTags}>
            </Footer>

        </div>

    </div>);
}

export default App;
