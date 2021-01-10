import s from './ImageGrid.module.css'
import LoadableImage from "../LoadaebleImage/LoadableImage";

export interface IImageGrid {
    data: string[]
}

const ImageGrid = (props: IImageGrid)=>{
    const {data} = props
    return(
        <div className={s.conteiner}>
            {
                data.map((item, idx)=>{
                    return(
                        <div key={idx} className={s.item}>
                            <LoadableImage src={item}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ImageGrid