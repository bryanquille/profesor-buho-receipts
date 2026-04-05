interface ReceiptInfoPropsTypes {
  keyInfo: string;
  info: string | number;
}

function ReceiptInfo({ keyInfo, info }: ReceiptInfoPropsTypes) {
  return (
    <p>
      <span className="font-semibold">{keyInfo} </span>
      <span>{info}</span>
    </p>
  )
}

export default ReceiptInfo