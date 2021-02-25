import * as C2S from '@/composables/vendor/canvas2svg/canvas2svg';

type svgExportOptions = {
  width?: number;
  height?: number;
}

export default function exportAsSvg(uplot: any) {
  /*
    //Create a new mock canvas context. Pass in your desired width and height for your svg document.
var ctx = new C2S(500,500);

//draw your canvas like you would normally
ctx.fillStyle="red";
ctx.fillRect(100,100,100,100);
//etc...

//serialize your SVG
var mySerializedSVG = ctx.getSerializedSvg(); //true here, if you need to convert named to numbered entities.

//If you really need to you can access the shadow inline SVG created by calling:
var svg = ctx.getSvg();
*/

  return (options?: svgExportOptions) => {
    const opts = options || {};
    const width = opts.width || 640;
    const height = opts.height || 480;

    const ctx = new C2S(width, height);
    console.log(ctx);

    return ctx;
  };
}
