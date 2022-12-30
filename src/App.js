import './App.css';
import Card from './components/Card';
import {  useState } from 'react';

function App() {
  const [list, setList] = useState([]); 
  const [city, setCity] = useState("");
  const onChange = e=> setCity(e.target.value)
  const onSubmit = e=>{
    e.preventDefault();
    getData();
  }
  const getData = ()=>{
    console.log("test sub");
    const url=`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=1635890035cbba097fd5c26c8ea672a1`;
    fetch(url).then(res=> res.json()).then(data => {
      var map={}
      data.list.forEach(( current)=>{
        let dateStr = current.dt_txt.substr(0, 10);
        if(!map[dateStr]){
          map[dateStr] = current
        }
        
      },{})
      console.log("testmap",map);
      setList(Object.values(map));
    })
  }
  console.log(list);
  return (
    <div class="wrapper">
        <div class="header">
            <form class="formWrapper" onSubmit={onSubmit}>
                <input class="inputWrapper" onChange={onChange}/>
                <button type="submit" class="searchWrapper">Search</button>
            </form>
        </div>
        <div class="calenderList">
            {list.map(node=> <Card data={node}/>)}
        </div>
    </div>
  );
}

export default App;