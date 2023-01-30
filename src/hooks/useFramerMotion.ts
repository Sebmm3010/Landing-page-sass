import { useInView, useAnimationControls, motion as m } from 'framer-motion';
import { useRef } from 'react';

type variant = 'visible' | 'hidden';

export const useFramerMotion = () => {

    const ref=useRef(null);

    const inView = useInView(ref);
    const control = useAnimationControls();
    const controlFunction = (varian1: variant, variant2: variant, justOnes?:boolean) => {
        if (inView) {
            control.start(varian1);
        } else {
            if (justOnes) return;
            control.start(variant2);
        }
    }
    return {
        //* Parameter
        inView,
        control,
        m,
        ref,
        //* Metodos
        controlFunction
    }

}