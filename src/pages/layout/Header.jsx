import React, { useState, useRef } from 'react';
import S from "./style";
import { Link } from 'react-router-dom'

const Header = () => {

    const member = "ksh1234";
    const headerRef = useRef([]);
    const [isHover, setIsHover] = useState(false);

    const handleMouseOver = () => {
        setIsHover(true);
        headerRef.current[0].style.height = "240px";
        headerRef.current[0].style.backgroundColor = "#f8f9fa";
        headerRef.current[1].style.opacity = 1;
    }
    const handleMouseOut = () => {
        setIsHover(false);
        headerRef.current[0].style.height = "60px";
        headerRef.current[0].style.backgroundColor = "#fff";
        headerRef.current[1].style.opacity = 0;
    }

    return (
        <S.HeaderWrap ref={(el) => { headerRef.current[0] = el }} onMouseOut={handleMouseOut}>
            <S.Header>
                <S.LogoWrap>
                    <Link to={"/"}><img src={`${process.env.PUBLIC_URL}/assets/images/layout/logo.png`} alt="로고" /></Link>
                </S.LogoWrap>
                <S.MenuWrap onMouseOver={handleMouseOver}>
                    <S.MainMenu>
                        <li><Link to={""}>마이펫</Link></li>
                        <li><Link to={""}>스토어</Link></li>
                        <li><Link to={""}>커뮤니티</Link></li>
                        <li><Link to={""}>마이홈</Link></li>
                    </S.MainMenu>
                    <S.SubMenuWrap ref={(el) => { headerRef.current[1] = el }}>
                        <S.SubMenu>
                            <li><Link to={""}>펫스널컬러테스트</Link></li>
                            <li></li>
                        </S.SubMenu>
                        <S.SubMenu>
                            <li><Link to={""}>강아지</Link></li>
                            <li><Link to={""}>고양이</Link></li>
                        </S.SubMenu>
                        <S.SubMenu>
                            <li><Link to={""}>추천 바구니</Link></li>
                            <li><Link to={""}>내 게시물</Link></li>
                        </S.SubMenu>
                        <S.SubMenu>
                            <li><Link to={""}>나의 정보</Link></li>
                            <li><Link to={""}>반려동물 정보</Link></li>
                        </S.SubMenu>
                    </S.SubMenuWrap>
                </S.MenuWrap>
                <S.IconWrap>
                    <Link to={""} ><img src={`${process.env.PUBLIC_URL}/assets/images/layout/search.png`} alt="로고"/></Link>
                    <Link to={""} ><img src={`${process.env.PUBLIC_URL}/assets/images/layout/delivery.png`} alt="로고"/></Link>
                    <Link to={""} ><img src={`${process.env.PUBLIC_URL}/assets/images/layout/cart.png`} alt="로고"/></Link>
                    <p>|</p>
                    { member ? (
                        <Link to={""}>로그아웃</Link>
                    ) : (
                        <Link to={""}>로그인</Link>
                    )}
                </S.IconWrap>
            </S.Header>
        </S.HeaderWrap>
    );
};

export default Header;