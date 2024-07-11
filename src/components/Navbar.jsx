import React, { useState } from 'react';
import Logo from '../assets/Images/iimt_logo_icon.png';
import { Button, Navbar } from "flowbite-react";


const Header = () => {
//   const [hoveredItem, setHoveredItem] = useState(null);

//   const menuItems = [
//     {
//       label: 'About Us',
//       submenu: [
//         { label: 'Genesis', href: '/en/genesis' },
//         { label: 'Mission, Vision and Objectives', href: '/en/mission-vision' },
//         { label: 'Board of Governors', href: '/en/board-of-governors' },
//         { label: 'Director\'s Message', href: '/en/director-message' },
//         { label: 'Gallery', href: '/en/galleryAll' },
//       ],
//     },
//     {
//       label: 'More Info',
//       submenu: [
//         { label: 'History', href: '/en/history' },
//         { label: 'Team', href: '/en/team' },
//         { label: 'Careers', href: '/en/careers' },
//       ],
//     },
//   ];

  return (
    <Navbar fluid>
    <Navbar.Brand href="https://flowbite-react.com">
      <img src={Logo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
      <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">IIM Tiruchirappalli</span>
    </Navbar.Brand>
    <div className="flex md:order-2">
      <Button>Get started</Button>
      <Navbar.Toggle />
    </div>
    <Navbar.Collapse>
      <Navbar.Link href="#" active>
        Home
      </Navbar.Link>
      <Navbar.Link href="#">About</Navbar.Link>
      <Navbar.Link href="#">Services</Navbar.Link>
      <Navbar.Link href="#">Pricing</Navbar.Link>
      <Navbar.Link href="#">Contact</Navbar.Link>
    </Navbar.Collapse>
  </Navbar>
  );
};

export default Header;
