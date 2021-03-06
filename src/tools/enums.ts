enum TranslatorType {
  Google,
  Youdao,
  Baidu
}

enum FrameMode {
  Contrast,
  Focus
}

enum HideDirection {
  Up,
  Right,
  Left,
  None,
  Minify
}

enum YoudaoStatus {
  Success,
  Fail
}

enum MessageType {
  WindowOpt,
  TranslateResult,
  OpenMenu,
  Router
}

enum WinOpt {
  Minify,
  Drag,
  Resize,
  Zoom,
  OpenExternal,
  ChangeColor
}

function rgb(r: number, g: number, b: number) {
  const R = Math.floor(r / 16).toString(16) + Math.floor(r % 16).toString(16);
  const G = Math.floor(g / 16).toString(16) + Math.floor(g % 16).toString(16);
  const B = Math.floor(b / 16).toString(16) + Math.floor(b % 16).toString(16);
  const t = "#" + R + G + B;
  return t;
}

function mkenum<T extends { [index: string]: U }, U extends string>(x: T) {
  return x;
}

const ColorStatus = mkenum({
  None: rgb(190, 190, 190),
  Listen: rgb(84, 255, 159),
  AutoCopy: rgb(152, 245, 255),
  Translating: rgb(238, 238, 0),
  Incremental: rgb(147, 112, 219),
  IncrementalCopy: rgb(199, 21, 133),
  Fail: rgb(255, 0, 0)
});
type ColorStatus = (typeof ColorStatus)[keyof typeof ColorStatus];

export {
  TranslatorType,
  FrameMode,
  YoudaoStatus,
  ColorStatus,
  MessageType,
  WinOpt,
  HideDirection
};
