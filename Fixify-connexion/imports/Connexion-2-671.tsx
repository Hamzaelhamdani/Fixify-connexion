import svgPaths from "./svg-fd10c1rcwy";
import imgImage15 from "figma:asset/b76f56ecf0b331b42f0a11deda3f7c20a14addcb.png";
import imgImage14 from "figma:asset/679098936045181c043b733284c4dca7b7e110ca.png";
import imgImage17 from "figma:asset/00e57293819b450283a70565fd7cea3ef841967b.png";
import imgImage25 from "figma:asset/62778d3fb2898db7b5f423b72a740187804d7731.png";

function Section() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-[72px] left-[325px] top-[134px] w-[839px]"
      data-name="section"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-9 leading-[0] left-[38px] not-italic text-[30px] text-left text-neutral-900 top-[-18px] w-[598px]">
        <p className="block leading-[36px]">
          Réparateurs disponibles dans votre région
        </p>
      </div>
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[0] left-28 not-italic text-[20px] text-left text-neutral-600 text-nowrap top-8">
        <p className="block leading-[28px] whitespace-pre">
          Trouvez le meilleur réparateur pour vos besoins
        </p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 size-4" data-name="Frame">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Frame">
          <g clipPath="url(#clip0_2_347)">
            <path
              d={svgPaths.p1d73a600}
              fill="var(--fill-0, #A3A3A3)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_2_347">
            <path d="M0 0H16V16H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-center justify-center left-4 overflow-clip p-0 size-4 top-[17px]"
      data-name="Frame"
    >
      <Frame />
    </div>
  );
}

function Input() {
  return (
    <div
      className="absolute bg-[#ffffff] h-[50px] left-0 rounded-lg top-0 w-[1232px]"
      data-name="input"
    >
      <div className="absolute border border-neutral-300 border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[50px] justify-center leading-[0] left-12 not-italic text-[#adaebc] text-[16px] text-left top-[25px] translate-y-[-50%] w-[360px]">
        <p className="block leading-[24px]">
          Rechercher par nom, disponibilité, localisation…
        </p>
      </div>
    </div>
  );
}

function Div() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-[50px] left-0 top-0 w-[1232px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Frame1 />
      <Input />
    </div>
  );
}

function Button() {
  return (
    <div
      className="absolute bg-neutral-900 h-9 left-0 rounded-[9999px] top-0 w-[64.016px]"
      data-name="button"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-5 leading-[0] left-8 not-italic text-[#ffffff] text-[14px] text-center top-[7.9px] translate-x-[-50%] w-8">
        <p className="block leading-[normal]">Tous</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div
      className="absolute bg-neutral-100 h-9 left-[76.016px] rounded-[9999px] top-0 w-[79px]"
      data-name="button"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-5 leading-[0] left-[39.5px] not-italic text-[14px] text-center text-neutral-700 top-[7.9px] translate-x-[-50%] w-[47px]">
        <p className="block leading-[normal]">Agréés</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div
      className="absolute bg-neutral-100 h-9 left-[167.016px] rounded-[9999px] top-0 w-[112.719px]"
      data-name="button"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-5 leading-[0] left-[56.5px] not-italic text-[14px] text-center text-neutral-700 top-[7.9px] translate-x-[-50%] w-[81px]">
        <p className="block leading-[normal]">Mieux notés</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div
      className="absolute bg-neutral-100 h-9 left-[291.734px] rounded-[9999px] top-0 w-[106.594px]"
      data-name="button"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-5 leading-[0] left-[53.5px] not-italic text-[14px] text-center text-neutral-700 top-[7.6px] translate-x-[-50%] w-[75px]">
        <p className="block leading-[normal]">À proximité</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div
      className="absolute bg-neutral-100 h-9 left-[410.328px] rounded-[9999px] top-0 w-[178.953px]"
      data-name="button"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-5 leading-[0] left-[90px] not-italic text-[14px] text-center text-neutral-700 top-[7.9px] translate-x-[-50%] w-[148px]">
        <p className="block leading-[normal]">Disponible maintenant</p>
      </div>
    </div>
  );
}

function Div1() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-9 left-0 top-[74px] w-[1232px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Button />
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 size-4" data-name="Frame">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Frame">
          <path d="M16 16H0V0H16V16Z" stroke="var(--stroke-0, #E5E7EB)" />
          <path
            d={svgPaths.pae62080}
            fill="var(--fill-0, #404040)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-center justify-center left-[17px] overflow-clip p-0 size-4 top-[13px]"
      data-name="Frame"
    >
      <Frame2 />
    </div>
  );
}

function Button5() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-[42px] left-0 rounded-lg top-[126px] w-[171.719px]"
      data-name="button"
    >
      <div className="absolute border border-neutral-300 border-solid inset-0 pointer-events-none rounded-lg" />
      <Frame3 />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-6 leading-[0] left-[97.5px] not-italic text-[16px] text-center text-neutral-700 top-[7.88px] translate-x-[-50%] w-[113px]">
        <p className="block leading-[24px]">Filtres avancés</p>
      </div>
    </div>
  );
}

function Section1() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-[173px] left-20 top-[250px] w-[1348px]"
      data-name="section"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div />
      <Div1 />
      <Button5 />
    </div>
  );
}

function Div2() {
  return (
    <div
      className="absolute bg-neutral-100 h-6 left-[253.047px] rounded-[9999px] top-[17px] w-[49.953px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-4 leading-[0] left-2 not-italic text-[12px] text-left text-neutral-800 top-[3.2px] w-[34px]">
        <p className="block leading-[normal]">Agréé</p>
      </div>
    </div>
  );
}

function Span() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-4 left-[15.125px] top-6 w-[33.75px]"
      data-name="span"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-4 leading-[0] left-0 not-italic text-[#ffffff] text-[12px] text-left top-[-0.72px] w-[34px]">
        <p className="block leading-[normal]">LOGO</p>
      </div>
    </div>
  );
}

function Div3() {
  return (
    <div
      className="absolute bg-neutral-300 left-0 rounded-lg size-16 top-0"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-lg" />
      <Span />
    </div>
  );
}

