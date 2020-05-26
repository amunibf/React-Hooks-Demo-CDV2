import React, { useState } from 'react'
import useDocumentTitle from '../hooks/useDocumentTitle';

function DocTitleOne() {
    const [count, setCount] = useState(0);

    useDocumentTitle(count)
/*     useEffect(()=>{
        document.title = `Count - ${count}`
    },[count]) */
    return (
        <div>
            <button onClick={()=>setCount(count+1)}>Count - {count}</button>
        </div>
    )
}

export default DocTitleOne
