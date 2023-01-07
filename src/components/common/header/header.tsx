import { LogoBilim } from "@assets/images";
import { SvgIcon } from "@components/svgIcon";
import {
  HeaderButton,
  HeaderContainer,
  HeaderList,
  HeaderListItem,
  HeaderTop,
} from "./style/header.style";

const Header = () => {
  return (
    <HeaderTop>
      <HeaderContainer>
        <a href="/" className="header-link">
          <img src={LogoBilim} alt="logo" />
        </a>
        <HeaderList>
          <HeaderListItem>
            <a className="header-link" href="/">
              <SvgIcon
                iconName="github"
                width="22"
                height="22"
                iconColor="#5aa9ff"
                hoverColor="#4297f2"
              />
            </a>
          </HeaderListItem>
          <HeaderListItem>
            <a className="header-link" href="/">
              <SvgIcon
                iconName="instagram"
                width="24"
                height="22"
                iconColor="#5aa9ff"
                hoverColor="#4297f2"
              />
            </a>
          </HeaderListItem>
          <HeaderListItem>
            <a className="header-link" href="/">
              <SvgIcon
                iconName="telegram"
                width="22"
                height="22"
                iconColor="#5aa9ff"
                hoverColor="#4297f2"
              />
            </a>
          </HeaderListItem>
          <HeaderButton>Yuklab olish</HeaderButton>
        </HeaderList>
      </HeaderContainer>
    </HeaderTop>
  );
};

export default Header;