function Div4() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-5 left-0 top-6 w-[113.422px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-5 leading-[0] left-0 not-italic text-[14px] text-left text-neutral-500 top-[-0.6px] w-3.5">
        <p className="block leading-[20px]">⭐</p>
      </div>
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-5 leading-[0] left-[12.25px] not-italic text-[#000000] text-[14px] text-left top-[-1.2px] w-[35px]">
        <p className="block leading-[20px]">4.9/5</p>
      </div>
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-5 leading-[0] left-[50.797px] not-italic text-[14px] text-left text-neutral-500 top-[-1.4px] w-16">
        <p className="block leading-[20px]">(127 avis)</p>
      </div>
    </div>
  );
}

function Div5() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-11 left-20 top-2.5 w-[113.422px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-6 leading-[0] left-0 not-italic text-[16px] text-left text-neutral-900 top-[-0.88px] w-[89px]">
        <p className="block leading-[24px]">TechFix Pro</p>
      </div>
      <Div4 />
    </div>
  );
}

function Div6() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-16 left-[25px] top-[25px] w-[270px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div3 />
      <Div5 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="h-3.5 relative shrink-0 w-[10.5px]" data-name="Frame">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 11 14"
      >
        <g id="Frame">
          <g clipPath="url(#clip0_2_344)">
            <path
              d={svgPaths.p2e125a80}
              fill="var(--fill-0, #525252)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_2_344">
            <path d="M0 0H10.5V14H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row h-3.5 items-center justify-center left-0 overflow-clip p-0 top-[3px] w-[10.5px]"
      data-name="Frame"
    >
      <Frame4 />
    </div>
  );
}

function Div7() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-5 left-0 top-0 w-[270px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Frame5 />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-5 leading-[0] left-[18.5px] not-italic text-[14px] text-left text-neutral-600 top-[-1.4px] w-[57px]">
        <p className="block leading-[20px]">à 2,3 km</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="h-3.5 relative shrink-0 w-[8.75px]" data-name="Frame">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 9 14"
      >
        <g id="Frame">
          <g clipPath="url(#clip0_2_339)">
            <path
              d={svgPaths.pd7cdf00}
              fill="var(--fill-0, #525252)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_2_339">
            <path d="M0 0H8.75V14H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row h-3.5 items-center justify-center left-0 overflow-clip p-0 top-[3px] w-[8.75px]"
      data-name="Frame"
    >
      <Frame6 />
    </div>
  );
}

function Div8() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-5 left-0 top-7 w-[270px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Frame7 />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-5 leading-[0] left-[16.75px] not-italic text-[14px] text-left text-neutral-600 top-[-1.2px] w-[76px]">
        <p className="block leading-[20px]">45 € - 80 €</p>
      </div>
    </div>
  );
}

function Div9() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-12 left-[25px] top-[105px] w-[270px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div7 />
      <Div8 />
    </div>
  );
}

function Button6() {
  return (
    <div
      className="absolute bg-neutral-900 h-10 left-[25px] rounded-lg top-[169px] w-[270px]"
      data-name="button"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-6 leading-[0] left-[134.594px] not-italic text-[#ffffff] text-[16px] text-center top-[8.56px] translate-x-[-50%] w-[65px]">
        <p className="block leading-[normal]">Voir plus</p>
      </div>
    </div>
  );
}

function Div10() {
  return (
    <div
      className="absolute bg-[#ffffff] h-[234px] left-0 rounded-lg top-0 w-80"
      data-name="div"
    >
      <div className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-lg" />
      <Div2 />
      <Div6 />
      <Div9 />
      <Button6 />
    </div>
  );
}

function Div11() {
  return (
    <div
      className="absolute bg-neutral-100 h-6 left-[229.719px] rounded-[9999px] top-[17px] w-[73.281px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-4 leading-[0] left-2 not-italic text-[12px] text-left text-neutral-800 top-[3.28px] w-[58px]">
        <p className="block leading-[normal]">Top Rated</p>
      </div>
    </div>
  );
}

function Span1() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-4 left-[15.125px] top-6 w-[33.75px]"
      data-name="span"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-4 leading-[0] left-0 not-italic text-[#ffffff] text-[12px] text-left top-[-0.72px] w-[34px]">
        <p className="block leading-[normal]">LOGO</p>
      </div>
    </div>
  );
}

function Div12() {
  return (
    <div
      className="absolute bg-neutral-300 left-0 rounded-lg size-16 top-0"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-lg" />
      <Span1 />
    </div>
  );
}

function Div13() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-5 left-0 top-6 w-[118.734px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-5 leading-[0] left-0 not-italic text-[14px] text-left text-neutral-500 top-[-0.6px] w-3.5">
        <p className="block leading-[20px]">⭐</p>
      </div>
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-5 leading-[0] left-[12.25px] not-italic text-[#000000] text-[14px] text-left top-[-1.2px] w-[35px]">
        <p className="block leading-[20px]">4.8/5</p>
      </div>
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-5 leading-[0] left-[50.563px] not-italic text-[14px] text-left text-neutral-500 top-[-1.4px] w-[58px]">
        <p className="block leading-[20px]">(89 avis)</p>
      </div>
    </div>
  );
}

function Div14() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-11 left-20 top-2.5 w-[118.734px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-6 leading-[0] left-0 not-italic text-[16px] text-left text-neutral-900 top-[-0.88px] w-[119px]">
        <p className="block leading-[24px]">Mobile Repair +</p>
      </div>
      <Div13 />
    </div>
  );
}

function Div15() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-16 left-[25px] top-[25px] w-[270px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div12 />
      <Div14 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="h-3.5 relative shrink-0 w-[10.5px]" data-name="Frame">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 11 14"
      >
        <g id="Frame">
          <g clipPath="url(#clip0_2_344)">
            <path
              d={svgPaths.p2e125a80}
              fill="var(--fill-0, #525252)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_2_344">
            <path d="M0 0H10.5V14H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row h-3.5 items-center justify-center left-0 overflow-clip p-0 top-[3px] w-[10.5px]"
      data-name="Frame"
    >
      <Frame8 />
    </div>
  );
}

function Div16() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-5 left-0 top-0 w-[270px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Frame9 />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-5 leading-[0] left-[18.5px] not-italic text-[14px] text-left text-neutral-600 top-[-1.4px] w-[54px]">
        <p className="block leading-[20px]">à 1,8 km</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="h-3.5 relative shrink-0 w-[8.75px]" data-name="Frame">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 9 14"
      >
        <g id="Frame">
          <g clipPath="url(#clip0_2_339)">
            <path
              d={svgPaths.pd7cdf00}
              fill="var(--fill-0, #525252)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_2_339">
            <path d="M0 0H8.75V14H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame11() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row h-3.5 items-center justify-center left-0 overflow-clip p-0 top-[3px] w-[8.75px]"
      data-name="Frame"
    >
      <Frame10 />
    </div>
  );
}

