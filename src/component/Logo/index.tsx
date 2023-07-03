interface FontSize {
    fontSize?: JSX.Element | JSX.Element[] | string;
  }
  
  interface FontLogo {
    fontLogo?: JSX.Element | JSX.Element[] | string;
  }
  
  interface DesignLogo {
    fontSize: FontSize;
    fontLogo: FontLogo;
  }
  
  const ItensLogo: DesignLogo = {
    fontSize: {
      fontSize: "",
    },
    fontLogo: {
      fontLogo: "",
    },
  };



export function Logo({ fontSize, fontLogo }: any) {
    console.log(`text-${fontSize} font-${fontLogo} text-blueMain w-1/4 flex flex-col items-center`)
    return (
        <div className={`text-${fontSize} font-${fontLogo} text-blueLogo w-1/4 flex flex-col items-center cursor-pointer`}>
            <strong className="text-black">$</strong>
            <strong className="font-fontLogo subpixel-antialiased">SafeGold</strong>
        </div>
    )
}