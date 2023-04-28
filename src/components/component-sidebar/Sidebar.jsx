import React from 'react'
import { LinkBtn } from './SidebarLinkBtn';

function Sidebar() {
    return (
        <div className="bar">
            <LinkBtn tosrc="https://www.github.com/Akshay-Vs" imgsrc="https://pngimg.com/uploads/github/github_PNG83.png" text="Github" />

            <LinkBtn tosrc="https://www.instagram.com/akshay._.vs__/" imgsrc="https://180dc.org/wp-content/uploads/2014/04/instagram-Logo-PNG-Transparent-Background-download.png" text="Instagram" />

            <LinkBtn tosrc="https://twitter.com/Akshay_vs__" imgsrc="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png" text="Twiter" />

            <LinkBtn tosrc="https://linktr.ee/akshay_vs" imgsrc="https://assets.production.linktr.ee/7402b4d8866a6e7c26b439b15708623610cff306/images/logo_trees.svg" text="Linktree" />

            <LinkBtn tosrc="https://www.codegrepper.com/profile/akshay-vs" imgsrc="https://www.codegrepper.com/images/logo_colors_small.png" text="Grepper" />

            <LinkBtn tosrc="https://www.linkedin.com/in/akshay-vs-653667231/" imgsrc="https://www.freeiconspng.com/thumbs/linkedin-logo-png/linkedin-logo-3.png" text="Linked In" />

        </div>
    )
}

export default Sidebar