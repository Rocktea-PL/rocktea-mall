
import { useLottie } from "lottie-react";
import BouncingLoader from '../../bounce-loader.json'
export default function GlobalLoader() {
    const options = {
        animationData: BouncingLoader,
        loop: true
        
      };
    
      const { View } = useLottie(options);
  return (
    <div className="w-[300px] h-[300px] flex items-center justify-center mx-auto mt-[200px] fill-orange">{View}</div>
  )
}
