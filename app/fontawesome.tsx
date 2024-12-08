import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false; // Avoids conflicts with Css server side rendering

export default function FontAwesomeConfig() {
  return null;
}