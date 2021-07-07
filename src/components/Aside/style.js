import styled from "styled-components";


const SideBar = styled.aside`
background-color: #FFFFFF;
width: 100%;
height: 60px;
display: flex;
align-items: center;
justify-content: space-between;
box-shadow: 6px 0px 18px rgba(0, 0, 0, 0.06);
`;

const Search = styled.input`
padding: 11px 0 11px 48px;
width: 777px;
border: none;
background-image: url("/assets/icons/search.svg");
background-repeat: no-repeat;
background-position: 19px 13px;
background-size: 20px 20px;
background-color: transparent;
border-radius: 3px;
transition: all 0.2s ease-in-out;

&:focus,
&:hover {
  background-color: #f5f8fa;
  outline: none;
}
`;

const List = styled.ul`
display: flex;
gap: 12px;
`;

const ListItem = styled.li`
display: flex;
align-items: center;
`;

const Profile = styled.button`
padding: 0;
display: flex;
align-items: center;
border: none;
background-color: #FFFFFF;
cursor: pointer;
margin-right: 23px;
`;

const Img = styled.img`
border-radius: 50%;
margin-right: 15px;
`;

const ProfileText = styled.p`
display: flex;
position: relative;
font-weight: 500;
font-size: 16px;
line-height: 19px;
letter-spacing: 0.01em;
color: #192A3E;
margin-right: 5px;

&::after {
  content: "";
  position: absolute;
  top: 7px;
  left: 80px;
  width: 10px;
  height: 8px;
  background-image: url('/assets/icons/triangle.svg');
  background-repeat: no-repeat;
  background-position: center;
}
`;

export {
  SideBar,
  Search,
  List,
  ListItem,
  Profile,
  Img,
  ProfileText
}