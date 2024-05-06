export default class TwBuilder {
  constructor(private text: string) {
    this.text = text;
  }

  setPosition(type: twPosition) {
    this.updateText(`${type} `);
    return this;
  }

  setTop(value: number) {
    this.updateText(`top-${value} `);
    return this;
  }
  setBottom(value: number) {
    this.updateText(`bottom-${value} `);
    return this;
  }
  setLeft(value: number) {
    this.updateText(`left-${value} `);
    return this;
  }
  setRight(value: number) {
    this.updateText(`right-${value} `);
    return this;
  }

  setText(
    size: twTextSize,
    weight: twTextWeight,
    color: string,
    align: twTextAlign
  ) {
    this.updateText(`text-${size} font-${weight} text-${align} text-${color} `);
    return this;
  }

  setCursor(type: twCursor) {
    this.updateText(`cursor-${type} `);
    return this;
  }

  setDisplay(type: twDisplay) {
    this.updateText(`${type} `);
    return this;
  }
  setFlexDirection(type: twFlexDirection) {
    this.updateText(`flex-${type} `);
    return this;
  }

  setFlexJustify(type: twFlexJustify) {
    this.updateText(`justify-${type} `);
    return this;
  }

  setAlignItem(type: twAlignItem) {
    this.updateText(`items-${type} `);
    return this;
  }

  setFilter(filter: string) {
    filter ? this.updateText(`${filter} `) : null;
    return this;
  }

  setSize(w: number | string, h: number | string) {
    this.updateText(`w-${w} h-${h} `);
    return this;
  }

  setMargin(m: number) {
    this.updateText(`m-${m} `);
    return this;
  }
  setMarginTop(m: number) {
    this.updateText(`mt-${m} `);
    return this;
  }
  setMarginBottom(m: number) {
    this.updateText(`mb-${m} `);
    return this;
  }
  setMarginLeft(m: number) {
    this.updateText(`ml-${m} `);
    return this;
  }
  setMarginRight(m: number) {
    this.updateText(`mr-${m} `);
    return this;
  }

  setPadding(p: number) {
    this.updateText(`p-${p} `);
    return this;
  }

  setPaddingTop(p: number) {
    this.updateText(`pt-${p} `);
    return this;
  }
  setPaddingBottom(p: number) {
    this.updateText(`pb-${p} `);
    return this;
  }
  setPaddingLeft(p: number) {
    this.updateText(`pl-${p} `);
    return this;
  }
  setPaddingRight(p: number) {
    this.updateText(`pr-${p} `);
    return this;
  }

  setBorder(thick: string | number, type: twBorder, color: string) {
    this.updateText(`border-${thick} border-${type} border-${color} `);
    return this;
  }
  setHoverBorder(thick: string | number, type: string, color: string) {
    this.updateText(
      `hover:border-${thick} hover:border-${type} hover:border-${color} `
    );
    return this;
  }

  setOutlineNone() {
    this.updateText(`outline-none `);
    return this;
  }
  setRadius(radius: string | number) {
    this.updateText(`rounded-${radius} `);
    return this;
  }

  setTransition(target: string, time: number, type: string) {
    this.updateText(`transition-${target} duration-${time} ${type} `);
    return this;
  }

  setHoverRadius(radius: string | number) {
    this.updateText(`hover:rounded-${radius} `);
    return this;
  }

  setBefore(content: string, color: string) {
    this.updateText(`before:content-["${content}"] before:text-${color} `);
    return this;
  }

  setAfter(content: string, color: string) {
    this.updateText(`after:content-["${content}"] after:text-${color} `);
    return this;
  }

  setBackgroundColor(color: String | twCustomColor) {
    this.updateText(`bg-${color} `);
    return this;
  }
  build() {
    const rtext = this.text.trim();
    this.text = "";
    return rtext;
  }

  updateText(text: string) {
    this.text = this.text.concat(text);
  }
}
