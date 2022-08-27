// side input  
const sideA = document.getElementById('sideA')
const sideB = document.getElementById('sideB')
const sideC = document.getElementById('sideC')

// button 
const button = document.getElementById('buttonResultTypeTriangle')

//area-content
const areaContentResult = document.getElementById('area-result')

function getTriangleType(sideA, sideB, sideC) {


  if (sideA === sideB && sideB === sideC) {
    areaContentResult.innerHTML = 'equilateral'
    return 'equilateral'
  }

  if (sideA === sideB || sideA === sideC || sideB === sideA || sideB == sideC) {
    areaContentResult.innerHTML = 'isosceles'

    return 'isosceles'
  }
  areaContentResult.innerHTML = 'scalene'

  return 'scalene'
}

function result(event) {
  event.preventDefault()

  getTriangleType(sideA.value, sideB.value, sideC.value)
}
button.addEventListener("click", result);



















