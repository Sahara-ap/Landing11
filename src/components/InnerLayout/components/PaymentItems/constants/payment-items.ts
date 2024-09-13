export interface IPaymentItem {
  name: string;
  src: string;
  text: string;
  linkTo: string;
}

export const paymentItems: IPaymentItem[] = [
  {
    name: "qiwi wallet",
    src: 'svg/footer/qiwi.svg',
    text: "Qiwi wallet",
    linkTo: "#",
  },
  {
    name: "yandex money",
    src: 'svg/footer/yam.svg',
    text: "Yandex Money",
    linkTo: "#",
  },
  {
    name: "web money",
    src: 'svg/footer/wm.svg',
    text: "Web Money",
    linkTo: "#",
  },
];
