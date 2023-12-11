
export const Items=(props)=>{
let items=[]
    for (let i = 0; i <= props.num; i++) {
    items.push(<div key={i}>Item {i}</div>)
    }
    return items
}
