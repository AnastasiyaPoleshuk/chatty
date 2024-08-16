import { message } from "antd";

export const success = (text: string) => {
  message.success({
    content: text,
    duration: 5,
    style: {
      marginTop: "20vh",
    },
  });
};

export const error = (text: string) => {
  message.error({
    content: text,
    duration: 5,
    style: {
      marginTop: "20vh",
    },
  });
};

export const warning = (text: string) => {
  return message.warning({
    content: text,
    duration: 5,
    style: {
      marginTop: "20vh",
    },
  });
};
