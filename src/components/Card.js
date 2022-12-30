import React from 'react'

const Card = (props)=> {
    const {pressure,humidity, temp_max, temp_min} = props.data.main;
  return (
    <table class="calender" border="1"  >
                <tr><td colspan="2" class="headerRow">Date: {new Date(props.data.dt_txt.substr(0, 10)).toLocaleDateString("en-UK")}</td></tr>
                <tr><td colspan="2">Temperature</td></tr>
                <tr><td>Min</td><td>Max</td></tr>
                <tr><td>{temp_max}</td><td>{temp_min}</td></tr>
                <tr><td>Pressure</td><td>{pressure}</td></tr>
                <tr><td>Humidity</td><td>{humidity}</td></tr>
            </table>
  )
}

export default Card