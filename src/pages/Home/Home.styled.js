import styled from 'styled-components'
import Home from './Home'

const HomeStyled = styled(Home)`
    .banner {
        width: 100vw;
        position: relative;
        z-index: -1;

    }
    .banner .logo {
        width: 33%;
        position: absolute;
        left: 55%;
        top: 28%;
    }
    .overlay {
        width: 100%;
        height: 130px;
        background-image: linear-gradient(rgba(255,255,255,0), rgba(255,255,255,1));
        position: absolute;
        bottom: 3px;
        left: 0;
    }
    .banner img {
        width: 100%;
        margin-top: 4vh;
    }

    .shift-up {
        margin-top: -35px;
    }

    h2 {
        font-size: 26pt;
        font-weight: 500;
    }

    // upcoming events
    .upcoming {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding-left: 10px;
    }
    .event {
        display: flex;
        flex-direction: row;  
    }
    .left-column {
        position: relative;
    }
    .date {
        width: 10px;
        text-align: left;
        transform: translateX(-85%);
        margin: 0 auto;
        margin-top: 7px;
        font-size: 18pt;
    }
    .circle {
        display: block;
        width: 70px;
        height: 70px;
        border-radius: 50%;
        border: 2px solid #38445D;
        background: #fff;
        position: absolute;
        top:0;
        left:0;
    }
    .event img {
        width: 20vw;
        object-fit: cover;
        border-radius: 10px;
        margin: 10px 35px;
        
    }
    .right-column {
        display: flex;
        flex-direction: column;
        
    }
    .right-column h2 {
        
        margin-top: 25px;
        margin-bottom: 5px;
        min-height: 2.4em;
        
        font-size: 26pt;
        @media (max-width: 955px) {
            font-size: 24pt;
        }
    }
    .right-column p {
        margin: 0;
        font-size: 16pt;
        border: 2px solid #38445D;
        border-radius: 10px;
        padding: 10px 20px;
        @media (min-width: 745px) {
            transform: translateX(-100px);
        }
        background-color: #fff;
        width: 50vw;
    }
    .event:hover p{
        background-color:#38445D;
        color: #fff;
    }
    .event:hover .circle {
        border: 2px solid #E8A725;
        background-color: #E8A725;
    }
    // mobile styles
    @media (max-width: 744px) {
            .event {
                border: 1px solid #38445D;
                border-radius: 10px;
                flex-direction: column;
            }
            .event img {
                width: 100%;
                margin: 0;
                border-radius: 0;
                border-top-right-radius: 10px;
                border-top-left-radius: 10px;
            }
            .circle {
                border: 1px solid #38445D;
                top: 2vw;
                left: 3vw;
            }
            .right-column {
                padding-bottom: 60px;
            }
            .right-column h2 {
                margin-top: 15px;
                margin-left: 15px;
                margin-right: 15px;
                border-bottom: 2px solid #E9B632;
                min-height: 0;
                padding-bottom: 10px;
            }
            .right-column p {
                border: none;
                width: 100%;
                
            }
            .arrow-icon {
                width: 100%;
               
                position: relative;
            }
            .arrow-icon img {
                width: 42px;
                position: absolute;
                top: 0;
                right: 20px;
            }

        }

    //second banner
    .banner.second {
        
        position: relative;
     
    }

    .shift-down{
        position: relative;
        top:35px;
        left: 0;
        z-index:2000;
    }
    .nevim {
        width: 100vw;
        height: 70vh;
        
    }

    .mask {

        width:100%;
        height:100%;
        background: rgba(56,68,93,0.7);
        display: flex;
        flex-direction: column;  
        padding: 0 20px;
    }
    .mask h1 {
        color: #fff;
        margin: 0 auto;
        margin-top: 100px;
        font-size: 38pt;
        font-weight: 400;
        text-align: center;
        @media (max-width: 369px) {
            margin-top: 50px;
            
        }
    }
    .mask p {
        width: 40vw;
        color: #fff;
        margin: 20px auto;
        font-size: 16pt;
        text-align: center;
        @media (max-width: 993px) {
            width: 80vw;
        }
        @media (max-width: 369px) {
            font-size: 14pt;
            
        }
    }
    // mobile
    @media (max-width: 744px) {
        .mask h1 {
            font-size: 24pt;
        }
    }

    //about section
    .about-brief {
        display: flex;
        flex-direction: row;
        @media (max-width: 589px) {
            flex-direction: column;
        }
        gap:20px;
        width: 100%;
        margin: 0 auto;
        @media (max-width: 425px) {
            gap: 0;
            
        }
    }
    .avatar img {
        width: 381px;
        height: 381px;
        border-radius: 50%;
        transform: translateY(-20vh);
        object-fit: cover;
        @media (max-width: 1060px) {
            width: 331px;
            height: 331px;
        }
        @media (max-width: 907px) {
            transform: translateY(-10vh);
        }
        @media (max-width: 682px) {
            width: 310px;
            height: 310px;
        }
   
    }
    .about-brief.right-column {
        
    }
    .about-brief h2 {
        font-size: 26pt;
        margin-top: 40px;
    }
    .about-brief p {
        font-size: 16pt;
        width: 85%;
        @media (max-width: 425px) {
            width: 100%
            
        }
    }
    // mobile
    @media (max-width: 589px) {
            .desktop-only {
                display: none;
            }
            .mobile-only {
                position: absolute;
                bottom: 0;
                right: 0;
                margin-bottom: 0;
                
            }
            .avatar{
                display: flex;
                justify-content: space-between;
                flex-direction: row;
                position: relative;
                height: 330px;
                width: 100%;
                
            }
            .avatar img {
                position: absolute;
                top: -30px;
                left: 0;
            }
            
        }
        @media (max-width: 556px) {
            .avatar img {
                transform: translateX(-50px); // heeeeereee!!!!!!!!!!!!!!
                
            }
        }

    

`

export default HomeStyled;
