import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import 'slick-carousel/slick/slick-theme.css'
const ImgSlider=(props)=>
{
    let settings={
        dots:true,
        infinite:true,
        speed:300,
        slidesToShow:1,
        slidesToScroll:1,
        autoplay:true,
    };
    return (
<Carousel {...settings}>
    <Wrap>
    <a>
    
        <img src="/images/slider-badag.jpg"/>
    </a>
    </Wrap>
    <Wrap>
    <a>
    <img src="/images/slider-badging.jpg"/>
    </a>
    </Wrap>
    <Wrap>
    <a>
    <img src="/images/slider-scale.jpg"/>
    </a>
    </Wrap>
    <Wrap>
    <a>
    <img src="/images/slider-scales.jpg"/>
    </a>
    </Wrap>
    
</Carousel>
)
};
const Carousel=styled(Slider)`
margin:30px;
ul li button{
    &:before{
        font-size:10px;
        
    }
}
img{
    width:100%;
    height:100%;
   
}

li.slick-active button:before{
    color:white;
}


`;
const Wrap=styled.div`
a{
    cursor:pointer;
    display:block;
    &:hover
    {
        transition-duration:300ms;
      
    }
}
`
export default ImgSlider;
