import { SvgIcon } from "@components/svgIcon";
import {
  MainContainer,
  MainIcon,
  MainList,
  MainListItem,
  MainListItemLink,
  MainText,
} from "@main/styles/style";
import { MainDataTypes } from "src/modules/types";

const HeroData = [
  {
    iconName: "intro",
    title: "Kirish",
    text: "Bizning loyihamiz insonlarga manfaatli bo'lishi uchun yaratildi va bundan o'zingizga biroz bo'lsada bilim olsangiz biz bundan mamnunmiz.",
  },
  {
    iconName: "install",
    title: "Installation",
    text: "Section overview goes here. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
  },
  {
    iconName: "api",
    title: "APIs",
    text: "Section overview goes here. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
  },
  {
    iconName: "integration",
    title: "Integrations",
    text: "Section overview goes here. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
  },
  {
    iconName: "utiliti",
    title: "Utilities",
    text: "Section overview goes here. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
  },
  {
    iconName: "web",
    title: "Web",
    text: "Section overview goes here. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
  },
  {
    iconName: "mobile",
    title: "Mobile",
    text: "Section overview goes here. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
  },
  {
    iconName: "resources",
    title: "Resources",
    text: "Section overview goes here. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
  },
  {
    iconName: "faq",
    title: "FAQs",
    text: "Section overview goes here. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
  },
];

const HeroMain = () => {
  return (
    <MainContainer>
      <div className="container">
        <MainList>
          {HeroData?.map((items: MainDataTypes, index: number) => {
            return (
              <MainListItem key={index}>
                <MainListItemLink href="/">
                  <h2 className="main-title">
                    <MainIcon className="main-color">
                      <SvgIcon iconName={items.iconName} iconColor="#5aa9ff" />
                    </MainIcon>
                    {items.title}
                  </h2>
                  <MainText>{items.text}</MainText>
                </MainListItemLink>
              </MainListItem>
            );
          })}
        </MainList>
      </div>
    </MainContainer>
  );
};

export default HeroMain;
