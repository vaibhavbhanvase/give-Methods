var cl = console.log;

const giveMethodsIgroup = document.getElementById("giveMethodsIgroup")
const giveMethodsHeGroup = document.getElementById("giveMethodsHeGroup")


result = ""
giveMethodsIGroupArray.forEach((obj, i) => {
    result += `
        <tr>
        <td><strong>${[i + 1]}</strong></td>
        <td><strong>${obj.english}</strong></td>
        <td><strong>${obj.marathi}</strong></td>
        </tr>    
    `
})
giveMethodsIgroup.innerHTML = result

result1 = ""
giveMethodsHeGroupArray.forEach((obj, i) => {
    result1 += `
        <tr>
        <td><strong>${[i + 1]}</strong></td>
        <td><strong>${obj.english}</strong></td>
        <td><strong>${obj.marathi}</strong></td>
        </tr>    
    `
})
giveMethodsHeGroup.innerHTML = result1





