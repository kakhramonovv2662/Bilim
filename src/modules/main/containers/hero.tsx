import { HeroContainer, MainContainer } from "@main/styles/style";

const Hero = () => {
  return (
    <MainContainer>
      <HeroContainer>
        <div className="container hero-container">
          <div className="container-wrapper">
            <h2 className="hero-title">Dokumentatsiya</h2>
            <p className="hero-text">
              Dasturlash sohasi uchun mo`jallangan ma`lumotlardan foydalanib
              o`zingizga kerak bo`lgan savollarga javob topng...
            </p>
            <input
              className="hero-search-input"
              type="search"
              placeholder="Ma'lumot qidirish..."
            />
          </div>
        </div>
      </HeroContainer>
    </MainContainer>
  );
};

export default Hero;
