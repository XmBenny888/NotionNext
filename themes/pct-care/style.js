import { Global } from '@emotion/react'
import CONFIG from './config'

export const Style = () => (
  <Global
    styles={`
      :root {
        --primary: ${CONFIG.PRIMARY_COLOR};
        --secondary: ${CONFIG.SECONDARY_COLOR};
        --background: ${CONFIG.BACKGROUND_COLOR};
        --surface: ${CONFIG.SURFACE_COLOR};
        --foreground: ${CONFIG.FOREGROUND_COLOR};
        --text-body: ${CONFIG.TEXT_BODY_COLOR};
      }

      /* 导入Google字体 */
      @import url('https://fonts.googleapis.com/css2?family=${CONFIG.FONT_SERIF[0]}:wght@400;700&family=${CONFIG.FONT_SANS[0]}:wght@400;700&display=swap');
    `}
  />
)