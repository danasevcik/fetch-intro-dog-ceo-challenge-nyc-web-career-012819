document.addEventListener("DOMContentLoaded", function() {
  // console.log('%c HI', 'color: firebrick')

  let picContainter = document.querySelector('#dog-image-container')

  fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(function(data) {
    return data.json()
  }).then(function(json) {
    // console.log(json)
    // console.log(json.message)
    return json.message
  })
  .then(function(jsonedData){
    jsonedData.forEach(function(url) {
      // console.log(url)
      let picElement = document.createElement('img')
      picElement.src = url
      picContainter.append(picElement)
    })
  })

  let breedListContainer = document.querySelector('#dog-breeds')

  fetch("https://dog.ceo/api/breeds/list/all")
  .then(function(data) {
    return data.json()
  }).then(function(json) {
    // console.log(json)
    // console.log(json.message)
    return json.message
  }).then(function(jsonData) {
    Object.keys(jsonData).forEach(function(breed) {
      let listItem = document.createElement('li')
      listItem.innerText = breed
      breedListContainer.append(listItem)
    })
  })
  //
  // let listItemArray = Array.from(document.getElementById("dog-breeds").getElementsByTagName('li'));
  //
  // listItemArray.forEach(function(listItem) {
  //   listItem.addEventListener('click', function(e) {
  //     e.target.style.color = 'pink'
  //     e.target.style.backgroundColor = 'hotpink'
  //   })
  // })

  let listContainter = document.getElementById("dog-breeds")

  listContainter.addEventListener("click", function(e) {
    // console.log(e.target.nodeName)
    if (e.target.nodeName === 'LI') {
      e.target.style.color = 'pink'
      e.target.style.backgroundColor = 'hotpink'
      // console.log('worked')
    }
  })

  // let breedFilterOptions = Array.from(document.querySelectorAll('option'))
  //
  // breedFilterOptions.forEach(function(letterOption) {
  //   console.log(letterOption)
  //   console.log(letterOption.value)
  //   let letterValue = letterOption.value
  //   letterOption.addEventListener("change", function(e) {
  //     console.log('hi')
  //   })
  // })


  let breedDropDown = document.getElementById('breed-dropdown')

  document.addEventListener("change", function(e) {
    console.log('ANYTHINGGGGGGGGGGGG')
    let letterPicked = breedDropDown.value
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(function(data) {
      return data.json()
    }).then(function(json) {
      return json.message
    }).then(function(jsonData) {
      breedListContainer.innerHTML = ''
      Object.keys(jsonData).forEach(function(breed) {
        if (breed[0] === letterPicked) {
          let listItem = document.createElement('li')
          listItem.innerText = breed
          breedListContainer.append(listItem)
        }
      })
    })
  })


})
