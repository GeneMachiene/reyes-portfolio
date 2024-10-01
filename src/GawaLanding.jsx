import { ImSpinner2 } from "react-icons/im";

function GawaLanding() {
  return (
    <div className="flex items-center justify-center h-full w-full">
      <iframe 
        style={{border: "1px solid rgba(0, 0, 0, 0.1)", zIndex:10}}
        width="100%"
        height="100%" 
        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FTWe15cZ2luH5lEZsn2byt9%2FGawa%3Fnode-id%3D6-1012%26t%3DIOmW9BgxE3ioMAGT-1%26scaling%3Dscale-down%26content-scaling%3Dfixed%26page-id%3D4%253A181%26starting-point-node-id%3D6%253A1012"
        allowFullScreen 
      />
      <ImSpinner2 className="z-0 absolute animate-spin text-5xl text-violet-600 opacity-85"/>
    </div>
  )
}

export default GawaLanding