function Div17() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-5 left-0 top-7 w-[270px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Frame11 />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-5 leading-[0] left-[16.75px] not-italic text-[14px] text-left text-neutral-600 top-[-1.2px] w-[76px]">
        <p className="block leading-[20px]">35 € - 65 €</p>
      </div>
    </div>
  );
}

function Div18() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-12 left-[25px] top-[105px] w-[270px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div16 />
      <Div17 />
    </div>
  );
}

function Button7() {
  return (
    <div
      className="absolute bg-neutral-900 h-10 left-[25px] rounded-lg top-[169px] w-[270px]"
      data-name="button"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-6 leading-[0] left-[134.594px] not-italic text-[#ffffff] text-[16px] text-center top-[8.56px] translate-x-[-50%] w-[65px]">
        <p className="block leading-[normal]">Voir plus</p>
      </div>
    </div>
  );
}

function Div19() {
  return (
    <div
      className="absolute bg-[#ffffff] h-[234px] left-[344px] rounded-lg top-0 w-80"
      data-name="div"
    >
      <div className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-lg" />
      <Div11 />
      <Div15 />
      <Div18 />
      <Button7 />
    </div>
  );
}

function Div20() {
  return (
    <div
      className="absolute bg-neutral-100 h-6 left-[160.531px] rounded-[9999px] top-[17px] w-[142.469px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-4 leading-[0] left-2 not-italic text-[12px] text-left text-neutral-800 top-[3.28px] w-[125px]">
        <p className="block leading-[normal]">{`Disponible aujourd'hui`}</p>
      </div>
    </div>
  );
}

function Span2() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-4 left-[15.125px] top-6 w-[33.75px]"
      data-name="span"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-4 leading-[0] left-0 not-italic text-[#ffffff] text-[12px] text-left top-[-0.72px] w-[34px]">
        <p className="block leading-[normal]">LOGO</p>
      </div>
    </div>
  );
}

function Div21() {
  return (
    <div
      className="absolute bg-neutral-300 left-0 rounded-lg size-16 top-0"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-lg" />
      <Span2 />
    </div>
  );
}

function Div22() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-5 left-0 top-6 w-[139.844px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-5 leading-[0] left-0 not-italic text-[14px] text-left text-neutral-500 top-[-0.6px] w-3.5">
        <p className="block leading-[20px]">⭐</p>
      </div>
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-5 leading-[0] left-[12.25px] not-italic text-[#000000] text-[14px] text-left top-[-1.2px] w-[34px]">
        <p className="block leading-[20px]">4.7/5</p>
      </div>
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-5 leading-[0] left-[49.938px] not-italic text-[14px] text-left text-neutral-500 top-[-1.4px] w-16">
        <p className="block leading-[20px]">(156 avis)</p>
      </div>
    </div>
  );
}

function Div23() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-11 left-20 top-2.5 w-[139.844px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-6 leading-[0] left-0 not-italic text-[16px] text-left text-neutral-900 top-[-0.88px] w-[139px]">
        <p className="block leading-[24px]">QuickFix Solutions</p>
      </div>
      <Div22 />
    </div>
  );
}

function Div24() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-16 left-[25px] top-[25px] w-[270px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div21 />
      <Div23 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="h-3.5 relative shrink-0 w-[10.5px]" data-name="Frame">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 11 14"
      >
        <g id="Frame">
          <g clipPath="url(#clip0_2_344)">
            <path
              d={svgPaths.p2e125a80}
              fill="var(--fill-0, #525252)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_2_344">
            <path d="M0 0H10.5V14H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame13() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row h-3.5 items-center justify-center left-0 overflow-clip p-0 top-[3px] w-[10.5px]"
      data-name="Frame"
    >
      <Frame12 />
    </div>
  );
}

function Div25() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-5 left-0 top-0 w-[270px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Frame13 />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-5 leading-[0] left-[18.5px] not-italic text-[14px] text-left text-neutral-600 top-[-1.4px] w-[54px]">
        <p className="block leading-[20px]">à 3,1 km</p>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="h-3.5 relative shrink-0 w-[8.75px]" data-name="Frame">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 9 14"
      >
        <g id="Frame">
          <g clipPath="url(#clip0_2_339)">
            <path
              d={svgPaths.pd7cdf00}
              fill="var(--fill-0, #525252)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_2_339">
            <path d="M0 0H8.75V14H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame15() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row h-3.5 items-center justify-center left-0 overflow-clip p-0 top-[3px] w-[8.75px]"
      data-name="Frame"
    >
      <Frame14 />
    </div>
  );
}

function Div26() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-5 left-0 top-7 w-[270px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Frame15 />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-5 leading-[0] left-[16.75px] not-italic text-[14px] text-left text-neutral-600 top-[-1.2px] w-[75px]">
        <p className="block leading-[20px]">40 € - 75 €</p>
      </div>
    </div>
  );
}

function Div27() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-12 left-[25px] top-[105px] w-[270px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div25 />
      <Div26 />
    </div>
  );
}

