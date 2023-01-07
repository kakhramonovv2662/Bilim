import {
  FooterButton,
  FooterText,
  FooterTitle,
  HeroContainer,
  MainContainer,
} from "@main/styles/style";

const Footer = () => {
  return (
    <MainContainer>
      <HeroContainer>
        <div className="container hero-container">
          <div className="footer-wrapper">
            <FooterTitle>
              Dasturiy ta`minot loyihangizni professional kabi ishga tushiring
            </FooterTitle>
            <FooterText>
              Dasturiy ta`minot loyihangizni ishga tushirishni va maqsadli
              foydalanuvchilaringizdan qiziqishni olishni xohlaysizmi? Bizning
              premium Bootstrap 5 ishga tushirish shablonimiz CoderPro bilan
              tanishing ! Unda mahsulotingizni reklama qilish uchun kerak
              bo`lgan hamma narsa mavjud.
            </FooterText>
            <FooterButton>
              CoderPro Yuklab Olish <i className="fa fa-download"></i>
            </FooterButton>
          </div>
        </div>
      </HeroContainer>
    </MainContainer>
  );
};

export default Footer;
