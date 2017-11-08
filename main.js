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

const $allef = document.querySelector('.allef-image')
const $jake = document.querySelector('.jake-image')
const $brook = document.querySelector('.brook-image')
const $allefSidebar = document.querySelector('.allef-side-image')
const $jakeSidebar = document.querySelector('.jake-side-image')
const $brookSidebar = document.querySelector('.brook-side-image')
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
            $allefName.classList.add('allef-name')
            allef.appendChild($allefName)
          })
          break
          case 2:
          $brookTag.forEach(brook => {
            const $brookName = document.createElement('p')
            $brookName.textContent = employee.first_name.toUpperCase() + ' ' + employee.last_name.toUpperCase()
            brook.appendChild($brookName)
          })
          break
          case 5:
          $jakeTag.forEach(jake => {
            const $jakeName = document.createElement('p')
            $jakeName.textContent = employee.first_name.toUpperCase() + ' ' + employee.last_name.toUpperCase()
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
          $allef.src = employee.light
          $allefSidebar.src = employee.light
          break
          case 2:
          $brook.src = employee.light
          $brookSidebar.src = employee.light
          break
          case 5:
          $jake.src = employee.light
          $jakeSidebar.src = employee.light
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
            brook.appendChild($brookJob)
          })
          break
          case 5:
          $jakeTag.forEach(jake => {
            const $jakeJob = document.createElement('p')
            $jakeJob.textContent = employee.title.toLowerCase()
            $jakeJob.setAttribute('id', 'jake-job')
            jake.appendChild($jakeJob)
          })
      }
    })
  })