function Button8() {
  return (
    <div
      className="absolute bg-neutral-900 h-10 left-[25px] rounded-lg top-[169px] w-[270px]"
      data-name="button"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-6 leading-[0] left-[134.594px] not-italic text-[#ffffff] text-[16px] text-center top-[8.56px] translate-x-[-50%] w-[65px]">
        <p className="block leading-[normal]">Voir plus</p>
      </div>
    </div>
  );
}

function Div28() {
  return (
    <div
      className="absolute bg-[#ffffff] h-[234px] left-[688px] rounded-lg top-0 w-80"
      data-name="div"
    >
      <div className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-lg" />
      <Div20 />
      <Div24 />
      <Div27 />
      <Button8 />
    </div>
  );
}

function Div29() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-[250px] left-0 top-14 w-[1232px]"
      data-name="div"
    >
      <div className="h-[250px] overflow-clip relative w-[1232px]">
        <Div10 />
        <Div19 />
        <Div28 />
      </div>
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Section2() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-[314px] left-20 top-[464px] w-[1348px]"
      data-name="section"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-8 leading-[0] left-0 not-italic text-[24px] text-left text-neutral-900 top-[-4.76px] w-[306px]">
        <p className="block leading-[32px]">Réparateurs recommandés</p>
      </div>
      <Div29 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="absolute left-[75px] size-[21px] top-2" data-name="Frame">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 21 21"
      >
        <g id="Frame">
          <path
            clipRule="evenodd"
            d={svgPaths.p1a6425c0}
            fill="var(--fill-0, black)"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Select() {
  return (
    <div
      className="absolute bg-[#ffffff] h-[37px] left-[68.297px] rounded-lg top-0 w-[104px]"
      data-name="select"
    >
      <div className="absolute border border-neutral-300 border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[37px] justify-center leading-[0] left-3 not-italic overflow-ellipsis overflow-hidden text-[#000000] text-[14px] text-left text-nowrap top-[18.5px] translate-y-[-50%] w-[58px]">
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[normal] overflow-inherit">
          Distance
        </p>
      </div>
      <Frame16 />
    </div>
  );
}

function Div30() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-[37px] left-[1059.7px] top-0 w-[172.297px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-5 leading-[0] left-0 not-italic text-[14px] text-left text-neutral-600 top-[7.3px] w-[60px]">
        <p className="block leading-[20px]">Trier par:</p>
      </div>
      <Select />
    </div>
  );
}

function Div31() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-[37px] left-0 top-0 w-[1232px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-8 leading-[0] left-0 not-italic text-[24px] text-left text-neutral-900 top-[-2.26px] w-[232px]">
        <p className="block leading-[32px]">Tous les réparateurs</p>
      </div>
      <Div30 />
    </div>
  );
}

function Span3() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-4 left-[7.125px] top-4 w-[33.75px]"
      data-name="span"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-4 leading-[0] left-0 not-italic text-[#ffffff] text-[12px] text-left top-[-0.72px] w-[34px]">
        <p className="block leading-[normal]">LOGO</p>
      </div>
    </div>
  );
}

function Div32() {
  return (
    <div
      className="absolute bg-neutral-300 left-0 rounded-lg size-12 top-0"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-lg" />
      <Span3 />
    </div>
  );
}

function Div33() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-5 left-0 top-6 w-[107.156px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-5 leading-[0] left-0 not-italic text-[14px] text-left text-neutral-500 top-[-0.6px] w-3.5">
        <p className="block leading-[20px]">⭐</p>
      </div>
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-5 leading-[0] left-[12.25px] not-italic text-[#000000] text-[14px] text-left top-[-1.2px] w-[35px]">
        <p className="block leading-[20px]">4.6/5</p>
      </div>
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-5 leading-[0] left-[50.547px] not-italic text-[14px] text-left text-neutral-500 top-[-1.4px] w-[57px]">
        <p className="block leading-[20px]">(74 avis)</p>
      </div>
    </div>
  );
}

function Div34() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-11 left-[60px] top-0.5 w-[107.156px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-6 leading-[0] left-0 not-italic text-[16px] text-left text-neutral-900 top-[-0.88px] w-[75px]">
        <p className="block leading-[24px]">ElectroFix</p>
      </div>
      <Div33 />
    </div>
  );
}

function Div35() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-12 left-[25px] top-[25px] w-[344.656px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div32 />
      <Div34 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="h-3.5 relative shrink-0 w-[10.5px]" data-name="Frame">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 11 14"
      >
        <g id="Frame">
          <g clipPath="url(#clip0_2_344)">
            <path
              d={svgPaths.p2e125a80}
              fill="var(--fill-0, #525252)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_2_344">
            <path d="M0 0H10.5V14H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame18() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row h-3.5 items-center justify-center left-0 overflow-clip p-0 top-[3px] w-[10.5px]"
      data-name="Frame"
    >
      <Frame17 />
    </div>
  );
}

function Div36() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-5 left-0 top-0 w-[344.656px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Frame18 />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-5 leading-[0] left-[18.5px] not-italic text-[14px] text-left text-neutral-600 top-[-1.4px] w-[57px]">
        <p className="block leading-[20px]">à 4,2 km</p>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="h-3.5 relative shrink-0 w-[8.75px]" data-name="Frame">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 9 14"
      >
        <g id="Frame">
          <g clipPath="url(#clip0_2_339)">
            <path
              d={svgPaths.pd7cdf00}
              fill="var(--fill-0, #525252)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_2_339">
            <path d="M0 0H8.75V14H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame20() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row h-3.5 items-center justify-center left-0 overflow-clip p-0 top-[3px] w-[8.75px]"
      data-name="Frame"
    >
      <Frame19 />
    </div>
  );
}

function Div37() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-5 left-0 top-7 w-[344.656px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Frame20 />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-5 leading-[0] left-[16.75px] not-italic text-[14px] text-left text-neutral-600 top-[-1.2px] w-[76px]">
        <p className="block leading-[20px]">30 € - 60 €</p>
      </div>
    </div>
  );
}

function Div38() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-12 left-[25px] top-[89px] w-[344.656px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div36 />
      <Div37 />
    </div>
  );
}

function Button9() {
  return (
    <div
      className="absolute bg-neutral-900 h-10 left-[25px] rounded-lg top-[153px] w-[344.656px]"
      data-name="button"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-6 leading-[0] left-[171.922px] not-italic text-[#ffffff] text-[16px] text-center top-[8.56px] translate-x-[-50%] w-[65px]">
        <p className="block leading-[normal]">Voir plus</p>
      </div>
    </div>
  );
}

function Div39() {
  return (
    <div
      className="absolute bg-[#ffffff] h-[218px] left-0 rounded-lg top-0 w-[394.656px]"
      data-name="div"
    >
      <div className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-lg" />
      <Div35 />
      <Div38 />
      <Button9 />
    </div>
  );
}

function Span4() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-4 left-[7.125px] top-4 w-[33.75px]"
      data-name="span"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-4 leading-[0] left-0 not-italic text-[#ffffff] text-[12px] text-left top-[-0.72px] w-[34px]">
        <p className="block leading-[normal]">LOGO</p>
      </div>
    </div>
  );
}

function Div40() {
  return (
    <div
      className="absolute bg-neutral-300 left-0 rounded-lg size-12 top-0"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-lg" />
      <Span4 />
    </div>
  );
}

