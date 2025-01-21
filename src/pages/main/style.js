import styled, { keyframes } from 'styled-components';
import theme from "../../global/theme";
import { Link } from "react-router-dom";

const S = {};

// 공용 하트
S.Heart = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 30px;
  height: 30px;

  & > img {
    width: 100%;
  }
`;

S.Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    & .banner {
        width: 1920px;
    }
`;

S.SwiperContainer = styled.div`
    display: flex;
    position: relative;

    .swiper-button-next, .swiper-button-prev {
        color: #fff;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 24px;
    }

    .swiper-button-next {
        right: 20px;
    }

    .swiper-button-prev {
        left: 20px;
    }

    & span.swiper-pagination-bullet-active {
        background: #fff;
    }

    .mySwiper2 .swiper-slide {
        flex-shrink: 0;
        width: 464px !important;
    }
    margin: 0 0 150px 0;
`;

S.SwiperPager = styled.div`
    position: absolute;
    right: 20px;
    bottom: 20px;
    z-index: 100;
    width: 150px;
    height: 50px;
    background-color: rgba(217, 217, 217, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    & p {
        font-size: 18px;
        color: white;
    }
`;

S.BannerTitle = styled.div`
    width: 489px;
    flex-shrink: 0;
    margin-left: 238px;

    & h2 {
        font-size: ${theme.FONT_SIZE.h4};
        font-weight: ${theme.FONT_WEIGHT.bold};
    }
`;

S.Slider = styled.div`
    position: relative;
    width: 100%;
    height: 570px;
    overflow: hidden;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;

S.Slides = styled.div`
    display: flex;
    transition: transform 3s ease-in-out;
    overflow: hidden;
    gap: 26px;
`;

//////////////////////////////////////////메인배너

S.HotSlide = styled.div`
    display: flex;
    transition: transform 3s ease-in-out;
    overflow: hidden;
    gap: 26px;
`;

S.Slide = styled.div`
  min-width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
`;

//////////////////////////////////////핫한 상품

S.HotProduct = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 135px;

    & h2 {
        font-size: ${theme.FONT_SIZE.h4};
        font-weight: ${theme.FONT_WEIGHT.bold};
    }
`;

S.HotImages = styled.div`
    display: flex;
    gap: 26px;
`;

S.ImageAndCart = styled.div`
    display: flex;
    flex-direction: column;
    gap: 26px;
`;

S.HotImage = styled.div`
    width: 464px;
    height: 564px;
    background-color: #767676;
    border-radius: 10px;
    position: relative;
    overflow: hidden;

    .like-icon {
        width: 40px;
        height: 40px;
        position: absolute;
        top: 10px;
        right: 10px;
    }
`;

S.Coupon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 118px;
    height: 40px;
    color: #fff;
    background-color: #113f8a;
    border-radius: 5px;
    left: 9px;
    top: 9px;
`;

S.Cart = styled.div`
    border-radius: 5px;
    border: solid 1px #bebebe;
    background-color: white;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;

    &.small {
        width: 220px;
        height: 30px;
    }

    & a {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }
`;

////////////////////////////////////////// 태스트 배너

S.TestWrap = styled.div`
    position: relative;
    margin-bottom: 150px;
`;

S.TestButton = styled(Link)`
    position: absolute;
    left : 240px;
    bottom : 340px;

    display: flex;
    justify-content: center;
    color : #fff;
    align-items: center;
    background-color: #113f8a;
    width: 300px;
    height: 60px;
    border-radius: 30px;
    font-size: 24px;
`;

////////////////////////////////////////// 커뮤니티

S.RecommendSection = styled.div``;

S.RecommendContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 24px;
`;

S.CommunityPlusMore = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

S.TitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 50px;

    & h2 {
        font-size: ${theme.FONT_SIZE.h4};
        font-weight: ${theme.FONT_WEIGHT.bold};
    }
`;

S.MainProfileInfo = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: 2;
    overflow: hidden;

    img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-right: 10px;
    }

    .UserId {
        font-size: 20px;
        color: white;
    }
`;

S.LargePost = styled.div`
    width: 708px;
    height: 803px;
    background-color: #f0f0f0;
    position: relative;
    margin-bottom: 150px;

    .like-icon {
        width: 40px;
        height: 40px;
        position: absolute;
        top: 10px;
        right: 10px;
    }
`;

S.PostImage = styled.div`
    width: 708px;
    height: 803px;
    border-radius: 10px;
    overflow: hidden;

    & img {
        width: 100%;
        border-radius: 10px;
    }
`;

S.SmallWrap = styled.div`
    display: flex;
    flex-direction: column;
`;

S.SmallPost = styled.div`
    display: flex;
    width: 708px;
    justify-content: space-between;
    flex-wrap: wrap;
`;

