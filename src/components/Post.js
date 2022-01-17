 import React from "react";

export default function Post(props) {
    let {id, userid, title, body}=props

return(
    <div>
        {id}-{userid}-{title}-{body}
    </div>
)
}
