import React from 'react';
import NavItem from "./NavItem/NavItem";


const navLink = {
    'home': "#",
    'how it works': "#how_it_works",
    'discover projects': "#discover_projects",
    'blog': "#blog",
    'find out more': "#find_out_more"
};

const Navigation = (props) => {
    return (
        <ul className="nav_list" style={props.style}>
            {Object.keys(navLink).map(link => (
                <NavItem
                    key={link}
                    navType={props.navType}
                    navLinkType={props.navLinkType}
                    pathTo={navLink[link]}
                    title={link}
                />
            ))}
        </ul>
    );
};

export default Navigation;


{/*<ul className="nav_list">*/}
{/*<li className="nav_item">*/}
{/*<a href="#" className="nav_link">Home</a>*/}
{/*</li>*/}
{/*<li className="nav_item">*/}
{/*<a href="#how_it_works" className="nav_link">How it works</a>*/}
{/*</li>*/}
{/*<li className="nav_item">*/}
{/*<a href="#discover_projects" className="nav_link">Discover a project</a>*/}
{/*</li>*/}
{/*<li className="nav_item">*/}
{/*<a href="#blog" className="nav_link">Blog</a>*/}
{/*</li>*/}
{/*<li className="nav_item">*/}
{/*<a href="#find_out_more" className="nav_link">Find out more</a>*/}
{/*</li>*/}
{/*</ul>*/}