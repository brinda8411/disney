import React from "react";
import {useEffect} from "react";
import {useDispatch,useSelector }from "react-redux";
import {useHistory} from "react-router-dom";
import styled from "styled-components";
import { auth, provider } from "../firebase";
import {selectUserName,selectUserEmail,selectUserPhoto,setUserLoginDetails,setSignOutState} from "../features/user/userSlice";
const Header=(props)=>{
const dispatch=useDispatch();
const history=useHistory();
const userName=useSelector(selectUserName);
const userPhoto=useSelector(selectUserPhoto);
const useremail=useSelector(selectUserEmail);
const setUser=(user)=>{
    dispatch(
        setUserLoginDetails({
            name:user.displayName,
            email:user.email,
            photo:user.photoURL,
        })
    );
}
useEffect(()=>{
    auth.onAuthStateChanged(async(user)=>{
        if(user){
            setUser(user);
            history.push("/home");
        }
    });
},[userName]);

    const handleAuth=()=>{
        if(!userName){
        auth.signInWithPopup(provider).then((result) => {
            setUser(result.user);
        
        }).catch((error)=>{
            alert(error.message);
        });
    } 
    else if(userName){
        auth
        .signOut()
        .then(()=>{
            dispatch(setSignOutState());
            history.push("/");
        })
        .catch((err)=>alert(err.message));
    }
};
 
return(
<Nav>
    <Logo>
        <img src="/images/logo.svg"></img>
    </Logo>
    {
        !userName?(
        <Login  onClick={handleAuth}>Login</Login>
        ):(
            <>
        <NavMenu>
        <a href="/home">
            <img src="/images/home-icon.svg" alt="HOME"/>
            <span>Home</span>
        </a>
        <a href="/search">
            <img src="/images/search-icon.svg" alt="HOME"/>
            <span>Search</span>
        </a>
        <a href="/watchlist">
            <img src="/images/watchlist-icon.svg" alt="HOME"/>
            <span>Watchlist</span>
        </a>
        <a href="/originals">
            <img src="/images/original-icon.svg" alt="HOME"/>
            <span>Originals</span>
        </a>
        <a href="/movies">
            <img src="/images/movie-icon.svg" alt="HOME"/>
            <span>Movies</span>
        </a>
        <a href="/series">
            <img src="/images/series-icon.svg" alt="HOME"/>
            <span>Series</span>
        </a>
        
    </NavMenu>
    <SignOut>
        <UserImg src={userPhoto} alt={userName}/>
        <DropDown>
            <span onClick={handleAuth}>Sign out</span>
        </DropDown>
    </SignOut>
    </>
        )}
</Nav>
)};
export default Header;
const Nav=styled.nav`
position:fixed;
top:0;
right:0;
left:0;
height:70px;
background-color:#090b13;
display:flex;
justify-content:space-between;
align-items:center;
padding:0 36px; 
z-index:3;
`
const Logo=styled.a`
width:90px;
margin-top:4px;
max-height:70px;
font-size:0;
display:inline-block;

`
const NavMenu=styled.div`
align-items:center;
display:flex;
flex-flow:row nowrap;
height:100%;
justify-content:flex-end;
margin:0px;
padding:0px;
position:relative;
margin-right:auto;
margin-left:35px;
a{
    display:flex;
    align-items:center;
    padding:0 12px;
    text-decoration:none;
}
img{
    height:20px;
    width:20px;
    z-index:auto;
}
span{
    font-size:14px;
    color:white;
    letter-spacing:1.42px;
    line-height:1.08;
    padding:2px 0px;
    white-space:nowrap;
    position:relative;

&:hover
{
    color:#0483ee;
}
}
@media(max-width:768px){
    display:none;
}
`
const Login=styled.a`
background-color:black;
padding:8px 16px;
text-transform:uppercase;
border:1px solid white;
border-radius:10px;
&:hover{
    background-color:white;
    color:black;
    cursor:pointer;
}
`
const UserImg = styled.img`
  height: 100%;
`;

const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;
`;

const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  ${UserImg} {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }
  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;
