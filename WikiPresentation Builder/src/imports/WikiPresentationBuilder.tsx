import svgPaths from "./svg-4ayoreyhpz";

function CX() {
  return <div className="absolute h-[585.333px] left-0 top-0 w-[909.333px]" data-name="cX" />;
}

function Text() {
  return <div className="absolute left-0 opacity-0 size-0 top-0" data-name="Text" />;
}

function Text1() {
  return <div className="absolute left-0 opacity-0 size-0 top-[585.33px]" data-name="Text" />;
}

function PrimitiveDiv() {
  return <div className="absolute bg-[rgba(0,0,0,0.5)] h-[585.333px] left-0 top-0 w-[909.333px]" data-name="Primitive.div" />;
}

function PrimitiveH() {
  return (
    <div className="h-[18px] relative shrink-0 w-[462.667px]" data-name="Primitive.h2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[18px] relative w-[462.667px]">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[18px] left-0 not-italic text-[18px] text-neutral-950 text-nowrap top-[-1.33px] whitespace-pre">Choose Your Presentation Template</p>
      </div>
    </div>
  );
}

function PrimitiveP() {
  return (
    <div className="h-[40px] relative shrink-0 w-[462.667px]" data-name="Primitive.p">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[40px] relative w-[462.667px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#717182] text-[14px] top-[-2px] w-[455px]">Click on a template card to select it. Each template has been designed for different teaching contexts.</p>
      </div>
    </div>
  );
}

function DialogHeader() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[8px] h-[106px] items-start left-[0.67px] pb-0 pl-[24px] pr-0 pt-[24px] top-[0.67px] w-[510.667px]" data-name="DialogHeader">
      <PrimitiveH />
      <PrimitiveP />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-[198px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[16.667px] py-[8.667px] relative w-[198px]">
        <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Back to Content Selection</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[110px]" data-name="Text">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#0f172b] text-[14px] top-[-2px] w-[111px]">Colorful Classroom</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[40px] relative shrink-0 w-[122.667px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[40px] relative w-[122.667px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#45556c] text-[14px] text-nowrap top-[-2px] whitespace-pre">Selected:</p>
        <Text2 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[40px] items-center left-[16px] top-[16.67px] w-[328.667px]" data-name="Container">
      <Button />
      <Text3 />
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[#155dfc] box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center left-[344.67px] px-[16px] py-[8px] rounded-[8px] top-[18.67px] w-[150px]" data-name="Button">
      <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">Continue to Editor</p>
    </div>
  );
}

function TemplateSelectionModal() {
  return (
    <div className="absolute bg-slate-50 h-[72.667px] left-[0.67px] top-[1188px] w-[510.667px]" data-name="TemplateSelectionModal">
      <div aria-hidden="true" className="absolute border-[0.667px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <Container />
      <Button1 />
    </div>
  );
}

function Container1() {
  return <div className="absolute bg-[rgba(255,255,255,0.9)] h-[12px] left-0 rounded-[4px] top-0 w-[128px]" data-name="Container" />;
}

function Container2() {
  return <div className="absolute bg-[rgba(255,255,255,0.7)] h-[8px] left-[24px] rounded-[4px] top-[16px] w-[80px]" data-name="Container" />;
}

function Container3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[128px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[128px]">
        <Container1 />
        <Container2 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-blue-600 h-[96px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px] border-slate-200 border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex h-[96px] items-center justify-center pl-[0.677px] pr-[0.667px] py-[0.667px] relative w-full">
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return <div className="absolute bg-blue-600 h-[8px] left-[12.67px] rounded-[4px] top-[12.67px] w-[96px]" data-name="Container" />;
}

function Container6() {
  return <div className="absolute bg-slate-200 h-[6px] left-0 rounded-[4px] top-0 w-[82.219px]" data-name="Container" />;
}

function Container7() {
  return <div className="absolute bg-slate-200 h-[6px] left-0 rounded-[4px] top-[10px] w-[82.219px]" data-name="Container" />;
}

function Container8() {
  return <div className="absolute bg-slate-200 h-[6px] left-0 rounded-[4px] top-[20px] w-[61.656px]" data-name="Container" />;
}

function Container9() {
  return (
    <div className="absolute h-[26px] left-[12.67px] top-[26.67px] w-[82.219px]" data-name="Container">
      <Container6 />
      <Container7 />
      <Container8 />
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-white h-[96px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px] border-slate-200 border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container5 />
      <Container9 />
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-slate-200 h-[48px] relative rounded-[4px] shrink-0 w-[64px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[48px] w-[64px]" />
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-white h-[96px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px] border-slate-200 border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex h-[96px] items-center justify-center pl-[0.667px] pr-[0.677px] py-[0.667px] relative w-full">
          <Container11 />
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-slate-50 h-[336px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[336px] items-start pb-0 pt-[16px] px-[16px] relative w-full">
          <Container4 />
          <Container10 />
          <Container12 />
        </div>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] top-[-1.67px] w-[57px]">Modern Lecture</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[80px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#45556c] text-[14px] top-[-2px] w-[86px]">Clean and contemporary design with bold headers</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="basis-0 grow h-[132px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[132px] items-start relative w-full">
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="opacity-0 relative rounded-[2.23696e+07px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[2.23696e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[24px]" />
    </div>
  );
}

function Container16() {
  return (
    <div className="box-border content-stretch flex h-[132px] items-start justify-between pl-0 py-0 relative shrink-0 w-full" data-name="Container">
      <Container14 />
      <Container15 />
    </div>
  );
}

function Container17() {
  return (
    <div className="bg-white h-[164.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[164.667px] items-start pb-0 pt-[16.667px] px-[16px] relative w-full">
          <Container16 />
        </div>
      </div>
    </div>
  );
}

function TemplateCard() {
  return (
    <div className="absolute h-[504.667px] left-0 rounded-[10px] top-0 w-[143.552px]" data-name="TemplateCard">
      <div className="box-border content-stretch flex flex-col h-[504.667px] items-start overflow-clip p-[2px] relative rounded-[inherit] w-[143.552px]">
        <Container13 />
        <Container17 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-slate-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container18() {
  return <div className="absolute bg-[rgba(255,255,255,0.9)] h-[12px] left-0 rounded-[4px] top-0 w-[128px]" data-name="Container" />;
}

function Container19() {
  return <div className="absolute bg-[rgba(255,255,255,0.7)] h-[8px] left-[24px] rounded-[4px] top-[16px] w-[80px]" data-name="Container" />;
}

function Container20() {
  return (
    <div className="h-[24px] relative shrink-0 w-[128px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[128px]">
        <Container18 />
        <Container19 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="bg-gray-800 h-[96px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px] border-slate-200 border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex h-[96px] items-center justify-center pl-[0.677px] pr-[0.667px] py-[0.667px] relative w-full">
          <Container20 />
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return <div className="absolute bg-gray-800 h-[8px] left-[12.67px] rounded-[4px] top-[12.67px] w-[96px]" data-name="Container" />;
}

function Container23() {
  return <div className="absolute bg-slate-200 h-[6px] left-0 rounded-[4px] top-0 w-[82.219px]" data-name="Container" />;
}

function Container24() {
  return <div className="absolute bg-slate-200 h-[6px] left-0 rounded-[4px] top-[10px] w-[82.219px]" data-name="Container" />;
}

function Container25() {
  return <div className="absolute bg-slate-200 h-[6px] left-0 rounded-[4px] top-[20px] w-[61.656px]" data-name="Container" />;
}

function Container26() {
  return (
    <div className="absolute h-[26px] left-[12.67px] top-[26.67px] w-[82.219px]" data-name="Container">
      <Container23 />
      <Container24 />
      <Container25 />
    </div>
  );
}

function Container27() {
  return (
    <div className="bg-white h-[96px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px] border-slate-200 border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container22 />
      <Container26 />
    </div>
  );
}

function Container28() {
  return (
    <div className="bg-slate-200 h-[48px] relative rounded-[4px] shrink-0 w-[64px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[48px] w-[64px]" />
    </div>
  );
}

function Container29() {
  return (
    <div className="bg-white h-[96px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px] border-slate-200 border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex h-[96px] items-center justify-center pl-[0.667px] pr-[0.677px] py-[0.667px] relative w-full">
          <Container28 />
        </div>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="bg-slate-50 h-[336px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[336px] items-start pb-0 pt-[16px] px-[16px] relative w-full">
          <Container21 />
          <Container27 />
          <Container29 />
        </div>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] top-[-1.67px] w-[78px]">Classic Blackboard</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[80px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#45556c] text-[14px] top-[-2px] w-[64px]">Traditional academic style with serif fonts</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="basis-0 grow h-[132px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[132px] items-start relative w-full">
        <Heading1 />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="opacity-0 relative rounded-[2.23696e+07px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[2.23696e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[24px]" />
    </div>
  );
}

function Container33() {
  return (
    <div className="box-border content-stretch flex h-[132px] items-start justify-between pl-0 py-0 relative shrink-0 w-full" data-name="Container">
      <Container31 />
      <Container32 />
    </div>
  );
}

function Container34() {
  return (
    <div className="bg-white h-[164.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[164.667px] items-start pb-0 pt-[16.667px] px-[16px] relative w-full">
          <Container33 />
        </div>
      </div>
    </div>
  );
}

function TemplateCard1() {
  return (
    <div className="absolute h-[504.667px] left-[159.55px] rounded-[10px] top-0 w-[143.552px]" data-name="TemplateCard">
      <div className="box-border content-stretch flex flex-col h-[504.667px] items-start overflow-clip p-[2px] relative rounded-[inherit] w-[143.552px]">
        <Container30 />
        <Container34 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-slate-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container35() {
  return <div className="absolute bg-[rgba(255,255,255,0.9)] h-[12px] left-0 rounded-[4px] top-0 w-[128px]" data-name="Container" />;
}

function Container36() {
  return <div className="absolute bg-[rgba(255,255,255,0.7)] h-[8px] left-[24px] rounded-[4px] top-[16px] w-[80px]" data-name="Container" />;
}

function Container37() {
  return (
    <div className="h-[24px] relative shrink-0 w-[128px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[128px]">
        <Container35 />
        <Container36 />
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="bg-amber-500 h-[96px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px] border-slate-200 border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex h-[96px] items-center justify-center pl-[0.677px] pr-[0.667px] py-[0.667px] relative w-full">
          <Container37 />
        </div>
      </div>
    </div>
  );
}

function Container39() {
  return <div className="absolute bg-amber-500 h-[8px] left-[12.67px] rounded-[4px] top-[12.67px] w-[96px]" data-name="Container" />;
}

function Container40() {
  return <div className="absolute bg-slate-200 h-[6px] left-0 rounded-[4px] top-0 w-[82.219px]" data-name="Container" />;
}

function Container41() {
  return <div className="absolute bg-slate-200 h-[6px] left-0 rounded-[4px] top-[10px] w-[82.219px]" data-name="Container" />;
}

function Container42() {
  return <div className="absolute bg-slate-200 h-[6px] left-0 rounded-[4px] top-[20px] w-[61.656px]" data-name="Container" />;
}

function Container43() {
  return (
    <div className="absolute h-[26px] left-[12.67px] top-[26.67px] w-[82.219px]" data-name="Container">
      <Container40 />
      <Container41 />
      <Container42 />
    </div>
  );
}

function Container44() {
  return (
    <div className="bg-white h-[96px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px] border-slate-200 border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container39 />
      <Container43 />
    </div>
  );
}

function Container45() {
  return (
    <div className="bg-slate-200 h-[48px] relative rounded-[4px] shrink-0 w-[64px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[48px] w-[64px]" />
    </div>
  );
}

function Container46() {
  return (
    <div className="bg-white h-[96px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px] border-slate-200 border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex h-[96px] items-center justify-center pl-[0.667px] pr-[0.677px] py-[0.667px] relative w-full">
          <Container45 />
        </div>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="bg-slate-50 h-[336px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[336px] items-start pb-0 pt-[16px] px-[16px] relative w-full">
          <Container38 />
          <Container44 />
          <Container46 />
        </div>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] top-[-1.67px] w-[74px]">Colorful Classroom</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[80px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#45556c] text-[14px] top-[-2px] w-[72px]">Vibrant and engaging with bright accents</p>
    </div>
  );
}

function Container48() {
  return (
    <div className="basis-0 grow h-[132px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[132px] items-start relative w-full">
        <Heading2 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p39be50} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container49() {
  return (
    <div className="bg-[#155dfc] relative rounded-[2.23696e+07px] shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[24px]">
        <Icon />
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="box-border content-stretch flex h-[132px] items-start justify-between pl-0 py-0 relative shrink-0 w-full" data-name="Container">
      <Container48 />
      <Container49 />
    </div>
  );
}

function Container51() {
  return (
    <div className="bg-white h-[164.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[164.667px] items-start pb-0 pt-[16.667px] px-[16px] relative w-full">
          <Container50 />
        </div>
      </div>
    </div>
  );
}

function TemplateCard2() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] h-[504.667px] left-[319.1px] rounded-[10px] top-0 w-[143.552px]" data-name="TemplateCard">
      <div className="box-border content-stretch flex flex-col h-[504.667px] items-start overflow-clip p-[2px] relative rounded-[inherit] w-[143.552px]">
        <Container47 />
        <Container51 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#155dfc] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_0px_0px_2px_#dbeafe,0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container52() {
  return <div className="absolute bg-[rgba(255,255,255,0.9)] h-[12px] left-0 rounded-[4px] top-0 w-[128px]" data-name="Container" />;
}

function Container53() {
  return <div className="absolute bg-[rgba(255,255,255,0.7)] h-[8px] left-[24px] rounded-[4px] top-[16px] w-[80px]" data-name="Container" />;
}

function Container54() {
  return (
    <div className="h-[24px] relative shrink-0 w-[128px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[128px]">
        <Container52 />
        <Container53 />
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="bg-slate-500 h-[96px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px] border-slate-200 border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex h-[96px] items-center justify-center pl-[0.677px] pr-[0.667px] py-[0.667px] relative w-full">
          <Container54 />
        </div>
      </div>
    </div>
  );
}

function Container56() {
  return <div className="absolute bg-slate-500 h-[8px] left-[12.67px] rounded-[4px] top-[12.67px] w-[96px]" data-name="Container" />;
}

function Container57() {
  return <div className="absolute bg-slate-200 h-[6px] left-0 rounded-[4px] top-0 w-[82.219px]" data-name="Container" />;
}

function Container58() {
  return <div className="absolute bg-slate-200 h-[6px] left-0 rounded-[4px] top-[10px] w-[82.219px]" data-name="Container" />;
}

function Container59() {
  return <div className="absolute bg-slate-200 h-[6px] left-0 rounded-[4px] top-[20px] w-[61.656px]" data-name="Container" />;
}

function Container60() {
  return (
    <div className="absolute h-[26px] left-[12.67px] top-[26.67px] w-[82.219px]" data-name="Container">
      <Container57 />
      <Container58 />
      <Container59 />
    </div>
  );
}

function Container61() {
  return (
    <div className="bg-white h-[96px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px] border-slate-200 border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container56 />
      <Container60 />
    </div>
  );
}

function Container62() {
  return (
    <div className="bg-slate-200 h-[48px] relative rounded-[4px] shrink-0 w-[64px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[48px] w-[64px]" />
    </div>
  );
}

function Container63() {
  return (
    <div className="bg-white h-[96px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px] border-slate-200 border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex h-[96px] items-center justify-center pl-[0.667px] pr-[0.677px] py-[0.667px] relative w-full">
          <Container62 />
        </div>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="bg-slate-50 h-[336px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[336px] items-start pb-0 pt-[16px] px-[16px] relative w-full">
          <Container55 />
          <Container61 />
          <Container63 />
        </div>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] top-[-1.67px] w-[58px]">Minimal Thesis</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[80px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#45556c] text-[14px] top-[-2px] w-[78px]">Elegant and distraction-free presentation</p>
    </div>
  );
}

function Container65() {
  return (
    <div className="basis-0 grow h-[132px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[132px] items-start relative w-full">
        <Heading3 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="opacity-0 relative rounded-[2.23696e+07px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[2.23696e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[24px]" />
    </div>
  );
}

function Container67() {
  return (
    <div className="box-border content-stretch flex h-[132px] items-start justify-between pl-0 py-0 relative shrink-0 w-full" data-name="Container">
      <Container65 />
      <Container66 />
    </div>
  );
}

function Container68() {
  return (
    <div className="bg-white h-[164.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[164.667px] items-start pb-0 pt-[16.667px] px-[16px] relative w-full">
          <Container67 />
        </div>
      </div>
    </div>
  );
}

function TemplateCard3() {
  return (
    <div className="absolute h-[504.667px] left-0 rounded-[10px] top-[520.67px] w-[143.552px]" data-name="TemplateCard">
      <div className="box-border content-stretch flex flex-col h-[504.667px] items-start overflow-clip p-[2px] relative rounded-[inherit] w-[143.552px]">
        <Container64 />
        <Container68 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-slate-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container69() {
  return <div className="absolute bg-[rgba(255,255,255,0.9)] h-[12px] left-0 rounded-[4px] top-0 w-[128px]" data-name="Container" />;
}

function Container70() {
  return <div className="absolute bg-[rgba(255,255,255,0.7)] h-[8px] left-[24px] rounded-[4px] top-[16px] w-[80px]" data-name="Container" />;
}

function Container71() {
  return (
    <div className="h-[24px] relative shrink-0 w-[128px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[128px]">
        <Container69 />
        <Container70 />
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="bg-cyan-600 h-[96px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px] border-slate-200 border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex h-[96px] items-center justify-center pl-[0.677px] pr-[0.667px] py-[0.667px] relative w-full">
          <Container71 />
        </div>
      </div>
    </div>
  );
}

function Container73() {
  return <div className="absolute bg-cyan-600 h-[8px] left-[12.67px] rounded-[4px] top-[12.67px] w-[96px]" data-name="Container" />;
}

function Container74() {
  return <div className="absolute bg-slate-200 h-[6px] left-0 rounded-[4px] top-0 w-[82.219px]" data-name="Container" />;
}

function Container75() {
  return <div className="absolute bg-slate-200 h-[6px] left-0 rounded-[4px] top-[10px] w-[82.219px]" data-name="Container" />;
}

function Container76() {
  return <div className="absolute bg-slate-200 h-[6px] left-0 rounded-[4px] top-[20px] w-[61.656px]" data-name="Container" />;
}

function Container77() {
  return (
    <div className="absolute h-[26px] left-[12.67px] top-[26.67px] w-[82.219px]" data-name="Container">
      <Container74 />
      <Container75 />
      <Container76 />
    </div>
  );
}

function Container78() {
  return (
    <div className="bg-white h-[96px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px] border-slate-200 border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container73 />
      <Container77 />
    </div>
  );
}

function Container79() {
  return (
    <div className="bg-slate-200 h-[48px] relative rounded-[4px] shrink-0 w-[64px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[48px] w-[64px]" />
    </div>
  );
}

function Container80() {
  return (
    <div className="bg-white h-[96px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px] border-slate-200 border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex h-[96px] items-center justify-center pl-[0.667px] pr-[0.677px] py-[0.667px] relative w-full">
          <Container79 />
        </div>
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="bg-slate-50 h-[336px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[336px] items-start pb-0 pt-[16px] px-[16px] relative w-full">
          <Container72 />
          <Container78 />
          <Container80 />
        </div>
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] top-[-1.67px] w-[64px]">Scientific Journal</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[80px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#45556c] text-[14px] top-[-2px] w-[75px]">Professional research-oriented layout</p>
    </div>
  );
}

function Container82() {
  return (
    <div className="basis-0 grow h-[132px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[132px] items-start relative w-full">
        <Heading4 />
        <Paragraph4 />
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="opacity-0 relative rounded-[2.23696e+07px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[2.23696e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[24px]" />
    </div>
  );
}

function Container84() {
  return (
    <div className="box-border content-stretch flex h-[132px] items-start justify-between pl-0 py-0 relative shrink-0 w-full" data-name="Container">
      <Container82 />
      <Container83 />
    </div>
  );
}

function Container85() {
  return (
    <div className="bg-white h-[164.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[164.667px] items-start pb-0 pt-[16.667px] px-[16px] relative w-full">
          <Container84 />
        </div>
      </div>
    </div>
  );
}

function TemplateCard4() {
  return (
    <div className="absolute h-[504.667px] left-[159.55px] rounded-[10px] top-[520.67px] w-[143.552px]" data-name="TemplateCard">
      <div className="box-border content-stretch flex flex-col h-[504.667px] items-start overflow-clip p-[2px] relative rounded-[inherit] w-[143.552px]">
        <Container81 />
        <Container85 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-slate-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function TemplateSelectionModal1() {
  return (
    <div className="absolute h-[1025.33px] left-[24.67px] overflow-clip top-[122.67px] w-[462.667px]" data-name="TemplateSelectionModal">
      <TemplateCard />
      <TemplateCard1 />
      <TemplateCard2 />
      <TemplateCard3 />
      <TemplateCard4 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-0 size-[16px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M12 4L4 12" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M4 4L12 12" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function DialogContent() {
  return (
    <div className="absolute left-[-1px] overflow-clip size-px top-[15px]" data-name="DialogContent">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-1.67px] whitespace-pre">Close</p>
    </div>
  );
}

function PrimitiveButton() {
  return (
    <div className="absolute left-[479.33px] opacity-70 rounded-[2px] size-[16px] top-[16.67px]" data-name="Primitive.button">
      <Icon1 />
      <DialogContent />
    </div>
  );
}

function PrimitiveDiv1() {
  return (
    <div className="absolute bg-white h-[497.531px] left-[198.67px] rounded-[10px] top-[43.9px] w-[512px]" data-name="Primitive.div">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <DialogHeader />
      <TemplateSelectionModal />
      <TemplateSelectionModal1 />
      <PrimitiveButton />
    </div>
  );
}

export default function WikiPresentationBuilder() {
  return (
    <div className="bg-white relative size-full" data-name="WikiPresentation Builder">
      <CX />
      <Text />
      <Text1 />
      <PrimitiveDiv />
      <PrimitiveDiv1 />
    </div>
  );
}