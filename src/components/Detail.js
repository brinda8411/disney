import styled from "styled-components";
import{useEffect,useState} from "react";
import {useParams} from "react-router-dom";
import db from "../firebase";
const Detail=(props)=>{
    const {id}=useParams();
    const[detailData,setDetailData]=useState({});
    useEffect(()=>{
        db.collection("movies")
        .doc(id)
        .get()
        .then((doc)=>{
            if(doc.exists){
                setDetailData(doc.data());
            }
            else{
                console.log("No such document exists");
            }
        })
        .catch((error)=>{
            console.log("error getting document",error);
        });
    },[id]);

    return<Container>
            <Background>
                <img src={detailData.backgroundImg}/>
            </Background>
            <ImageTitle>
                <img src={detailData.titleImg}/>
            </ImageTitle>
            <ContentMeta>
                <Control>
                    <Player>
                        <img src="/images/play-icon-black.png"/>
                        <h3>Play</h3>
            
                    </Player>
                    <Trailer>
                    <img src="/images/play-icon-white.png"/>
                        <h3>Trailer</h3>

                    </Trailer>
                    <AddList>
                        <span>
                            +
                        </span>
                    </AddList>
                    <Group>
                        <img src="/images/group-icon.png"/>
                    </Group>
                </Control>
                <Subtitles>
                    {detailData.subTitle}
                </Subtitles>
                <Description>
                {detailData.description}

                    </Description>
            </ContentMeta>
    </Container>
};
const Container=styled.div`
position:relative;
min-height:calc(100vh-240px);
overflow-x:hidden;
display:block;
top:72px;
`
const Background=styled.div`
left:0px;
opacity:0.8;
position:fixed;
right:0px;
top:0px;
z-index:-1;
img{
    width:100%;
    height:100vh;
}


`
const ImageTitle=styled.div`
display:flex;
align-items:flex-end;
-webkit-box-pack:start;
justify-content:flex-start;
margin:0px auto;
height:30vh;
min-height:170px;
padding-bottom:24px;
width:100%;
img{
    max-width:600px;
    min-width:200px;
    width:35vh;
}
`
const ContentMeta=styled.div`
max-width:874px;
`
const Control=styled.div`
align-items:center;
display:flex;
flex-flow:row nowrap;
margin:24px 0px;
min-height:56px;

`
const Player=styled.button`
font-size:15px;
margin:0px 22px 0px 0px;
padding:0px 24px;
height:56px;
border-radius:4px;
align-items:center;
cursor:pointer;
display:flex;
justify-content:center;
letter-spacing:1.8px;
text-align:center;
text-transform:uppercase;
background:rgb(249,249,249);
border:none;
color:rgb(0,0,0);
img{
    width:32px;
}
&:hover
{
    background:rgb(198,198,198);
}
@media(max-width:768px){
    height:45px;
    padding:0px 12px;
    font-size:12px;
    margin:0px 10px 0px 0px;
}

`
const Trailer=styled.button`

font-size:15px;
margin:0px 22px 0px 0px;
padding:0px 24px;
height:56px;
border-radius:4px;
align-items:center;
cursor:pointer;
display:flex;
justify-content:center;
letter-spacing:1.8px;
text-align:center;
text-transform:uppercase;
background:black;
border:none;
color:white;
img{
    width:32px;
}
&:hover{
    background:#77acf1;
    color:black;
}
@media(max-width:768px){
    height:45px;
    padding:0px 12px;
    font-size:12px;
    margin:0px 10px 0px 0px;
}`
const AddList=styled.div`
margin-right:16px;
height:44px;
width:44px;
display:flex;
justify-content:center;
align-items:center;
background-color:rgba(0,0,0,0.6);
border-radius:50%;
border:2px solid white;
cursor:pointer;
span{
   font-size:2rem;
   position:relative;
   bottom:2px;
}


`
const Group=styled.div`

margin-right:16px;
height:44px;
width:44px;
display:flex;
justify-content:center;
align-items:center;
background-color:rgba(0,0,0,0.6);
border-radius:50%;
border:2px solid white;
cursor:pointer;`
const Subtitles=styled.div`
color:rgb(249,249,249);
font-size:15px;
min-height:20px;
@media(max-width:768px)
{
    font-size:12px;
}

`;
const Description=styled.div`
line-height:1.4;
font-size:20px;
padding:16px 0px;
color:rgb(249,249,249);
@media(max-width:768px)
{
    font-size:14px;
}

`
export default Detail;