function Div41() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-5 left-0 top-6 w-[108.016px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-5 leading-[0] left-0 not-italic text-[14px] text-left text-neutral-500 top-[-0.6px] w-3.5">
        <p className="block leading-[20px]">⭐</p>
      </div>
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-5 leading-[0] left-[12.25px] not-italic text-[#000000] text-[14px] text-left top-[-1.2px] w-[35px]">
        <p className="block leading-[20px]">4.5/5</p>
      </div>
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-5 leading-[0] left-[50.328px] not-italic text-[14px] text-left text-neutral-500 top-[-1.4px] w-[58px]">
        <p className="block leading-[20px]">(92 avis)</p>
      </div>
    </div>
  );
}

function Div42() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-11 left-[60px] top-0.5 w-[108.016px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-6 leading-[0] left-0 not-italic text-[16px] text-left text-neutral-900 top-[-0.88px] w-[98px]">
        <p className="block leading-[24px]">Smart Repair</p>
      </div>
      <Div41 />
    </div>
  );
}

function Div43() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-12 left-[25px] top-[25px] w-[344.672px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div40 />
      <Div42 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="h-3.5 relative shrink-0 w-[10.5px]" data-name="Frame">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 11 14"
      >
        <g id="Frame">
          <g clipPath="url(#clip0_2_344)">
            <path
              d={svgPaths.p2e125a80}
              fill="var(--fill-0, #525252)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_2_344">
            <path d="M0 0H10.5V14H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame22() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row h-3.5 items-center justify-center left-0 overflow-clip p-0 top-[3px] w-[10.5px]"
      data-name="Frame"
    >
      <Frame21 />
    </div>
  );
}

function Div44() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-5 left-0 top-0 w-[344.672px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Frame22 />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-5 leading-[0] left-[18.5px] not-italic text-[14px] text-left text-neutral-600 top-[-1.4px] w-14">
        <p className="block leading-[20px]">à 5,7 km</p>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="h-3.5 relative shrink-0 w-[8.75px]" data-name="Frame">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 9 14"
      >
        <g id="Frame">
          <g clipPath="url(#clip0_2_339)">
            <path
              d={svgPaths.pd7cdf00}
              fill="var(--fill-0, #525252)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_2_339">
            <path d="M0 0H8.75V14H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame24() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row h-3.5 items-center justify-center left-0 overflow-clip p-0 top-[3px] w-[8.75px]"
      data-name="Frame"
    >
      <Frame23 />
    </div>
  );
}

function Div45() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-5 left-0 top-7 w-[344.672px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Frame24 />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-5 leading-[0] left-[16.75px] not-italic text-[14px] text-left text-neutral-600 top-[-1.2px] w-[75px]">
        <p className="block leading-[20px]">25 € - 55 €</p>
      </div>
    </div>
  );
}

function Div46() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-12 left-[25px] top-[89px] w-[344.672px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div44 />
      <Div45 />
    </div>
  );
}

function Button10() {
  return (
    <div
      className="absolute bg-neutral-900 h-10 left-[25px] rounded-lg top-[153px] w-[344.672px]"
      data-name="button"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-6 leading-[0] left-[171.938px] not-italic text-[#ffffff] text-[16px] text-center top-[8.56px] translate-x-[-50%] w-[65px]">
        <p className="block leading-[normal]">Voir plus</p>
      </div>
    </div>
  );
}

function Div47() {
  return (
    <div
      className="absolute bg-[#ffffff] h-[218px] left-[418.656px] rounded-lg top-0 w-[394.672px]"
      data-name="div"
    >
      <div className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-lg" />
      <Div43 />
      <Div46 />
      <Button10 />
    </div>
  );
}

function Span5() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-4 left-[7.125px] top-4 w-[33.75px]"
      data-name="span"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-4 leading-[0] left-0 not-italic text-[#ffffff] text-[12px] text-left top-[-0.72px] w-[34px]">
        <p className="block leading-[normal]">LOGO</p>
      </div>
    </div>
  );
}

function Div48() {
  return (
    <div
      className="absolute bg-neutral-300 left-0 rounded-lg size-12 top-0"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-lg" />
      <Span5 />
    </div>
  );
}

function Div49() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-5 left-0 top-6 w-[109.062px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-5 leading-[0] left-0 not-italic text-[14px] text-left text-neutral-500 top-[-0.6px] w-3.5">
        <p className="block leading-[20px]">⭐</p>
      </div>
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-5 leading-[0] left-[12.25px] not-italic text-[#000000] text-[14px] text-left top-[-1.2px] w-[35px]">
        <p className="block leading-[20px]">4.4/5</p>
      </div>
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-5 leading-[0] left-[51.25px] not-italic text-[14px] text-left text-neutral-500 top-[-1.4px] w-[58px]">
        <p className="block leading-[20px]">(68 avis)</p>
      </div>
    </div>
  );
}

function Div50() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-11 left-[60px] top-0.5 w-[109.062px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-6 leading-[0] left-0 not-italic text-[16px] text-left text-neutral-900 top-[-0.88px] w-[103px]">
        <p className="block leading-[24px]">TechCare Pro</p>
      </div>
      <Div49 />
    </div>
  );
}

function Div51() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-12 left-[25px] top-[25px] w-[344.656px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div48 />
      <Div50 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="h-3.5 relative shrink-0 w-[10.5px]" data-name="Frame">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 11 14"
      >
        <g id="Frame">
          <g clipPath="url(#clip0_2_344)">
            <path
              d={svgPaths.p2e125a80}
              fill="var(--fill-0, #525252)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_2_344">
            <path d="M0 0H10.5V14H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame26() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row h-3.5 items-center justify-center left-0 overflow-clip p-0 top-[3px] w-[10.5px]"
      data-name="Frame"
    >
      <Frame25 />
    </div>
  );
}

function Div52() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-5 left-0 top-0 w-[344.656px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Frame26 />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-5 leading-[0] left-[18.5px] not-italic text-[14px] text-left text-neutral-600 top-[-1.4px] w-[57px]">
        <p className="block leading-[20px]">à 6,3 km</p>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="h-3.5 relative shrink-0 w-[8.75px]" data-name="Frame">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 9 14"
      >
        <g id="Frame">
          <g clipPath="url(#clip0_2_339)">
            <path
              d={svgPaths.pd7cdf00}
              fill="var(--fill-0, #525252)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_2_339">
            <path d="M0 0H8.75V14H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame28() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row h-3.5 items-center justify-center left-0 overflow-clip p-0 top-[3px] w-[8.75px]"
      data-name="Frame"
    >
      <Frame27 />
    </div>
  );
}

