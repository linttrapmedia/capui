import { themeState, themesState } from "../../state";

export const tokensStyleSheet = new CSSStyleSheet();

export const syncTokensStyleSheet = () => {
  const theme = themesState.get()[themeState.get()];
  const { colors } = theme;
  const tokens = `
:root {
  --token-color-black: ${colors.black[0]};
  --token-color-black-contrast: ${colors.black[1]};
  --token-color-brand: ${colors.brand[0]};
  --token-color-brand-contrast: ${colors.brand[1]};
  --token-color-error: ${colors.error[0]};
  --token-color-error-contrast: ${colors.error[1]};
  --token-color-grey: ${colors.grey[0]};
  --token-color-grey-contrast: ${colors.grey[1]};
  --token-color-info: ${colors.info[0]};
  --token-color-info-contrast: ${colors.info[1]};
  --token-color-action: ${colors.action[0]};
  --token-color-action-contrast: ${colors.action[1]};
  --token-color-success: ${colors.success[0]};
  --token-color-success-contrast: ${colors.success[1]};
  --token-color-warning: ${colors.warning[0]};
  --token-color-warning-contrast: ${colors.warning[1]};
  --token-color-white: ${colors.white[0]};
  --token-color-white-contrast: ${colors.white[1]};
}
`;
  tokensStyleSheet.replaceSync(tokens);
};
