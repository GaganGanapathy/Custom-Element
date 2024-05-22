class pinChecker extends HTMLElement{
    constructor(){
        super()
    }

    connectedCallback(){
        const shadow = this.attachShadow({mode:"open"})
        console.log("working")

        const result = document.createElement("div")

        const input =  document.createElement("input")
        input.style.marginRight = "5px"


        const submit =document.createElement("button")
        submit.innerText="Submit"

        submit.addEventListener("click",async (e)=>{
            try{
                const pin = parseInt(input.value)
                    const data= await fetch(`https://api.postalpincode.in/pincode/${pin}`)
                    const areaName = await data.json()
                    console.log(areaName[0].Status)
                    result.innerText=areaName[0].PostOffice[0].Name

            } catch(error){
                alert("Pincode does not exist")
            }
        })

        shadow.appendChild(input)
        shadow.appendChild(submit)
        shadow.appendChild(result)
    }
}

customElements.define("pin-checker",pinChecker)

