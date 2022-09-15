import React from 'react'
type demoProps={
    status:"string"
}
type DataFetchProps={
    status:"loading"|"error"|"success"
}
const DataFetch = ({status}:DataFetchProps) => {
    if(status==="loading"){
      return <h2>Data is  loading...</h2>
    }else if(status==="error"){
     return  <h2>Data could not Fetch</h2>
    }else{
        return <h2>Data Fetch  successfully</h2>
    }
 
}

export default DataFetch
