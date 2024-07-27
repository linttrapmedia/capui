import { theme } from "../../state/Theme";
import { Theme } from "../../state/typings";

export const DEFAULT_TYPOGRAPHY_SETTINGS: Theme["components"]["typography"] = {
  colorToken: "--text-500",
};

export const typographyStylesheet = new CSSStyleSheet();

export const renderTypographyStylesheet = () => {
  const settings = theme.get().components.typography ?? DEFAULT_TYPOGRAPHY_SETTINGS;

  const typographyTagList = ".h1, .h2, .h3, .h4, .h5, .h6, .p, .span, .div, .li, .td, .th, .summary";

  const styles = `
.h1 { 
  font-family: var(--font-sans);
  font-size: var(--text-size-500, 4ch); 
  font-weight: var(--text-weight-500, 500); 
  line-height: var(--text-line-height-500, 1); 
  padding: 0;
  margin: 0;
}

.h2 { 
  font-family: var(--font-sans);
  font-size: var(--text-size-400, 3ch); 
  font-weight: var(--text-weight-400, 500); 
  line-height: var(--text-line-height-400, 1); 
  padding: 0;
  margin: 0;
}

.h3 { 
  font-family: var(--font-sans);
  font-size: var(--text-size-300, 2.5ch); 
  font-weight: var(--text-weight-300, 500); 
  line-height: var(--text-line-height-300, 1); 
  padding: 0;
  margin: 0;
}

.h4 { 
  font-family: var(--font-sans);
  font-size: var(--text-size-200, 2ch); 
  font-weight: var(--text-weight-200, 500); 
  line-height: var(--text-line-height-200, 1); 
  padding: 0;
  margin: 0;
}

.h5 { 
  font-family: var(--font-sans);
  font-size: var(--text-size-100, 1.5ch); 
  font-weight: var(--text-weight-100, 500); 
  line-height: var(--text-line-height-100, 1); 
  padding: 0;
  margin: 0;
}

.h6 { 
  font-family: var(--font-sans);
  font-size: var(--text-size-100, 1ch); 
  font-weight: var(--text-weight-100, 500); 
  line-height: var(--text-line-height-100, 1); 
  padding: 0;
  margin: 0;
}

.p{ 
  font-family: var(--font-serif);
  font-size: var(--text-size-300, 2ch); 
  font-weight: var(--text-weight-300, 500); 
  line-height: var(--text-line-height-300, 1); 
  padding: 0;
  margin: 0;
}

.span { 
  font-family: var(--font-serif);
  font-size: var(--text-size-300, 2ch); 
  font-weight: var(--text-weight-300, 500); 
  line-height: var(--text-line-height-300, 1); 
  padding: 0;
  margin: 0;
}

.div { 
  font-family: var(--font-serif);
  font-size: var(--text-size-300, 2ch); 
  font-weight: var(--text-weight-300, 500); 
  line-height: var(--text-line-height-300, 1); 
  padding: 0;
  margin: 0;
}

.li { 
  font-family: var(--font-serif);
  font-size: var(--text-size-300, 2ch); 
  font-weight: var(--text-weight-300, 500); 
  line-height: var(--text-line-height-300, 1); 
  padding: 0;
  margin: 0;
}

.td { 
  font-family: var(--font-serif);
  font-size: var(--text-size-300, 2ch); 
  font-weight: var(--text-weight-300, 500); 
  line-height: var(--text-line-height-300, 1); 
  padding: 0;
  margin: 0;
}

.th { 
  font-family: var(--font-serif);
  font-size: var(--text-size-300, 2ch); 
  font-weight: var(--text-weight-300, 500); 
  line-height: var(--text-line-height-300, 1); 
  padding: 0;
  margin: 0;
}

.summary { 
  font-family: var(--font-serif);
  font-size: var(--text-size-300, 2ch); 
  font-weight: var(--text-weight-300, 500); 
  line-height: var(--text-line-height-300, 1); 
  padding: 0;
  margin: 0;
}
`;

  return typographyStylesheet.replaceSync(styles);
};
