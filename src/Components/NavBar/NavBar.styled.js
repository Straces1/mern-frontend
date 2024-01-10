import styled from 'styled-components'
import NavBar from './NavBar'

const NavBarStyled = styled(NavBar)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #38445D;
    width: 100vw;
    height: 90px;
    color: white;
    font-size: 18pt;
    letter-spacing: 2px;
    padding: 0 5vw;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 200;
    a {
        text-decoration: none;
        color: white;
        cursor: pointer;
    }
    nav {
        display: flex;
        gap: 2.5vw;
        position: relative;
    }
    nav span {
        cursor: pointer;
    }
    nav a:hover, nav span:hover {
        transform: translateY(-3px);
    }
    div {
        display: flex;
        align-items: center;
        gap: 1.5vw;
    }
    // some extra style to white divider
    .position {
        position: absolute;
        bottom:-36px;
        left:0;
    }

    //mobile menu
    .mobile-menu {
        
        position: absolute;
        top:0;
        left:0;
        z-index: 9;

        width: 100vw;
        height: 100vh;

        background: rgba(56,68,93,0.2);
    }
    .mobile-menu nav {
        position: absolute;
        top:17vh;
        right:0;
        width: 70vw;
        z-index: -20;

        display: flex;
        flex-direction: column;
        padding: 20px 0;

        background: rgba(56,68,93,0.9);
        
    }
    .mobile-menu nav a, .mobile-menu nav span {
        margin-left: 10vw;
    }
    .hamburger {
        background: none;
        border: none;
    }


`

export default NavBarStyled