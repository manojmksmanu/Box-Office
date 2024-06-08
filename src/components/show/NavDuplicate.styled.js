import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavsList= styled.ul`
display:flex;
flex-direction:row;
justify-content:center;
list-style:none;
margin:0 0 30px;
padding:0;
font-size:25px;
`;


export const LinkStyled = styled(Link)`
margin:0 10px;
padding: 3px 15px;
position:relative;
text-decoration:none;
color:#c6c6c6;
&.active{
    color:#2400ff;
    &:after{
        content:'';
        position:absolute;
        display:block;
        height:2px;
        left:0%;
        bottom:0%;
        bacground-color:#2400ff;
        animation:slide-in 0.3s ease-in forwards;
        @keyframes slide-in{
            from{
                left:50%;
                width:0;
            }
            to{
                left:0%;
                width:100%;
            }
        }
    }
}
`