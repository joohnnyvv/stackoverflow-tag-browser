import ConnectionFailAlert from "../../../Components/Common/Alerts/ConnectionFailAlert";

export default {
  title: "Common/Alerts/Connection Fail Alert",
  component: ConnectionFailAlert,
  argTypes: {
    severity: {
      table: {
        disable: true,
      },
    },
    onClick: {
      table: {
        disable: true,
      },
    },
  },
};

const Template = (args) => {
  return (
    <ConnectionFailAlert
      onClick={(e) => {
        console.log(e);
      }}
      text={args.text}
      severity={args.severity}
    />
  );
};

const errorMsg =
  "Oops! There seems to be a connection problem. Please check your internet or try to refresh the page by clicking on this message.";

export const Error = Template.bind({});
Error.args = {
  text: errorMsg,
  severity: "error",
};
export const Success = Template.bind({});
Success.args = {
  text: errorMsg,
  severity: "success",
};
export const Info = Template.bind({});
Info.args = {
  text: errorMsg,
  severity: "info",
};
export const Warning = Template.bind({});
Warning.args = {
  text: errorMsg,
  severity: "warning",
};
