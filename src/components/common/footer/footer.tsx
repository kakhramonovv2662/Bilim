import { SvgIcon } from "@components/svgIcon";
import { HeaderList, HeaderListItem } from "../header/style/header.style";
import { FooterStyle } from "./style/footer.style";

const FooterMain = () => {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer-container">
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
          </HeaderList>
        </div>
        <p className="footer-text">
          Bizning web-saytimizdan foydalanganingiz uchun tashakkur!
        </p>
      </div>
    </FooterStyle>
  );
};

export default FooterMain;
