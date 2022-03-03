function earth_age(seconds:number):number {
    const num:number = (seconds/60/60/24/365.25)*100
    const floor_num:number = Math.ceil(num)
    return (floor_num / 100)
  }
  function mercury_age(seconds:number):number {
    const num:number = (seconds/60/60/24/87.97)*100
    const floor_num:number = Math.ceil(num)
    return (floor_num / 100)
  }
  function venus_age(seconds:number):number {
    const num:number = (seconds/60/60/24/224.7)*100
    const floor_num:number = Math.ceil(num)
    return (floor_num / 100)
  }
  function mars_age(seconds:number):number {
    const num:number = (seconds/60/60/24/687.0481462771)*100
    const floor_num:number = Math.floor(num)
    return (floor_num / 100)
  }
  function jupiter_age(seconds:number):number {
    const num:number = (seconds/60/60/24/4332.59)*100
    const floor_num:number = Math.ceil(num)
    return (floor_num / 100)
  }
  function saturn_age(seconds:number):number {
    const num:number = (seconds/60/60/24/10759.22)*100
    const floor_num:number = Math.floor(num)
    return (floor_num / 100)
  }
  function uranus_age(seconds:number):number {
    const num:number = (seconds/60/60/24/30688.5)*100
    const floor_num:number = Math.ceil(num)
    return (floor_num / 100)
  }
  function neptune_age(seconds:number):number {
    const num:number = (seconds/60/60/24/60195)*100
    const floor_num:number = Math.floor(num)
    return (floor_num / 100)
  }
  export function age(planet:string, seconds:number):number {
    if (planet === 'earth') {
      return earth_age(seconds)
    } else if (planet === 'mercury') {
      return mercury_age(seconds)
    } else if (planet === 'venus') {
      return venus_age(seconds)
    } else if (planet === 'mars') {
      return mars_age(seconds)
      
    } else if (planet === 'jupiter') {
      return jupiter_age(seconds)
      
    } else if (planet === 'saturn') {
      return saturn_age(seconds)
      
    } else if (planet === 'uranus') {
      return uranus_age(seconds)
      
    } else if (planet === 'neptune') {
      return neptune_age(seconds)
      
    } else {
      return 0
    }
}