interface ReceiptInfoPropsTypes {
  keyInfo: string;
  info: string | number | undefined;
  textSize?: 'sm' | 'md' | 'base' | 'lg';
}

function ReceiptInfo({ keyInfo, info, textSize = 'base' }: ReceiptInfoPropsTypes) {
  const textSizes = {
    sm: 'text-sm',
    md: 'text-md',
    base: 'text-base',
    lg: 'text-lg'
  };

  return (
    <p className="flex flex-col">
      <span className="font-semibold uppercase text-sm text-gray-500 dark:text-gray-400">{keyInfo} </span>
      <span className={`${textSizes[textSize]} text-slate-950 dark:text-primary-neutral`}>{info}</span>
    </p>
  )
}

export default ReceiptInfo