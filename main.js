async function names() {
  const response = await fetch('https://techi.envivent.com/names.json')
  return await response.json()
}

async function images() {
  const response = await fetch('https://techi.envivent.com/images.json')
  return await response.json()
}

async function descriptions() {
  const response = await fetch('https://techi.envivent.com/description.json')
  return await response.json()
}

const $allef = document.querySelector('.allef')
const $jake = document.querySelector('.jake')
const $brook = document.querySelector('.brook')
const $allefSidebar = document.querySelector('.allef-sidebar')
const $jakeSidebar = document.querySelector('.jake-sidebar')
const $brookSidebar = document.querySelector('.brook-sidebar')
const $brookTag = document.querySelectorAll('.brook-tag')
const $jakeTag = document.querySelectorAll('.jake-tag')
const $allefTag = document.querySelectorAll('.allef-tag')

names()
  .then(data => {
    data.employees.forEach(employee => {
      switch(employee.id) {
          case 1:
          $allefTag.forEach(allef => {
            const $allefName = document.createElement('p')
            $allefName.textContent = employee.first_name.toUpperCase() + ' ' + employee.last_name.toUpperCase()
            $allefName.classList.add('allef-name','allef-tag-content')
            allef.appendChild($allefName)
          })
          break
          case 2:
          $brookTag.forEach(brook => {
            const $brookName = document.createElement('p')
            $brookName.textContent = employee.first_name.toUpperCase() + ' ' + employee.last_name.toUpperCase()
            $brookName.classList.add('brook-tag-content')
            brook.appendChild($brookName)
          })
          break
          case 5:
          $jakeTag.forEach(jake => {
            const $jakeName = document.createElement('p')
            $jakeName.textContent = employee.first_name.toUpperCase() + ' ' + employee.last_name.toUpperCase()
            $jakeName.classList.add('jake-tag-content')
            jake.appendChild($jakeName)
          })
      }
      })
    })
  .catch(err => console.log(err))

images()
  .then(data => {
    data.employees.forEach(employee => {
      switch(employee.id) {
          case 1:
          $allef.setAttribute('style', `background-repeat: no-repeat;background: url(${employee.light}); background-size: cover`)
          $allefSidebar.setAttribute('style', `background-repeat: no-repeat;background: url(${employee.light}); background-size: cover`)
          break
          case 2:
          $brook.setAttribute('style', `background-repeat: no-repeat;background: url(${employee.light}); background-size: cover`)
          $brookSidebar.setAttribute('style', `background-repeat: no-repeat;background: url(${employee.light}); background-size: cover`)
          break
          case 5:
          $jake.setAttribute('style', `background-repeat: no-repeat;background: url(${employee.light}); background-size: cover`)
          $jakeSidebar.setAttribute('style', `background-repeat: no-repeat;background: url(${employee.light}); background-size: cover`)
      }
    })
  })
  .catch(err => console.log(err))

descriptions()
  .then(data => {
    data.employees.forEach(employee => {
      switch(employee.id) {
          case 1:
          $allefTag.forEach(allef => {
            const $allefJob = document.createElement('p')
            const $allefDescription = document.createElement('p')
            $allefDescription.textContent = employee.description
            $allefDescription.setAttribute('id', 'description')
            $allefJob.textContent = employee.title.toLowerCase()
            $allefJob.setAttribute('id', 'allef-job')
            $allefJob.classList.add('allef-tag-content')
            $allefDescription.classList.add('allef-tag-content')
            allef.appendChild($allefJob)
            allef.appendChild($allefDescription)
          })
          break
          case 2:
          $brookTag.forEach(brook => {
            console.log(brook)
            const $brookJob = document.createElement('p')
            $brookJob.textContent = employee.title.toLowerCase()
            $brookJob.setAttribute('id', 'brook-job')
            $brookJob.classList.add('brook-tag-content')
            brook.appendChild($brookJob)
          })
          break
          case 5:
          $jakeTag.forEach(jake => {
            const $jakeJob = document.createElement('p')
            $jakeJob.textContent = employee.title.toLowerCase()
            $jakeJob.setAttribute('id', 'jake-job')
            $jakeJob.classList.add('jake-tag-content')
            jake.appendChild($jakeJob)
          })
      }
    })
  })