function Div53() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-5 left-0 top-7 w-[344.656px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Frame28 />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-5 leading-[0] left-[16.75px] not-italic text-[14px] text-left text-neutral-600 top-[-1.2px] w-[75px]">
        <p className="block leading-[20px]">35 € - 70 €</p>
      </div>
    </div>
  );
}

function Div54() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-12 left-[25px] top-[89px] w-[344.656px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div52 />
      <Div53 />
    </div>
  );
}

function Button11() {
  return (
    <div
      className="absolute bg-neutral-900 h-10 left-[25px] rounded-lg top-[153px] w-[344.656px]"
      data-name="button"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-6 leading-[0] left-[171.922px] not-italic text-[#ffffff] text-[16px] text-center top-[8.56px] translate-x-[-50%] w-[65px]">
        <p className="block leading-[normal]">Voir plus</p>
      </div>
    </div>
  );
}

function Div55() {
  return (
    <div
      className="absolute bg-[#ffffff] h-[218px] left-[837.328px] rounded-lg top-0 w-[394.656px]"
      data-name="div"
    >
      <div className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-lg" />
      <Div51 />
      <Div54 />
      <Button11 />
    </div>
  );
}

function Div56() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-[218px] left-0 top-[61px] w-[1232px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div39 />
      <Div47 />
      <Div55 />
    </div>
  );
}

function Section3() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-[287px] left-20 top-[827px] w-[1348px]"
      data-name="section"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div31 />
      <Div56 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="relative shrink-0 size-4" data-name="Frame">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Frame">
          <path d="M16 16H0V0H16V16Z" stroke="var(--stroke-0, #E5E7EB)" />
          <path
            d={svgPaths.p20a2b800}
            fill="var(--fill-0, #404040)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Svg() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-center justify-center left-0 p-0 size-4 top-0"
      data-name="svg"
    >
      <Frame29 />
    </div>
  );
}

function I() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] left-6 size-4 top-4"
      data-name="i"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Svg />
    </div>
  );
}

function Span6() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-6 left-12 top-3 w-[212.625px]"
      data-name="span"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-6 leading-[0] left-[106.5px] not-italic text-[16px] text-center text-neutral-700 top-[0.44px] translate-x-[-50%] w-[213px]">
        <p className="block leading-[normal]">Charger plus de réparateurs</p>
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div
      className="absolute bg-neutral-100 h-12 left-[345.328px] rounded-lg top-px w-[284.625px]"
      data-name="button"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-lg" />
      <I />
      <Span6 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="h-4 relative shrink-0 w-[18px]" data-name="Frame">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 16"
      >
        <g id="Frame">
          <g clipPath="url(#clip0_2_360)">
            <path
              d={svgPaths.p255cfb00}
              fill="var(--fill-0, #404040)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_2_360">
            <path d="M0 0H18V16H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame31() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row h-4 items-center justify-center left-[25px] overflow-clip p-0 top-[17px] w-[18px]"
      data-name="Frame"
    >
      <Frame30 />
    </div>
  );
}

function Button13() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-[50px] left-[645.953px] rounded-lg top-0 w-[240.719px]"
      data-name="button"
    >
      <div className="absolute border border-neutral-300 border-solid inset-0 pointer-events-none rounded-lg" />
      <Frame31 />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-6 leading-[0] left-[133.5px] not-italic text-[16px] text-center text-neutral-700 top-[12.12px] translate-x-[-50%] w-[165px]">
        <p className="block leading-[24px]">Afficher sur une carte</p>
      </div>
    </div>
  );
}

function Section4() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-[51px] left-20 top-[1147px] w-[1348px]"
      data-name="section"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Button12 />
      <Button13 />
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute contents left-20 top-[250px]">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute contents left-0 top-20">
      <div className="absolute bg-[#f6f6f6] h-[126px] left-0 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-20 w-[1440px]" />
      <Section />
      <Group14 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="Frame">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g id="Frame">
          <g clipPath="url(#clip0_2_350)">
            <path
              d={svgPaths.p3b5b4a00}
              fill="var(--fill-0, white)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_2_350">
            <path d="M0 0H14V14H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Svg1() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-center justify-center left-0 p-0 size-3.5 top-0"
      data-name="svg"
    >
      <Frame32 />
    </div>
  );
}

function I1() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] left-[9px] size-3.5 top-[9px]"
      data-name="i"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Svg1 />
    </div>
  );
}

function Div57() {
  return (
    <div
      className="absolute bg-neutral-800 left-0 rounded size-8 top-0"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded" />
      <I1 />
    </div>
  );
}

function Div58() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-8 left-0 top-0 w-[311.062px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div57 />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-5 leading-[0] left-10 not-italic text-[14px] text-left text-neutral-600 top-[4.6px] w-[270px]">
        <p className="block leading-[20px]">
          © 2025 Fixify. Tous droits réservés.
        </p>
      </div>
    </div>
  );
}

function Div59() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-5 left-[980.531px] top-1.5 w-[267.469px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-5 leading-[0] left-0 not-italic text-[14px] text-left text-neutral-600 top-[-1.2px] w-[54px]">
        <p className="block leading-[20px]">Support</p>
      </div>
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-5 leading-[0] left-[76.875px] not-italic text-[14px] text-left text-neutral-600 top-[-1.2px] w-[72px]">
        <p className="block leading-[20px]">Conditions</p>
      </div>
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-5 leading-[0] left-[171.766px] not-italic text-[14px] text-left text-neutral-600 top-[-1.2px] w-[97px]">
        <p className="block leading-[20px]">Confidentialité</p>
      </div>
    </div>
  );
}

function Div60() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-8 left-4 top-6 w-[1248px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div58 />
      <Div59 />
    </div>
  );
}

function Div61() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-20 left-20 top-px w-[1280px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div60 />
    </div>
  );
}

