import { Provider } from "react-redux";

import { store } from "../src/store";

import "antd/dist/antd.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <Provider store={store}>
      <Story />
    </Provider>
  )
]