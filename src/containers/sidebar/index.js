import React, { memo } from 'react'
import bgImage from "../../assets/img/thumbnail.svg"

function Sidebar({image}) {
    return (
        <div className="login-image mt-4 " >
            <div className="vertical">
                <img width="350" src={image?image:bgImage}></img>
            </div>
        </div>

    )
}
export default memo(Sidebar)