function Footer() {
  return (
    <div
      className="absolute bg-[#f2f2f2] h-[81px] left-[-3px] top-[1242px] w-[1443px]"
      data-name="footer"
    >
      <div className="absolute border-[1px_0px_0px] border-neutral-200 border-solid inset-0 pointer-events-none shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
      <Div61 />
    </div>
  );
}

function TopBar() {
  return (
    <div
      className="absolute bg-[#ffffff] box-border content-stretch flex flex-row gap-5 h-20 items-center justify-center left-0 overflow-clip p-[20px] right-0 shadow-[0px_0px_6px_0px_rgba(0,0,0,0.12)] top-0"
      data-name="Top Bar"
    >
      <div className="bg-[rgba(0,0,0,0.1)] rounded-[100px] shrink-0 size-10" />
      <div
        className="basis-0 font-['Roboto:Medium',_sans-serif] font-medium grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#000000] text-[28px] text-left"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[36px]">LOGO</p>
      </div>
      <div
        className="bg-center bg-cover bg-no-repeat shrink-0 size-[35px]"
        data-name="image 15"
        style={{ backgroundImage: `url('${imgImage15}')` }}
      />
      <div
        className="bg-center bg-cover bg-no-repeat shrink-0 size-[35px]"
        data-name="image 14"
        style={{ backgroundImage: `url('${imgImage14}')` }}
      />
      <div
        className="bg-center bg-cover bg-no-repeat shrink-0 size-[35px]"
        data-name="image 17"
        style={{ backgroundImage: `url('${imgImage17}')` }}
      />
    </div>
  );
}

function Textfield() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-md shrink-0 w-full"
      data-name="textfield"
    >
      <div className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-md" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start px-3 py-2 relative w-full">
          <div
            className="basis-0 font-['Roboto:Regular',_sans-serif] font-normal grow h-5 leading-[0] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[rgba(0,0,0,0.5)] text-left text-nowrap"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[20px] overflow-inherit">
              Votre email
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-center overflow-clip p-0 relative shrink-0 w-[314px]"
      data-name="Input"
    >
      <div
        className="font-['Roboto:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#000000] text-[14px] text-left w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px]">Email</p>
      </div>
      <Textfield />
    </div>
  );
}

function Textfield1() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-md shrink-0 w-full"
      data-name="textfield"
    >
      <div className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-md" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start px-3 py-2 relative w-full">
          <div
            className="basis-0 font-['Roboto:Regular',_sans-serif] font-normal grow h-5 leading-[0] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[rgba(0,0,0,0.5)] text-left text-nowrap"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[20px] overflow-inherit">
              Votre mot de passe
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Input2() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 h-[60px] items-start justify-center overflow-clip p-0 relative shrink-0 w-[314px]"
      data-name="Input"
    >
      <div
        className="font-['Roboto:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#000000] text-[14px] text-left w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px]">Mot de passe</p>
      </div>
      <Textfield1 />
    </div>
  );
}

function List() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-2.5 h-[139px] items-center justify-center left-[732px] p-0 top-[491px] w-[433px]"
      data-name="list"
    >
      <Input1 />
      <Input2 />
    </div>
  );
}

function Primary() {
  return (
    <div
      className="absolute bg-[#000000] box-border content-stretch flex flex-col h-[47px] items-center justify-center left-[792px] pl-0 pr-3 py-3 rounded-md top-[666px] w-[314px]"
      data-name="primary"
    >
      <div
        className="font-['Roboto:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#ffffff] text-[16px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[24px] whitespace-pre">Se connecter</p>
      </div>
    </div>
  );
}