S.SmallPostImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 10px;
`;

S.Post = styled.div`
    width: 220px;
    height: 300px;
    margin-bottom: 145px;
    position: relative;

    .like-icon {
        width: 30px;
        height: 30px;
        position: absolute;
        top: 10px;
        right: 10px;
    }
`;

S.ProfileInfo = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    gap: 10px;
    margin-top: 18px;

    & img {
        width: 40px;
        height: 40px;
    }

    & a {
        display: flex;
        align-items: center;
        gap: 10px;

        & span {
            font-weight: 700;
        }
    }
`;

S.ProfileImage = styled.div`
    width: 40px;
    height: 34px;
`;

/////////////////////////////////////////상품나열

S.ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 65px;
    margin-bottom: 200px;
`;

S.ProductHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 150px;

    h2 {
        text-align: left;
        font-size: ${theme.FONT_SIZE.h4};
        font-weight: ${theme.FONT_WEIGHT.bold};
    }

    a {
        text-align: right;
        margin-top: 0;
    }
`;

S.ProductsWrap = styled.div`
    width: 1440px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
`;

S.Products = styled.div`
    display: flex;
    width: 1440px;
    flex-wrap: wrap;
    column-gap: 24px;
    row-gap: 40px;
`;

S.ProductCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 220px;
    height: 345px;
    overflow: hidden;
    position: relative;
    background-color: #fff;

    .like-icon {
        width: 20px;
        height: 20px;
        position: absolute;
        top: 10px;
        right: 10px;
    }

    img {
        border-radius: 10px;
        width: 100%;
    }
`;

S.CardImage = styled.div`
    width: 100%;
    height: 100%;
    background-color: #f0f0f0;
`;

S.CardTextWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 14px 0 6px 0;
    width: 100%;
    gap: 6px;
    flex : 1;

    & b {
        text-align: left;
    }
`;

S.ProductName = styled.p`
    width: 220px;
    text-align: left;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 18px;
    font-size: ${theme.FONT_SIZE.h8};
`;

S.DiscountText = styled.div`
    display: flex;
`;

S.CardCart = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    border: solid 1px #e0e0e0;
    background-color: white;
    margin-top: 18px;
    width: 230px;
    height: 30px;

    & a {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
    }
`;

S.CardCartIcon = styled.div`
    width: 16px;
    height: 16px;
`;

S.SubBanner = styled.div`
    width: 100%;
    text-align: center;
`;

const moveInCircle = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const moveVertical = keyframes`
  0% {
    transform: translateY(-50%);
  }
  50% {
    transform: translateY(50%);
  }
  100% {
    transform: translateY(-50%);
  }
`;

const moveHorizontal = keyframes`
  0% {
    transform: translateX(-50%) translateY(-10%);
  }
  50% {
    transform: translateX(50%) translateY(10%);
  }
  100% {
    transform: translateX(-50%) translateY(-10%);
  }
`;

S.GradientBackground = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  background: linear-gradient(40deg, rgba(183, 16, 232, 1),rgba(97, 16, 232, 1));
  top: 0;
  left: 0;

  .gradients-container {
    filter: url(#goo) blur(40px);
    width: 100%;
    height: 100%;
  }

  .g1,
  .g2,
  .g3,
  .g4,
  .g5 {
    position: absolute;
    mix-blend-mode: hard-light;
    width: 80%;
    height: 80%;
    top: calc(50% - 80% / 2);
    left: calc(50% - 80% / 2);
    opacity: 1;
  }

  .g1 {
    background: radial-gradient(circle at center, rgba(232, 16, 16, 1) 0, rgba(253, 130, 11, 0) 50%) no-repeat;
    animation: ${moveVertical} 10s ease infinite;
  }

  .g2 {
    background: radial-gradient(circle at center, rgba(56, 232, 16, 1) 0, rgba(255, 218, 58, 0) 50%) no-repeat;
    transform-origin: calc(50% - 400px);
    animation: ${moveInCircle} 20s reverse infinite;
  }

  .g3 {
    background: radial-gradient(circle at center, rgba(232, 228, 16, 1) 0, rgba(169, 144, 221, 0) 50%) no-repeat;
    animation: ${moveHorizontal} 10s ease infinite;
  }

  .g4 {
    background: radial-gradient(circle at center, rgba(16, 115, 232, 1) 0, rgba(16, 233, 231, 0) 50%) no-repeat;
    animation: ${moveInCircle} 15s infinite;
  }

  .g5 {
    background: radial-gradient(circle at center, rgba(232, 16, 196, 1) 0, rgba(34, 193, 195, 0) 50%) no-repeat;
    animation: ${moveVertical} 15s infinite;
  }
`;


S.Text = styled.div`
  position: absolute;
  width: 1400px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* font-size: 2rem; */
  color: #FFFFFF;
  text-align: center;
  font-family: Arial, sans-serif;
  font-weight: bold;

  & p:nth-child(1) {
    font-size: 100px;

  }
`;



export default S;