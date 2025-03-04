/// <reference types="vite-plugin-svgr/client" />

import Intervu from "@/assets/intervu.svg?react";

class Icons {
  readonly intervu = Intervu;
}

export const icons = new Icons();
export type iconNames = keyof Icons;
