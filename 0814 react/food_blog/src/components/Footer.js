import BlogPosts from "./BlogPosts";
import PopularTags from "./PopularTags";
import React from "react";

function Footer({blogPosts, popularTags}) {
    return (
        <footer className="w3-row-padding w3-padding-32">
            <div className="w3-third">
                <h3>FOOTER</h3>
                <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae,
                    ultricies
                    congue gravida diam non fringilla.</p>
                <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a>
                </p>
            </div>

            <BlogPosts
                blogPosts={blogPosts}>
            </BlogPosts>


            <PopularTags
                popularTags={popularTags}>
            </PopularTags>
        </footer>
    )
}

export default Footer;