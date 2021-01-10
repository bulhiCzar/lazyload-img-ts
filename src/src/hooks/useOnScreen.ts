import React from "react";

const useOnScreen = (ref: React.MutableRefObject<HTMLElement | null>, rootMargin = '0px') => {
    const [isIntersecting, setIntersecting] = React.useState(false);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIntersecting(entry.isIntersecting);
            }, {rootMargin})
        if (ref.current) {
            observer.observe(ref.current)
        }
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current)
            }
        }
    }, [ref, rootMargin])
    return isIntersecting
}

export default useOnScreen