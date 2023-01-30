export const list = {
    visible: {
        opacity: 1,
    },
    hidden: {
        opacity: 0,
    },
};
export const item1 = {
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            stifness: 300,
            damping: 24,
            delay: 0.5,
        },
    },
    hidden: {
        opacity: 0,
        x: -50,
    },
};
export const item2 = {
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            stifness: 300,
            damping: 24,
            delay: 0.5,
        },
    },
    hidden: {
        opacity: 0,
        x: 50,
    },
};

export const variants = {
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
        },
    },

    hidden: {
        opacity: 0,
        scale: 0,
    },
};