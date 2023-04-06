import React from "react";
import user from '../../asset/user.png';
import logout from '../../asset/logout.png';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
    height: 121px;
    width: 100%;
    background-color: #171D44;
    color: #FFF;
`

const HeaderElementWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    padding-top: 20px;
`

const ProfileWrapper = styled.div`
    padding-top: 10px;
`

const Title = styled.p`
    padding-top: 10px;
`

const ITINOVBrand = styled.img`
    width: auto;
    max-height: 50px;
`

const Logo = styled.img`
    width: auto;
    max-height: 20px;
    margin-right: 20px;
`
const LinkHeader = styled.div`
    margin-top: 15px;
    display: flex;
    justify-content: space-around;
`

const Link = styled.a`
    color: #FFF;
    border-color: white;
`

const Header = () => {
    return (
    <React.Fragment>
        <HeaderWrapper>
        <HeaderElementWrapper>
            <ITINOVBrand src="https://itinov.fr/wp-content/uploads/2022/02/cropped-element_charte_RVB_LOGO3.png" alt="ITINOV Logo" />
            <Title>Welcome back Jérémie Bourliaud !</Title>
            <ProfileWrapper>
                <Logo src={user} alt="Profile Logo" />
                <Logo src={logout} alt="Logout Logo" />
            </ProfileWrapper>
        </HeaderElementWrapper>
        <LinkHeader>
            <Link href="/">Comptes</Link>
            <Link href="/transfert">Virement</Link>
        </LinkHeader>
        </HeaderWrapper>
    </React.Fragment>
    )
};

export default Header; 