interface FontSize {
    fontSize: string;
  }
  
  interface FontLogo {
    fontLogo: string;
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



export function Logo({ fontSize, fontLogo }: DesignLogo) {
    console.log('teste', fontLogo)
    return (
        <div className={`text-${ItensLogo.fontSize} font-${ItensLogo.fontLogo} text-blueMain w-1/4 flex flex-col items-center`}>
            <strong className="text-black">$</strong>
            <strong className="font-fontLogo subpixel-antialiased">SafeGold</strong>
        </div>
    )
}