interface ReceiptInfoPropsTypes {
  keyInfo: string;
  info: string | number | undefined;
  textSize?: 'sm' | 'md' | 'base' | 'lg';
  isTextLightTheme: boolean;
}

function ReceiptInfo({ keyInfo, info, textSize = 'base', isTextLightTheme }: ReceiptInfoPropsTypes) {
  const textSizes = {
    sm: 'text-sm',
    md: 'text-md',
    base: 'text-base',
    lg: 'text-lg'
  };

  return (
    <p className="flex flex-col">
      <span
        className={`font-semibold uppercase text-sm ${isTextLightTheme ? 'text-gray-500' : 'text-gray-500 dark:text-gray-400'}`}
      >{keyInfo} </span>
      <span className={`${textSizes[textSize]} ${isTextLightTheme ? 'text-slate-950' : 'text-slate-950 dark:text-primary-neutral'}`}>{info}</span>
    </p>
  )
}

export default ReceiptInfo