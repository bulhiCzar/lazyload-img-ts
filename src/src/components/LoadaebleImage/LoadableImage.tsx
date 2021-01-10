import s from './LoadableImage.module.css'
import {useEffect, useRef, useState} from "react";
import useOnScreen from "../../hooks/useOnScreen";

const cn = require('classnames');

export interface ILoadableImage {
    src: string,
    alt?: string,
    onLoad?(): void
}

const LoadableImage = (props: ILoadableImage) => {
    const {src, alt = '', onLoad = () => {}} = props
    const [isLoaded, setIsLoaded] = useState(false)

    const imgRef = useRef<HTMLImageElement | null>(null)
    const containerRef = useRef<HTMLDivElement | null>(null)

    const isVisible = useOnScreen(containerRef)

    useEffect(()=>{
        if (!isVisible || isLoaded) {
            return
        }
        if (imgRef.current){
            imgRef.current.onload = ()=> {
                setIsLoaded(true)
                onLoad()
            }
        }
    }, [isVisible, onLoad, isLoaded])

    return (
        <div ref={containerRef} className={cn(s.container, {
            [s.containerLoaded]: isLoaded
        })}>
            {
                (isVisible || isLoaded) && <img
                    ref={imgRef}
                    className={cn(s.image,{
                        [s.imageLoaded]: isLoaded
                    })}
                    src={src}
                    alt={alt}
                />
            }


        </div>
    )
}

export default LoadableImage