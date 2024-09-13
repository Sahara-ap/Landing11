export interface ISocialItem {
  name: string;
  src: string;
  text: string;
  linkTo: string;
}

export const socialItems: ISocialItem[] = [
  {
    name: "Vk",
    src: 'svg/footer/VK.svg',
    text: "Мы вконтакте",
    linkTo: "#",
  },
  {
    name: "email",
    src: 'svg/footer/email.svg',
    text: "info@ipsum228.com",
    linkTo: "#",
  },
];
