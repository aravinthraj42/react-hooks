import {useEffect} from 'react'

export default function useDocTitlehook(count) {

    useEffect(()=>{
        document.title = `Count ${count} times`
    },[count])

}