function KeyboardArrowDown() {
  return (
    <div
      className="absolute left-[1204.14px] size-[17.486px] top-[359.486px]"
      data-name="keyboard_arrow_down"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="keyboard_arrow_down">
          <path
            d={svgPaths.p2ee963c0}
            fill="var(--fill-0, #1D1B20)"
            id="icon"
          />
        </g>
      </svg>
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents left-[217.379px] top-[350px]">
      <div className="absolute h-[635.028px] left-[217.379px] top-[361.245px] w-[471.18px]">
        <div className="absolute bottom-0 left-0 right-[0.746%] top-0">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 468 636"
          >
            <path
              d={svgPaths.p25ff9680}
              id="Rectangle 25"
              stroke="var(--stroke-0, #8C8C8C)"
              strokeWidth="4"
            />
          </svg>
        </div>
      </div>
      <List />
      <div className="absolute h-[33.52px] left-[1150.57px] opacity-80 rounded-[70px] top-[350.072px] w-[74.588px]">
        <div className="absolute border-[#8c8c8c] border-[3px] border-solid inset-0 pointer-events-none rounded-[70px]" />
      </div>
      <Primary />
      <div className="absolute h-[41.901px] left-[792px] opacity-80 rounded-[70px] top-[763px] w-[317.455px]">
        <div className="absolute border-[#8c8c8c] border-[3px] border-solid inset-0 pointer-events-none rounded-[70px]" />
      </div>
      <div className="absolute h-[41.901px] left-[792px] opacity-80 rounded-[70px] top-[821px] w-[317.455px]">
        <div className="absolute border-[#8c8c8c] border-[3px] border-solid inset-0 pointer-events-none rounded-[70px]" />
      </div>
      <div
        className="absolute font-['Roboto:Bold',_sans-serif] font-bold leading-[0] left-[950.5px] text-[#000000] text-[40px] text-center top-[410px] translate-x-[-50%] w-[235px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[48px]">Connexion</p>
      </div>
      <div className="absolute h-0 left-[859px] top-[887px] w-[202.844px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 203 1"
          >
            <line
              id="Line 17"
              stroke="var(--stroke-0, #8C8C8C)"
              x2="202.844"
              y1="0.5"
              y2="0.5"
            />
          </svg>
        </div>
      </div>
      <div className="absolute flex h-[0.282px] items-center justify-center left-[969.965px] top-[740px] w-[74.421px]">
        <div className="flex-none rotate-[0.217deg]">
          <div className="h-0 relative w-[74.434px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 75 1"
              >
                <line
                  id="Line 9"
                  stroke="var(--stroke-0, #B0A9A9)"
                  x2="74.4336"
                  y1="0.5"
                  y2="0.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[0.291px] items-center justify-center left-[976.346px] top-[739.991px] w-[128.609px]">
        <div className="flex-none rotate-[359.87deg]">
          <div className="h-0 relative w-[128.619px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 129 1"
              >
                <line
                  id="Line 18"
                  stroke="var(--stroke-0, #B0A9A9)"
                  x2="128.619"
                  y1="0.5"
                  y2="0.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[0.308px] items-center justify-center left-[795px] top-[739.974px] w-[128.953px]">
        <div className="flex-none rotate-[359.863deg]">
          <div className="h-0 relative w-[128.965px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 129 1"
              >
                <line
                  id="Line 19"
                  stroke="var(--stroke-0, #B0A9A9)"
                  x2="128.965"
                  y1="0.5"
                  y2="0.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[9.311px] left-[1159.67px] top-[363.107px] w-[10.006px]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 10 10"
        >
          <path
            d={svgPaths.p363f6b00}
            id="Ellipse 8"
            stroke="var(--stroke-0, black)"
          />
        </svg>
      </div>
      <div className="absolute h-[9.311px] left-[1159.67px] top-[363.107px] w-[10.006px]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 10 10"
        >
          <path
            d={svgPaths.p363f6b00}
            id="Ellipse 8"
            stroke="var(--stroke-0, black)"
          />
        </svg>
      </div>
      {[...Array(2).keys()].map((_, i) => (
        <KeyboardArrowDown key={i} />
      ))}
      <div
        className="absolute font-['Roboto:Medium',_sans-serif] font-medium leading-[0] left-[862px] text-[#000000] text-[16px] text-left top-[774px] w-[187px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[24px]">Se connecter avec Google</p>
      </div>
      <div
        className="absolute font-['Roboto:Medium',_sans-serif] font-medium h-[37px] leading-[0] left-[855px] text-[#000000] text-[16px] text-left top-[830px] w-[212px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[24px]">{`Se connecter avec Microsoft `}</p>
      </div>
      <div
        className="absolute font-['Roboto:Medium',_sans-serif] font-medium h-[21px] leading-[0] left-[980px] text-[#000000] text-[14px] text-left top-[629px] w-[195px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[24px]">{`Mot de passe oublié? `}</p>
      </div>
      <div className="absolute h-0 left-[978px] top-[649px] w-[134px]">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 134 2"
          >
            <path d="M0 1H134" id="Line 21" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[997px] top-[922px] w-[122px]">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 122 2"
          >
            <path d="M0 1H122" id="Line 22" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
      <div
        className="absolute font-['Roboto:Medium',_sans-serif] font-medium h-3.5 leading-[24px] left-[726px] text-[#000000] text-[16px] text-left top-[361px] w-[77px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block mb-0">LOGO</p>
        <p className="block">&nbsp;</p>
      </div>
      <div
        className="absolute font-['Roboto:Medium',_sans-serif] font-medium h-[30px] leading-[0] left-[1176px] text-[#000000] text-[18px] text-left top-[350px] w-6"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[36px]">FR</p>
      </div>
      <div
        className="absolute font-['Roboto:Medium',_sans-serif] font-medium leading-[24px] left-[939.965px] size-[33px] text-[#000000] text-[16px] text-left top-[723px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block mb-0">ou</p>
        <p className="block">&nbsp;</p>
      </div>
      <div
        className="absolute font-['Roboto:Medium',_sans-serif] font-medium h-[31px] leading-[0] left-[792px] text-[#000000] text-[16px] text-left top-[899px] w-[373px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[24px]">{`Vous n'avez pas de compte? Créer un compte`}</p>
      </div>
      <div
        className="absolute font-['Roboto:Medium',_sans-serif] font-medium h-[52px] leading-[0] left-[381px] text-[#000000] text-[28px] text-left top-[646px] w-[136px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[24px]">PHOTO</p>
      </div>
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents left-[173px] top-[321px]">
      <div className="absolute bg-[#d9d9d9] h-[703px] left-[173px] rounded-[30px] top-[321px] w-[1107px]" />
      <Group10 />
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute contents left-[173px] top-[321px]">
      <Group11 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="relative shrink-0 size-5" data-name="Frame">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Frame">
          <g clipPath="url(#clip0_2_314)">
            <path
              d={svgPaths.p17f8d700}
              fill="var(--fill-0, black)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_2_314">
            <path d="M0 0H20V20H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame34() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-center justify-center left-0 overflow-clip p-0 size-5 top-0"
      data-name="Frame"
    >
      <Frame33 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="relative shrink-0 size-5" data-name="Frame">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Frame">
          <path d="M20 20H0V0H20V20Z" stroke="var(--stroke-0, #E5E7EB)" />
          <path
            d={svgPaths.p151eaa00}
            fill="var(--fill-0, black)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame36() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-center justify-center left-9 overflow-clip p-0 size-5 top-0"
      data-name="Frame"
    >
      <Frame35 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="h-5 relative shrink-0 w-[17.5px]" data-name="Frame">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 20"
      >
        <g id="Frame">
          <g clipPath="url(#clip0_2_324)">
            <path
              d={svgPaths.p34f9c700}
              fill="var(--fill-0, black)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_2_324">
            <path d="M0 0H17.5V20H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame38() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row h-5 items-center justify-center left-[72px] overflow-clip p-0 top-0 w-[17.5px]"
      data-name="Frame"
    >
      <Frame37 />
    </div>
  );
}

function Div62() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-5 left-[906px] top-[944px] w-[98px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Frame34 />
      <Frame36 />
      <Frame38 />
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute contents left-[1308px] top-[1116px]">
      <div className="absolute flex items-center justify-center left-[1308px] size-[100px] top-[1116px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div
            className="bg-center bg-cover bg-no-repeat size-[100px]"
            data-name="image 25"
            style={{ backgroundImage: `url('${imgImage25}')` }}
          />
        </div>
      </div>
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute contents left-[1308px] top-[1116px]">
      <div className="absolute flex items-center justify-center left-[1308px] size-[100px] top-[1116px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div
            className="bg-center bg-cover bg-no-repeat size-[100px]"
            data-name="image 25"
            style={{ backgroundImage: `url('${imgImage25}')` }}
          />
        </div>
      </div>
      <Group20 />
    </div>
  );
}

export default function Connexion() {
  return (
    <div className="bg-[#ffffff] relative size-full" data-name="Connexion">
      <Group16 />
      <Footer />
      <TopBar />
      <Group12 />
      <Div62 />
      <Group21 />
    </div>
  );
}