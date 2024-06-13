export const dashboardStyleSheet = new CSSStyleSheet();

export const syncDashboardStyleSheet = () => {
  const bg = `var(--token-color-background, black)`;
  const bgHueVar = `var(--token-color-background-hue)`;
  const bgSaturationVar = `var(--token-color-background-saturation)`;
  const bgLightnessVar = `var(--token-color-background-lightness)`;

  return dashboardStyleSheet.replaceSync(`
        @media (min-width: 0px) {
            .dashboard {
                --bg-color: ${bg};
                --nav-bg-color: hsl(${bgHueVar}, ${bgSaturationVar}, calc(${bgLightnessVar} + 1.5%));
                --main-bg-color: hsl(${bgHueVar}, ${bgSaturationVar}, calc(${bgLightnessVar} + 0%));
                --aside-bg-color: hsl(${bgHueVar}, ${bgSaturationVar}, calc(${bgLightnessVar} + 1.5%));
                --scrollbar-thumb-color: var(--token-color-background, black);
                --scrollbar-track-color: var(--token-color-white, white);
                --text-color: var(--token-color-white, white);
                background-color: var(--bg-color);
                box-sizing: border-box;
                color: var(--text-color);
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 0;
            }
        
            .dashboard__nav-header,
            .dashboard__nav,
            .dashboard__nav-footer,
            .dashboard__main-header,
            .dashboard__main,
            .dashboard__main-footer,
            .dashboard__aside-header,
            .dashboard__aside,
            .dashboard__aside-footer {
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 20px;
            }
            .dashboard__main::-webkit-scrollbar,
            .dashboard__aside::-webkit-scrollbar,
            .dashboard__nav::-webkit-scrollbar {
                width: 0;
            }
        
            .dashboard__main::-webkit-scrollbar-track,
            .dashboard__aside::-webkit-scrollbar-track,
            .dashboard__nav::-webkit-scrollbar-track {
                background: var(--bg-color);
            }
        
            .dashboard__main::-webkit-scrollbar-thumb,
            .dashboard__aside::-webkit-scrollbar-thumb,
            .dashboard__nav::-webkit-scrollbar-thumb {
                background-color: rgba(255, 255, 255, 0.055);
                border-radius: 20px;
                border: 3px solid var(--bg-color);
            }
        
            .dashboard__nav-header,
            .dashboard__nav,
            .dashboard__nav-footer {
                background-color: var(--nav-bg-color);
            }
        
            .dashboard__main-header,
            .dashboard__main,
            .dashboard__main-footer {
                background-color: var(--main-bg-color);
            }
        
            .dashboard__aside-header,
            .dashboard__aside,
            .dashboard__aside-footer {
                background-color: var(--aside-bg-color);
            }
        }
        
        @media (min-width: 768px) {
            .dashboard {
                align-items: flex-start;
                display: grid;
                grid-template-columns: max-content 2fr min-content;
                grid-template-rows: max-content 1fr max-content;
                height: 100vh;
                overflow-y: auto;
                margin: 0 auto;
                max-height: 100vh;
                width: 100%;
            }
        
            .dashboard__nav-header {
                grid-row: 1/2;
                grid-column: 1/2;
                display: flex;
                flex-direction: column;
                align-items: center;
            }
        
            .dashboard__nav {
                grid-column: 1/2;
                grid-row: 2/3;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: flex-start;
                overflow-y: auto;
                height: 100%;
            }
            .dashboard__nav-footer {
                grid-column: 1/2;
                grid-row: 3/4;
            }
        
            
            .dashboard__main-header {
                align-items: flex-start;
                justify-content: center;
                display: flex;
                flex-direction: column;
                height: 100%;
                grid-row: 1/2;
                grid-column: 2/3;
            }
            .dashboard__main {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                grid-row: 2/3;
                grid-column: 2/3;
                overflow-y: auto;
                height: 100%;
            }
            .dashboard__main-footer {
                grid-row: 3/4;
                grid-column: 2/3;
            }
            .dashboard__aside-header {
                grid-row: 1/2;
                grid-column: 3/4;
                align-items: flex-end;
                justify-content: center;
                display: flex;
                flex-direction: column;
                height: 100%;
            }
            .dashboard__aside {
                grid-column: 3/4;
                grid-row: 2/3;
                overflow-y: auto;
                height: 100%;
            }
            .dashboard__aside-footer {
                grid-column: 3/4;
                grid-row: 3/4;
                display: flex;
                flex-direction: column;
                align-items: flex-end;
            }
        }`);
};
