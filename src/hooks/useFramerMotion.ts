import { useInView, useAnimationControls, motion as m } from 'framer-motion';



export const useFramerMotion = (ref: React.MutableRefObject<null>) => {

    const inView = useInView(ref);
    const control = useAnimationControls();
    const controlFunction = (varian1: string, variant2: string) => {
        if (inView) {
            control.start(varian1);
        } else {
            control.start(variant2);
        }
    }
    return {
        //* Parameter
        inView,
        control,
        m,
        //* Metodos
        controlFunction
    }

}