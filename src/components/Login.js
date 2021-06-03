import React from "react";
import styled from "styled-components";
const Login=(props)=>{
    return(
    <Container>
        <Content>
        <CTA>
            <CTALogoOne src="/images/cta-logo-one.png"/>
            <SignUp>GET ALL THERE</SignUp>
            <Description>Disney+ Hotstar is an online video streaming platform owned by Novi Digital Entertainment Private Limited, a wholly owned subsidiary of Star India Private Limited. Disney+ Hotstar currently offers over 100,000 hours of TV content and movies across 9 languages.</Description>
            <CTALogoTwo src="/images/cta-logo-two.png"/>
        </CTA>
        <BgImg/>
        </Content>
    </Container>);
}
const Container=styled.section`
overflow:hidden;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
flex-wrap:wrap;
`;
const Content=styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
flex-wrap:wrap;
width:100%;
position:relative;
min-height:100vh;
box-sizing:border-box;
padding:80px 40px;
`
const BgImg=styled.div`
background-image:url('/images/disney.jpg');
z-index:-1;
height:100%;
background-position:top;
background-size:cover;
background-repeat:no-repeat;
top:0;
right:0;
left:0;
position:absolute;
`;
const CTA=styled.div`
display:flex;
flex-wrap:wrap;
max-width:650px;
margin-bottom:2vw;
flex-direction:column;
justify-content:center;
margin-top:0;
align-items:center;
text-align:center;
width:100%;
`
const CTALogoOne=styled.img`
display:block;
`
const SignUp=styled.a`
font-weight:bold;
color:white;
background-color:#0063e5;
width:300px;
border-radius:30px;
margin:10px;
cursor:pointer;
letter-spacing:0.1rem;
padding:15px;
&:hover{
    background-color:#0483ee;
}
`
const Description=styled.p`
font-size:11px;
margin:0 0 24px;
line-height:1.5;
letter-spacing:0.1rem;
`
const CTALogoTwo=styled.img`
width:400px;
`
export default Login;
